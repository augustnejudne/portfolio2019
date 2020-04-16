import React, { useEffect, useState } from "react";
import Title from "./components/title";
import MyStack from "./components/my-stack";
import Projects from "./components/projects";
import AboutMe from './components/about-me';
import headTop from "./assets/head-top.svg";
import headBot from "./assets/head-bottom.svg";
import classes from './app.module.scss';

function App() {
  const [rotation, set_rotation] = useState(0);
  const [ypos, set_ypos] = useState(0);

  const handleScroll = e => {
    const scrollY = e.currentTarget.scrollY;
    if (scrollY > 500) return set_rotation(500 / 4);
    set_rotation(scrollY / 4);
    set_ypos(scrollY / 4);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const headTopStyle = {
    transform: `translateX(-53.6%) rotate(${rotation}deg)`
  };

  const headContainerStyle = {
    transform: `translate(-50%, ${ypos}px)`
  };

  return (
    <div className={classes.app}>
      <Title h1="Kim Nejudne" h2="Full-Stack Javascript Developer" />
      <div className={classes.spacer}/>
      <AboutMe />
      <MyStack />
      <Projects />
      <div className={classes.headContainer} style={headContainerStyle}>
        <img src={headTop} alt="" className={classes.headTop} style={headTopStyle} />
        <img src={headBot} alt="" className={classes.headBot} />
      </div>
    </div>
  );
}

export default App;
