import React from "react";
import classes from "./styles.module.scss";
import myProjects from "../../assets/projects.js";
import Project from "../project";

const Projects = props => {
  return (
    <div className={classes.container}>
      <h1>My Projects</h1>
      {myProjects.map((project, i) => {
        return <Project key={i} project={project} />;
      })}
    </div>
  );
};

export default React.memo(Projects);
