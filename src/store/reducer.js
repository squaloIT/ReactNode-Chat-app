const initialState = {
  selectedFriendsForChat: []
};

const reducer = (state = initialState, action) => {
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

    default:
      return state;
  }
};

export default reducer;
