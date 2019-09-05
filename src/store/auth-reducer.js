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
        isLoggedIn: true,
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
    case "REGISTER_USER_WITH_CREDENTIALS_DB":
      const { emailR, passwordR, usernameR } = action.payload;
      try {
        var payload = await axios.post("http://localhost:3030/register-user", {
          emailR,
          passwordR,
          usernameR
        });
      } catch (e) {
        console.error(e);
      }
      return {
        ...state
      };

    default:
      return state;
  }
};

export default auth;
