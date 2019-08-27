import React from "react";

import css from "./Logo.module.css";
import logo from "./../../../assets/logo.png";

const Logo = props => {
  return (
    <div className={css.Logo}>
      <img src={logo} alt="Logo " />
    </div>
  );
};

export default Logo;
