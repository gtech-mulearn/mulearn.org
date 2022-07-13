import React from "react";
import classes from "./About.module.css";

const About = () => {
  return (
    <div className={classes.firstsection}>
      <div className={classes.fstexts}>
        <p className={classes.fsheading}>
          Let's break the Echo
          <br />
          Chambers Together.
        </p>
        <p className={classes.fstagline}>
          µLearn is a synergic philosophy of education, with a culture of mutual
          learning through micro groups of peers. µLearn is here to assist you
          in breaking through the echo chambers and free you from the shackles
          that have you grounded.
        </p>
        <a
          rel="noopener noreferrer"
          href="https://discord.com/invite/Jt7sv3chZP"
        >
          <button className={classes.fsbtn}>Get Started</button>
        </a>
        <a rel="noopener noreferrer" href="https://mulearn.org/team/">
          <button className={classes.fssbtn}>About Mulearn</button>
        </a>
      </div>

      <div className={classes.illustrations}>
        <img
          src="assets/About/illustation.png"
          alt=""
          className={classes.fsimage}
        />
      </div>
    </div>
  );
};

export default About;
