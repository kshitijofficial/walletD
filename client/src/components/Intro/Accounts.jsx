import { useState, useEffect } from "react";

function Accounts({ web3, accountAddress }) {
  const [account, setAccount] = useState(null);
  const [accountBalance, setaccountBalance] = useState(null);
  const [provider, setProvider] = useState(null);
  useEffect(() => {
    const allAccounts = async () => {
      setProvider(web3.eth.currentProvider.host);
      console.log(web3.eth.currentProvider.host);
      var select = document.getElementById("selectNumber");
      var options = await web3.eth.getAccounts();

      for (var i = 0; i < options.length; i++) {
        var opt = options[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        select.appendChild(el);
      }
    };
    web3 && allAccounts();
  }, [web3]);
  const selectAccount = async () => {
    let selectedAccountAddress = document.getElementById("selectNumber").value;
    accountAddress(selectedAccountAddress);
    let accountBalance = await web3.eth.getBalance(selectedAccountAddress);
    setaccountBalance(accountBalance);
    setAccount(selectedAccountAddress);
  };
  return (
    <>
      <form id="myForm">
        <select id="selectNumber" onChange={selectAccount}>
          <option>Choose an account</option>
        </select>
      </form>
      Connected Account: {account}
      <br></br>
      Account Balance:{accountBalance}
      <br></br>
      Provider:{provider}
    </>
  );
}

export default Accounts;
//To have
//there should be no need of from field. The selected account should send transaction
//check balance before transfering
