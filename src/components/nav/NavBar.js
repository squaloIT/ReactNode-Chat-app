import React from "react";
import css from "./NavBar.module.css";
import Items from "./Items/Items";
import Logo from "./Logo/Logo";

const NavBar = props => {
  return (
    <nav className={css.navbar}>
      <Items isLoggenIn={props.isLoggenIn} />
      <Logo />
    </nav>
  );
};

export default NavBar;
