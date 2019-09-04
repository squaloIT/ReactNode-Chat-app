import React from "react";

import css from "./ChatWindow.module.css";
import UsernameToolbar from "./UsernameToolbar/UsernameToolbar";
import WriteMessageToolbar from "./WriteMessageToolbar/WriteMessageToolbar";
import MessagesWindow from "./MessagesWindow/MessagesWindow";

const ChatWindow = ({ username, userID }) => {
  return (
    <div className={css.ChatWindow}>
      <UsernameToolbar username={username} userID={userID} />
      <MessagesWindow />
      <WriteMessageToolbar />
    </div>
  );
};

export default ChatWindow;
