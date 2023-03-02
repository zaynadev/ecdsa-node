const secp = require("ethereum-cryptography/secp256k1");
const { toHex, hexToBytes } = require("ethereum-cryptography/utils");

const privateKey = secp.utils.randomPrivateKey();
const formatedPrivateKey = toHex(privateKey);
const publicKey = secp.getPublicKey(privateKey);
const formatedPublicKey = toHex(publicKey);
const binaryPublicKey = hexToBytes(formatedPublicKey);
console.log({ privateKey, publicKey, binaryPublicKey });
