import React from "react";
import { Link } from "@reach/router";
import css from "./NavBar.module.css";
import Items from "./Items/Items";
import Logo from "./Logo/Logo";

const NavBar = () => {
  return (
    <nav className={css.navbar}>
      <Items />
      <Logo />
    </nav>
  );
};

export default NavBar;
