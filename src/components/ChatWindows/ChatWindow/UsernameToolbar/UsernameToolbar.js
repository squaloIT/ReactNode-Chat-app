import React from "react";

import css from "./UsernameToolbar.module.css";

const UsernameToolbar = ({ username, userID }) => {
  return (
    <div className={css["username-toolbar"]}>
      <span className={css.status + " " + css.online}></span>
      <span className={css.username}>{username}</span>
      <span className={css.close}>X</span>
    </div>
  );
};

export default UsernameToolbar;
