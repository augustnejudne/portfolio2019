import React from "react";
import classes from "./styles.module.scss";

const MyStack = props => {
  return (
    <div className={classes.container}>
      <h3>My Tool Belt</h3>
      <div className={classes.sectionsContainer}>
        <div className={classes.section}>
          <h4>Front-end</h4>
          <ul>
            <li>React JS</li>
            <li>Redux</li>
            <li>Gatsby JS</li>
            <li>Next JS</li>
            <li>SCSS</li>
            <li>CSS-in-JS</li>
            <li>Material UI</li>
            <li>Bootstrap</li>
          </ul>
        </div>
        <div className={classes.section}>
          <h4>Back-end</h4>
          <ul>
            <li>Node JS</li>
            <li>Express JS</li>
            <li>Strapi JS</li>
            <li>Mongo DB</li>
            <li>SQL</li>
          </ul>
        </div>
        <div className={classes.section}>
          <h4>Other</h4>
          <ul>
            <li>Git</li>
            <li>Vim</li>
            <li>Ubuntu</li>
            <li>Bash Scripting</li>
            <li>Vector Graphics</li>
            <li>Jira</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default React.memo(MyStack);
