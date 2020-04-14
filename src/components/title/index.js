import React from "react";
import classes from "./styles.module.scss";

const Title = ({ h1, h2 }) => {
  return (
    <div className={classes.container}>
      <h1>{h1}</h1>
      <h2>{h2}</h2>
    </div>
  );
};

export default React.memo(Title);
