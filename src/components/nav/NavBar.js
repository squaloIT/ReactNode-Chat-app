import React from "react";
import { Link } from "@reach/router";
import css from "./NavBar.module.css";
import Items from "./Items/Items";

const NavBar = () => {
  return (
    <nav className={css.navbar}>
      <Items />
    </nav>
  );
};

export default NavBar;
