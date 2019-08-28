import React from "react";

import css from "./WriteMessageToolbar.module.css";

const WriteMessageToolbar = props => {
  return (
    <div className={css.WriteMessageToolbar}>
      <span className={css.textarea}>
        <input type="text" />
      </span>
      <span className={css.button}>
        <button>GO!</button>
      </span>
    </div>
  );
};

export default WriteMessageToolbar;
