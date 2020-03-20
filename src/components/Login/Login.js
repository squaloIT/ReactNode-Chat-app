import React, { Component } from "react";
import { connect } from "react-redux";

import css from "./Login.module.css";
import { login } from "./../../store/actions/auth";

class Login extends Component {
  state = {
    email: "",
    password: ""
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
  onSubmit(e) {
    e.preventDefault();
    const email = this.state.email;
    const password = this.state.password;
    this.props.onClickLogginButton(email, password);
  }
  render() {
    return (
      <div className={css.wrapper + " " + css.fadeInDown}>
        <div id="formContent">
          <div className={css.fadeIn + " " + css.first}>
            <h3>Sign in to your account</h3>
          </div>

          <form onSubmit={this.onSubmit}>
            <input
              type="email"
              id="login"
              className="fadeIn second"
              placeholder="johndoe@gmai.com"
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
            <input type="submit" className="fadeIn fourth" value="Log In" />
          </form>

          <div id="formFooter">
            <a className="underlineHover" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapActionToProps = dispatch => {
  return {
    onClickLogginButton: (email, password) => {
      dispatch(login(email, password));
    }
  };
};

export default connect(
  null,
  mapActionToProps
)(Login);
