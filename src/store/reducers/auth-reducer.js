import * as actionTypes from "./../actions/actionTypes";

const initialState = {
  user: {
    username: null,
    friendsIds: [],
    authData: {
      idToken: null,
      userId: null
    }
  },
  error: null
};

const success = (state, data) => {
  console.log(data);
  return {
    ...state,
    error: null,
    user: {
      ...data,
      username: data.username,
      friendsIds: [...data.friendsIds],
      //NE POSTAVLJA SE FRIENDSIDS
      authData: {
        userId: data.authData.userId,
        idToken: data.authData.idToken
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
      return success(state, action.data);

    case actionTypes.LOGIN_SUCCESS:
      return success(state, action.data);

    case actionTypes.AUTH_FAILED:
      return failed(state, action.error);

    default:
      return { ...state };
  }
};

export default authReducer;
