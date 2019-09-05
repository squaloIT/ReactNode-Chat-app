const initialState = {
  selectedFriendsForChat: []
};

const sideChatReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SELECTED_FRIEND_TO_CHAT":
      //Ako vec postoji ne dodavati ga
      const mapped = state.selectedFriendsForChat.map(e => e.userID);

      if (!mapped.includes(action.payload.userID)) {
        const newArr = [...state.selectedFriendsForChat];
        newArr.push({
          userID: action.payload.userID,
          username: action.payload.username
        });
        state = {
          ...state,
          selectedFriendsForChat: newArr
        };
      }
      console.log(state.selectedFriendsForChat);
      //! OBAVEZNO SA RETURN VRATITI STANJE
      return {
        ...state
      };
    case "REMOVE_FRIEND_FROM_SELECTED_FRIENDS_FOR_CHAT":
      const filterFriends = state.selectedFriendsForChat.filter(
        friend => friend.userID !== action.payload.userID
      );
      console.log(filterFriends);
      // state = {
      //   ...state,
      //   selectedFriendsForChat: filterFriends
      // };
      return {
        ...state,
        selectedFriendsForChat: filterFriends
      };

    default:
      return state;
  }
};

export default sideChatReducer;
