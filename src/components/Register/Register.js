import React, { Component } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";

import css from "./Register.module.css";

class Register extends Component {
  state = {
    email: "",
    password: "",
    username: ""
  };
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }
  changeEmail(email) {
    this.setState({
      ...this.state,
      email: email
    });
  }

  changePassword(password) {
    this.setState({
      ...this.state,
      password: password
    });
  }

  changeUsername(username) {
    this.setState({
      ...this.state,
      username: username
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    const username = this.state.username;
    this.props.onClickRegisterButton(email, password, username);
  }
  render() {
    return (
      <div className={css.wrapper + " " + css.fadeInDown}>
        <div id="formContent">
          <div className={css.fadeIn + " " + css.first}>
            <h3>Register your account</h3>
          </div>

          <form onSubmit={this.onSubmit}>
            <input
              type="email"
              id="login"
              className="fadeIn second"
              placeholder="johndoe@gmail.com"
              value={this.state.email}
              onChange={e => {
                this.changeEmail(e.target.value);
              }}
              autoComplete="email"
            />

            <input
              type="password"
              id="password"
              className="fadeIn third"
              placeholder="Your password..."
              value={this.state.password}
              onChange={e => {
                this.changePassword(e.target.value);
              }}
              autoComplete="current-password"
            />
            <input
              type="text"
              id="username"
              className="fadeIn third"
              placeholder="Your username..."
              value={this.state.username}
              onChange={e => {
                this.changeUsername(e.target.value);
              }}
              autoComplete="current-username"
            />
            <input type="submit" className="fadeIn fourth" value="Register" />
          </form>

          <div id="formFooter">
            <Link className="underlineHover" to="/login">
              Already have account? Click here to login
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionToProps = dispatch => {
  return {
    onClickRegisterButton: (email, password, username) => {
      dispatch({
        type: "REGISTER_USER_WITH_CREDENTIALS_DB",
        payload: { email, password, username }
      });
    }
  };
};

export default connect(
  null,
  mapActionToProps
)(Register);
