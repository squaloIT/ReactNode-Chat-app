import React from "react";

import css from "./FriendsList.module.css";
import FriendItem from "./FriendItem/FriendItem";

const FriendsList = props => {
  return (
    <div className={css.FriendsList}>
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
      <FriendItem />
    </div>
  );
};

export default FriendsList;
