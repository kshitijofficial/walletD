import { useState } from "react";

function SendEther({ web3, account }) {
  const [receipt, setReceipt] = useState({});
  const [toggle, setToggle] = useState(false);
  const sendEther = async (event) => {
    event.preventDefault();
    // const _from = document.querySelector("#from");
    const _to = document.querySelector("#to");
    const _value = document.querySelector("#value");
    const weiValue = web3.utils.toWei(_value.value, "ether");
    web3.eth
      .sendTransaction({
        from: account, //_from.value,
        to: _to.value,
        value: weiValue,
      })
      .then(function (receipt) {
        setReceipt(receipt);
        setToggle(true);
      });
  };
  return (
    <>
      <form onSubmit={sendEther}>
        {/* <p>
          <input type="text" id="from" placeholder="from"></input>
        </p> */}
        <p>
          <input type="text" id="to" placeholder="to"></input>
        </p>
        <p>
          <input type="text" id="value" placeholder="value"></input>
        </p>
        <button type="submit">Send</button>
      </form>
      <pre>
        <code>
          {toggle &&
            JSON.stringify(
              receipt,
              ["transactionHash", "blockHash", "blockNumber", "gasUsed"],
              2
            )}
        </code>
      </pre>
    </>
  );
}

export default SendEther;
