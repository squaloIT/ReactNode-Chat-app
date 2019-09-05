import axios from "axios";

const initialState = {
  isLoggedIn: false,
  user: {
    userID: null,
    username: null,
    friends: []
  },
  token: null
};

const auth = async (state = initialState, action) => {
  switch (action.type) {
    case "CHECK_USER_CREDENTIALS_DB":
      const { email, password } = action.payload;
      try {
        var payload = await axios.post("http://localhost:3030/login-user", {
          email,
          password
        });
      } catch (e) {
        console.error(e);
      }
      state = {
        ...state,
        user: {
          ...payload
        },
        userId: payload._id,
        token: payload.token
      };
      //! TODO DODAVANJE USER U STATE NAKON GADJANJA NODE-A

      return {
        ...state
      };
    case "REMOVE_FRIEND_FROM_SELECTED_FRIENDS_FOR_CHAT":
      return {
        ...state
      };

    default:
      return state;
  }
};

export default auth;
