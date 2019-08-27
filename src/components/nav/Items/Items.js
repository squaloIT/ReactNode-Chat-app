import React from "react";
import css from "./Items.module.css";
import Item from "./Item/Item";

const Items = props => {
  return (
    <ul className={css.items}>
      <Item path="/" value="Home" />
      <Item path="/Profile/17" value="Profile" />
    </ul>
  );
};

export default Items;
