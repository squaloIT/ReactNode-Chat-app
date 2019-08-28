import React from "react";
import { connect } from "react-redux";

import css from "./ChatWindowContainer.module.css";
import ChatWindowsPortal from "./../ChatWindowsPortal";
import ChatWindow from "./ChatWindow/ChatWindow";

const ChatWindowContainer = props => {
  console.log("PROMENA");
  return (
    <ChatWindowsPortal>
      <div className={css.ChatWindowContainer}>
        {props.friendsForChat.length === 0 ? (
          <h1>Nema PRIJATELJA ZA CHAT</h1>
        ) : (
          props.friendsForChat.map(({ userID, username }) => {
            return (
              // <div key={userID} className="">
              //   <h1>
              //     {username} {userID}
              //   </h1>
              // </div>
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
    friendsForChat: state.selectedFriendsForChat
  };
};

export default connect(mapStateToProps)(ChatWindowContainer);
