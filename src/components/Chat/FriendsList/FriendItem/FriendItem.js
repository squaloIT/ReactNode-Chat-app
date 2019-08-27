import React from "react";

import css from "./FriendItem.module.css";
import profileImg from "./../../../../assets/profile-img.jpg";

import { connect } from "react-redux";

const FriendItem = props => {
  // SAMO AKO SU ONLINE PRIKAZATI IH
  return (
    <div
      className={css.FriendItem}
      onClick={() => props.onAddFriendToList(props.userID, props.username)}
    >
      <img src={profileImg} alt="Little profile photo" />
      <div>
        <p className={css.friendName}>{props.username}</p>
        <p className={css.onlineStatus}>{props.status}</p>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddFriendToList: (id, username) => {
      dispatch({
        type: "ADD_SELECTED_FRIEND_TO_CHAT",
        payload: { userID: id, username }
      });
    }
  };
};

export default connect(
  null,
  mapDispatchToProps
)(FriendItem);
