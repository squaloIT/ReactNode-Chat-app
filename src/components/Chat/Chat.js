import React from "react";

import css from "./Chat.module.css";
import FriendsList from "./FriendsList/FriendsList";
import ChatWindowContainer from "./../ChatWindowContainer";

const Chat = props => {
  return (
    <div className={css.chat}>
      <h1>Friends online</h1>
      <FriendsList />
      <ChatWindowContainer />
    </div>
  );
};

export default Chat;
