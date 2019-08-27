import React from "react";
import { connect } from "react-redux";

import ChatWindow from "./ChatWindows/ChatWindows";

const ChatWindowContainer = props => {
  console.log("PROMENA");
  return (
    <div>
      {props.friendsForChat.length === 0 ? (
        <h1>Nema PRIJATELJA ZA CHAT</h1>
      ) : (
        props.friendsForChat.map(({ userID, username }) => {
          return (
            <div>
              <h1>
                {username} {userID}
              </h1>
            </div>
          );
        })
      )}
    </div>
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
