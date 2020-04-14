import React from "react";
import classes from "./styles.module.scss";

const Project = props => {
  const {
    project: { title, desc, tech, live, feRepo, beRepo, image }
  } = props;
  return (
    <div className={classes.container}>
      <div className={classes.section}>
        <h2>{title}</h2>
        <div className={classes.links}>
          <a href={live} target="_blank" rel="noopener noreferrer">Live Demo</a>
          {feRepo && <a href={feRepo} target="_blank" rel="noopener noreferrer">{beRepo ? "Front-end code" : "Code"}</a>}
          {beRepo && <a href={beRepo} target="_blank" rel="noopener noreferrer">Back-end code</a>}
        </div>
        <p>{desc}</p>
      </div>
      <div className={classes.section}>
        <div className={classes.imgContainer}>
          <img src={image} alt={title} />
        </div>
      </div>
      <div className={classes.section}>
        <ul>
          {tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(Project);
