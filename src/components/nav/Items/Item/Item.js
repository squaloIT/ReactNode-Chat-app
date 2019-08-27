import React from "react";
import { Link } from "@reach/router";

import css from "./Item.module.css";

const Item = props => {
  return (
    <li className={css.item}>
      <Link to={props.path}>{props.value}</Link>
    </li>
  );
};

export default Item;
