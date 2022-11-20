import React, { useState, useEffect } from "react";
import Web3 from "web3";
import Welcome from "./components/Intro/Welcome.jsx";
import Accounts from "./components/Intro/Accounts.jsx";
import SendEther from "./components/Intro/SendEther.jsx";
import "./App.css";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [account, setAccount] = useState(null); //child to parent transfer
  const saveAccountAddress = (accountAddress) => {
    setAccount(accountAddress);
  };

  useEffect(() => {
    const init = async () => {
      try {
        const web3 = new Web3("http://127.0.0.1:7545");
        setWeb3(web3);
        // console.log(state);
      } catch (error) {
        alert("Falied to load web3 or contract.");
        console.log(error);
      }
    };
    init();
  }, []);

  return (
    <div className="App">
      <div className="container">
        <Welcome />
        <Accounts web3={web3} accountAddress={saveAccountAddress} />
        <SendEther web3={web3} account={account}></SendEther>
      </div>
    </div>
  );
};
export default App;
