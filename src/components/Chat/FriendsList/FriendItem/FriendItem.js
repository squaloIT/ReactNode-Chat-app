import React from "react";

import css from "./FriendItem.module.css";
import profileImg from "./../../../../assets/profile-img.jpg";

const FriendItem = props => {
  return (
    <div className={css.FriendItem}>
      <img src={profileImg} alt="Little profile photo" />
      <div>
        <p className={css.friendName}>Name of Friend</p>

        <p className={css.onlineStatus}>Online</p>
      </div>
    </div>
  );
};

export default FriendItem;
