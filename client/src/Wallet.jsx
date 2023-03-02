import server from "./server";
import { getPublicKey } from "ethereum-cryptography/secp256k1";
import { toHex, hexToBytes } from "ethereum-cryptography/utils";

function Wallet({ balance, setBalance, privateKey, setPrivateKey, publicKey, setPublicKey }) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    const bytePublicKey = getPublicKey(hexToBytes(privateKey));
    const hexPublicKey = toHex(bytePublicKey);
    setPrivateKey(privateKey);
    setPublicKey(hexPublicKey);
    if (hexPublicKey) {
      const {
        data: { balance },
      } = await server.get(`balance/${hexPublicKey}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>

      <label>
        Private key
        <input placeholder="Type an address, for example: 0x1" value={privateKey} onChange={onChange}></input>
      </label>
      <label>
        Public key: {publicKey.slice(0, 10)}...{publicKey.slice(-6)}
      </label>
      <div className="balance">Balance: {balance}</div>
    </div>
  );
}

export default Wallet;
