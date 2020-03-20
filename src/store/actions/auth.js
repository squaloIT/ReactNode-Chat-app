import axios from "axios";
import config from "./../config";
import * as actionTypes from "./actionTypes";

export const login = (email, password) => {
  return dispatch => {
    const userData = { email, password };
    // dispatch(authStart());
    // {
    //   type: "AUTH_START",
    //   payload: { email, password }
    // }
    axios
      .post(config.serverUrl + "/user/login", userData)
      //! DO OVDE STIGAO
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          setAuthDataInLocalStorage(
            res.data.user.authData.idToken,
            res.data.user.authData.userId,
            new Date(new Date().getTime() + res.data.expiresIn * 1000)
          );
          dispatch(authSuccess(res.data));
          // dispatch(expireTimeLogout(res.data.expiresIn * 1000));
        } else {
          dispatch(authFailed(res.data.error.message));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(authFailed(err));
      });
  };
};
export const authSuccess = data => {
  console.log("login success");
  return {
    type: actionTypes.LOGIN_SUCCESS,
    data,
    error: null
  };
};
export const register = (email, password, username) => {
  return dispatch => {
    const userData = {
      email,
      password,
      username
    };
    // dispatch(authStart());
    axios
      .post(config.serverUrl + "/user/register", userData)
      .then(res => {
        console.log(res.data);
        if (res.status === 200) {
          setAuthDataInLocalStorage(
            res.data.user.authData.idToken,
            res.data.user.authData.userId,
            new Date(
              new Date().getTime() + res.data.user.authData.expiresIn * 1000
            )
          );
          console.log(res.data.user);
          dispatch(registerSuccess(res.data.user));
          // dispatch(expireTimeLogout(res.data.expiresIn * 1000));
        } else {
          dispatch(authFailed(res.data.error.message));
        }
      })
      .catch(err => {
        console.log(err);
        dispatch(authFailed(err.message));
      });
  };
};
export const registerSuccess = data => {
  console.log("registerSuccess");
  return {
    type: actionTypes.REGISTER_SUCCESS,
    data,
    error: null
  };
};

export const authFailed = error => {
  return {
    type: actionTypes.AUTH_FAILED,
    error
  };
};

const setAuthDataInLocalStorage = (idToken, userId, expTime) => {
  console.log("setAuthDataInLocalStorage ", idToken, userId, expTime);
  localStorage.setItem("token", idToken);
  localStorage.setItem("userId", userId);
  localStorage.setItem("expiresInDate", expTime);
};

const cleanAuthDataFromLocalStorage = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expiresInDate");
};
