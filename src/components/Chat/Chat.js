import React from "react";

import css from "./Chat.module.css";
import FriendsList from "./FriendsList/FriendsList";

const Chat = props => {
  return (
    <div className={css.chat}>
      <h1>Friends online</h1>
      <FriendsList />
    </div>
  );
};

export default Chat;
