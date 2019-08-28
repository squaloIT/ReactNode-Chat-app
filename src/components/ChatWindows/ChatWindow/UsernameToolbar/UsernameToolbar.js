import React from "react";
import { connect } from "react-redux";

import css from "./UsernameToolbar.module.css";

const UsernameToolbar = ({
  username,
  userID,
  onClickRemoveFriendFromCurrentChatList
}) => {
  return (
    <div className={css["username-toolbar"]}>
      <span className={css.status + " " + css.online}></span>
      <span className={css.username}>{username}</span>
      <a
        className={css.close}
        onClick={e => {
          e.preventDefault();
          onClickRemoveFriendFromCurrentChatList(userID);
        }}
      >
        X
      </a>
    </div>
  );
};

const mapActionsToProps = dispatch => {
  return {
    onClickRemoveFriendFromCurrentChatList: id =>
      dispatch({
        type: "REMOVE_FRIEND_FROM_SELECTED_FRIENDS_FOR_CHAT",
        payload: { userID: id }
      })
  };
};
export default connect(
  null,
  mapActionsToProps
)(UsernameToolbar);
