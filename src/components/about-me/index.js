import React from "react";
import classes from "./styles.module.scss";
import myPic from "../../assets/my-pic.jpeg";
import resume from "../../assets/Kim_Nejudne_Resume_Apr_2020.pdf";

const AboutMe = props => {
  return (
    <div className={classes.container}>
      <img src={myPic} alt="me" />
      <p>I'm a full-stack javascript developer.</p>
      <p>I love programming, philosopy, and ping-pong.</p>
      <a href={resume}>Download my resume</a>
      <a href="mailto:work.august.nejudne@gmail.com"><span>Email me:</span> work.august.nejudne@gmail.com</a>
    </div>
  );
};

export default React.memo(AboutMe);
