import React from "react";
import css from "./Items.module.css";
import Item from "./Item/Item";

const Items = props => {
  return (
    <ul className={css.items}>
      <Item path="/" value="Home" />
      <Item path="/Profile/17" value="Profile" />
      <Item path="/login" value="Login" />
      <Item path="/register" value="Register" />
    </ul>
  );
};

export default Items;
