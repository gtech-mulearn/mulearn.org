import React from "react";
import classes from "./Join.module.css";

const Join = () => {
  return (
    <div className={classes.secondsection}>
      <div className={classes.join}>
        <img className={classes.sslogo} src="assets/Join/Join.png" alt="" />
        <p className={classes.ssheading}>Join the Program</p>
        <p className={classes.ssparagraph}>
          Join our Discord server and accept the Rules and Regulations.
          Aaronchettan will send you a link to submit your information
        </p>
        <a
          rel="noopener noreferrer"
          href="https://discord.com/invite/Jt7sv3chZP"
        >
          <button className={classes.ssbtn}>Join Discord Server</button>
        </a>
      </div>

      <div className={classes.assignments}>
        <img
          className={classes.sslogo}
          src="assets/Join/Assignments.png"
          alt=""
        />
        <p className={classes.ssheading}>Complete Assignments</p>
        <p className={classes.ssparagraphs}>
          Start communicating with other Students, Mentors and Enablers on the
          Discord channels. Complete Activites published on Discord. Communicate
          your progress on projects. Stay active for an hour a day
        </p>
        <a
          rel="noopener noreferrer"
          href="https://atfg.gtechindia.org/program/#program-activities"
        >
          <button className={classes.ssbtn}>Activites</button>
        </a>
      </div>

      <div className={classes.improve}>
        <img className={classes.sslogo} src="assets/Join/Improve.png" alt="" />
        <p className={classes.ssheading}>Improve your Profile</p>
        <p className={classes.ssparagraph}>
          Submit assignments, participate in events, complete tasks, Gain Karma
          points for your participation. Include these in your resume and
          promote yourself.
        </p>
        <a
          rel="noopener noreferrer"
          href="https://atfg.gtechindia.org/program/#program-activities"
        >
          <button className={classes.ssbtn}>Karma System</button>
        </a>
      </div>
    </div>
  );
};

export default Join;
