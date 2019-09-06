import React from "react";
import css from "./Items.module.css";
import Item from "./Item/Item";
import { connect } from "react-redux";

const Items = props => {
  console.log("re render ITEMS");
  console.log(props.isLoggenIn);

  let Login = <Item path="/login" value="Login" />;

  if (props.isLoggedIn) {
    Login = <Item path="/logout" value="Logout" />;
  }
  return (
    <ul className={css.items}>
      <Item path="/" value="Home" />
      <Item path="/Profile/17" value="Profile" />
      {props.isAuthenticated == false ? Login : ""}
      {props.isAuthenticated == false ? (
        <Item path="/register" value="Register" />
      ) : (
        ""
      )}
    </ul>
  );
};
const mapStateToProps = state => {
  console.log(state.authReducer.user.authData.idToken);
  return {
    isAuthenticated: state.authReducer.user.authData.idToken !== null
  };
};
export default connect(mapStateToProps)(Items);
