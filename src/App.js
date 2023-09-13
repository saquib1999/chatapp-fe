import React from "react";
import Header from "./component/Header";
import ChatList from "./component/ChatList";
import Content from "./component/Content";
import "./App.css";

const App = () => {
  return (
    <div className="chatApp">
      <div className="header">
        <Header></Header>
      </div>

      <div className="sidebar">
        <ChatList></ChatList>
      </div>
      <div className="content">
        <Content></Content>
      </div>
    </div>
  );
};

export default App;
