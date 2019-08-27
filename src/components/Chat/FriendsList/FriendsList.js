import React from "react";

import css from "./FriendsList.module.css";
import FriendItem from "./FriendItem/FriendItem";

const FriendsList = props => {
  return (
    <div className={css.FriendsList}>
      <FriendItem username="Petar Petrovic" status="Online" userID="1" />
      <FriendItem username="Ana Ivanovic" status="Offline" userID="2" />
      <FriendItem username="Nikola Mihajlovic" status="Online" userID="3" />
      <FriendItem username="Andrijana Petakovic" status="Online" userID="4" />
      <FriendItem username="Stevan Sremac" status="Offline" userID="5" />
      <FriendItem username="Vojin Raznjatovic" status="Offline" userID="6" />
      <FriendItem username="Aleksa Vukajlic" status="Online" userID="7" />
    </div>
  );
};

export default FriendsList;
