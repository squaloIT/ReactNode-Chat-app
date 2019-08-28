import React from "react";

import css from "./ChatWindow.module.css";
import UsernameToolbar from "./UsernameToolbar/UsernameToolbar";
import WriteMessageToolbar from "./WriteMessageToolbar/WriteMessageToolbar";

const ChatWindow = ({ username, userID }) => {
  return (
    <div className={css.ChatWindow}>
      <UsernameToolbar username={username} userID={userID} />
      <WriteMessageToolbar />
    </div>
  );
  // <MessagesWindow />
};

export default ChatWindow;
