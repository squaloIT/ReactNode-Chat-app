import React from "react";

import css from "./MessagesWindow.module.css";

const MessagesWindow = props => {
  return (
    <div className={css.MessagesWindow}>
      <div>
        <span className={css.friendMessage}>
          <p>Text friend poruke poruke poruke poruke poruke poruke poruke</p>
        </span>
      </div>
      <div>
        <span className={css.friendMessage}>
          <p>Text friend poruke poruke poruke poruke poruke poruke poruke</p>
        </span>
      </div>
      <div>
        <span className={css.myMessage}>
          <p>Text moje poruke</p>
        </span>
      </div>
      <div>
        <span className={css.myMessage}>
          <p>Text moje poruke</p>
        </span>
      </div>{" "}
      <div>
        <span className={css.myMessage}>
          <p>Text moje poruke</p>
        </span>
      </div>
    </div>
  );
};

export default MessagesWindow;
