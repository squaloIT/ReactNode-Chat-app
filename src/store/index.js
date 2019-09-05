import { combineReducers } from "redux";
import sideChat from "./side-chat-reducer";
import auth from "./auth-reducer";

export default combineReducers({
  sideChat,
  auth
});
