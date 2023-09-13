import React, { useState } from "react";

const messages = [
  ["sent", "saquihbcdysdbciuuncwb1"],
  ["sent", "saquib2"],
  ["receive", "saqx kcjjkx kjuib3"],
  ["sent", "saquib4"],
  ["receive", "d sjksncjksnjk"],
  ["sent", "saquib6"],
  ["sent", "saquib7"],
  ["receive", "saquib8"],
];

const Content = () => {
  const getChat = (messages) => {
    return messages.map((message) => (
      <span className={message[0]}>{message[1]}</span>
    ));
  };
  const [newMessages, setNewMessages] = useState([
    ["sent", "saquihbcdysdbciuuncwb1"],
    ["sent", "saquib2"],
    ["receive", "saqx kcjjkx kjuib3"],
    ["sent", "saquib4"],
    ["receive", "d sjksncjksnjk"],
    ["sent", "saquib6"],
    ["sent", "saquib7"],
    ["receive", "saquib8"],
    ["sent", "saquihbcdysdbciuuncwb1"],
    ["sent", "saquib2"],
    ["receive", "saqx kcjjkx kjuib3"],
    ["sent", "saquib4"],
    ["receive", "d sjksncjksnjk"],
    ["sent", "saquib6"],
    ["sent", "saquib7"],
    ["receive", "saquib8"],
  ]);

  return (
    <div className="contentMsg">
      <div className="messages">
        {getChat(messages)}
        {getChat(newMessages)}
      </div>
      <div className="inputElement">
        <input placeholder="Type message"></input>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Content;
