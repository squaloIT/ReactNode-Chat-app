import { combineReducers } from "redux";
import sideChat from "./side-chat-reducer";
import authReducer from "./auth-reducer";

export default combineReducers({
  sideChat,
  authReducer
});
