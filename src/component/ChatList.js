import React from "react";

const chatName = [
  "saquib",
  "aquib",
  "tabish",
  "mahjabin",
  "inayat",
  "aman",
  "inshal",
  "mifzal",
  "saquib",
  "aquib",
  "tabish",
  "mahjabin",
  "inayat",
  "aman",
  "inshal",
  "mifzal",
  "saquib",
  "aquib",
  "tabish",
  "mahjabin",
  "inayat",
  "aman",
  "inshal",
  "mifzal",
];
const ChatList = () => {
  const clickHandler = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h2>Chats</h2>
      <div className="chatnamelist">
        {chatName.map((name) => (
          <button onClick={clickHandler} className="chatname">
            {name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ChatList;
