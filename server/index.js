const express = require("express");
const app = express();
const cors = require("cors");
const secp = require("ethereum-cryptography/secp256k1");
const { toHex, hexToBytes } = require("ethereum-cryptography/utils");

const { publicKey_1, publicKey_2, publicKey_3, publicKey_4 } = require("./keys");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  [publicKey_1]: 100,
  [publicKey_2]: 50,
  [publicKey_3]: 75,
  [publicKey_4]: 150,
};

app.get("/balance/:publicKey", (req, res) => {
  const { publicKey } = req.params;
  const balance = balances[publicKey] || 0;
  res.send({ balance });
});

app.post("/send", async (req, res) => {
  const { HashedMessage, signature, recoveryBit, recipient, amount } = req.body;

  const publicKey = toHex(secp.recoverPublicKey(hexToBytes(HashedMessage), hexToBytes(signature), recoveryBit));

  setInitialBalance(publicKey);
  setInitialBalance(recipient);

  if (balances[publicKey] < +amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[publicKey] -= +amount;
    balances[recipient] += +amount;
    res.send({ balance: balances[publicKey] });
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}
