import * as actionTypes from "./../actions/actionTypes";

const initialState = {
  user: {
    username: null,
    friends: [],
    authData: {
      idToken: null,
      userId: null
    }
  },
  error: null
};

const register = (state, data) => {
  console.log(data);
  // user: {
  //   username: user.username,
  //   // friends
  //   authData: {
  //     userId: user._id,
  //     idToken: token,
  //     expiresIn: 2000
  //   }
  // }
  return {
    ...state,
    error: null,
    user: {
      ...data,
      username: data.username,
      // friends: [...data.payload.user.friends],
      authData: {
        userId: data.authData.userId,
        idToken: data.authData.idToken
      }
    }
  };
};
const success = (state, payload) => {
  return {
    ...state,
    user: {
      username: payload.username,
      // friends: [authData.friends]
      authData: {
        ...payload.authData
      }
    }
  };
};
const failed = (state, error) => {
  return {
    ...state,
    error: error
  };
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_SUCCESS:
      return register(state, action.data);
    // const emailR = action.payload.email;
    // const usernameR = action.payload.username;
    // const passwordR = action.payload.password;

    // axios
    //   .post("http://localhost:3030/user/register", {
    //     email: emailR,
    //     password: passwordR,
    //     username: usernameR
    //   })
    //   .then(response => {
    //     console.log(response);

    //     state = {
    //       ...state,
    //       isLoggedIn: true,
    //       user: {
    //         ...state.user,
    //         username: response.data.payload.user.username,
    //         userId: response.data.payload.userId
    //       },
    //       token: response.data.payload.token
    //     };
    //     console.log(state);
    //     return {
    //       ...state
    //     };
    // })
    // .catch(err => {
    //   console.error(err);
    //   return {
    //     ...state
    //   };
    // });
    // break;
    case actionTypes.AUTH_FAILED:
      return failed(state, action.error);
    default:
      return { ...state };
  }
};

export default authReducer;
