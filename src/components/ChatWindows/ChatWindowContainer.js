import React from "react";
import { connect } from "react-redux";

import css from "./ChatWindowContainer.module.css";
import ChatWindowsPortal from "./../ChatWindowsPortal";
import ChatWindow from "./ChatWindow/ChatWindow";

const ChatWindowContainer = props => {
  return (
    <ChatWindowsPortal>
      <div className={css.ChatWindowContainer}>
        {props.friendsForChat.length === 0 ? (
          <h1></h1>
        ) : (
          props.friendsForChat.map(({ userID, username }) => {
            return (
              <ChatWindow key={userID} userID={userID} username={username} />
            );
          })
        )}
      </div>
    </ChatWindowsPortal>
  );
};

const mapStateToProps = state => {
  console.log("state");
  console.log(state);
  return {
    friendsForChat: state.sideChat.selectedFriendsForChat
  };
};

export default connect(mapStateToProps)(ChatWindowContainer);
