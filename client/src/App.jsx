import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        privateKey={privateKey}
        setPrivateKey={setPrivateKey}
        publicKey={publicKey}
        setPublicKey={setPublicKey}
        address={address}
        setAddress={setAddress}
      />
      <Transfer setBalance={setBalance} privateKey={privateKey} address={address} />
    </div>
  );
}

export default App;
