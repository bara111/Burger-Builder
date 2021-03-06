import React from "react";
import classes from "./BuildControl.css";


const buildControl = (props) => (
  <div className={classes.buildControl}>
    <div className={classes.label}>{props.type}</div>{" "}
    <button className={classes.Less}>Less</button>{" "}
    <button className={classes.More} onClick={props.added}>More</button>
  </div>
);

export default buildControl;
