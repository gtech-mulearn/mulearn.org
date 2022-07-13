import React from "react";
import About from "../About/About";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div classNameName={classes.main_contents}>
      <About />

      <div className="secondsection">
        <div className="join">
          <img className="sslogo" src="./assets/Join.png" alt="" />
          <p className="ssheading">Join the Program</p>
          <p className="ssparagraph">
            Join our Discord server and accept the Rules and Regulations.
            Aaronchettan will send you a link to submit your information
          </p>
          <a
            rel="noopener noreferrer"
            href="https://discord.com/invite/Jt7sv3chZP"
          >
            <button className="ssbtn">Join Discord Server</button>
          </a>
        </div>
        <div className="assignments">
          <img className="sslogo" src="./assets/Assignments.png" alt="" />
          <p className="ssheading">Complete Assignments</p>
          <p className="ssparagraph">
            Start communicating with other Students, Mentors and Enablers on the
            Discord channels. Complete Activites published on Discord.
            Communicate your progress on projects. Stay active for an hour a day
          </p>
          <a
            rel="noopener noreferrer"
            href="https://atfg.gtechindia.org/program/#program-activities"
          >
            <button className="ssbtn">Activites</button>
          </a>
        </div>
        <div className="improve">
          <img className="sslogo" src="./assets/Improve.png" alt="" />
          <p className="ssheading">Improve your Profile</p>
          <p className="ssparagraph">
            Submit assignments, participate in events, complete tasks, Gain
            Karma points for your participation. Include these in your resume
            and promote yourself.
          </p>
          <a
            rel="noopener noreferrer"
            href="https://atfg.gtechindia.org/program/#program-activities"
          >
            <button className="ssbtn">Karma System</button>
          </a>
        </div>
      </div>

      <p className="tsheading w3-animate-opacity">Mulearn Leaderboards</p>

      <div className="leaderboardsection w3-animate-opacity">
        <div className="clgleaderboard">
          <iframe
            title="clgleaderboard"
            src="https://meta.atfg.gtechindia.org/public/question/22d50b41-a216-4f59-89e2-335caf2d2079"
            frameborder="0"
            className="clgframe"
            allowtransparency
          ></iframe>
        </div>

        <div className="studentleaderboard">
          <iframe
            title="studentleaderboard"
            src="https://meta.atfg.gtechindia.org/public/question/c7f33800-d3a5-41d6-8c90-7e35139ecb2c"
            frameborder="0"
            className="studentframe"
            allowtransparency
          ></iframe>
        </div>
      </div>

      <div className="thirdsection">
        <p className="tsheading">GTech Mulearn Ambassadors & Team Meetup</p>

        <div className="gallary-cards">
          <div className="card">
            <img
              src="./assets/Gallary/Group Photo 1.jpg"
              alt=""
              className="card-image"
            />
          </div>

          <div className="card">
            <img
              src="./assets/Gallary/Group Photo 3.jpg"
              alt=""
              className="card-image"
            />
          </div>

          <div className="card">
            <img
              src="./assets/Gallary/Group Photo 2.jpg"
              alt=""
              className="card-image"
            />
          </div>

          <div className="card">
            <img
              src="./assets/Gallary/Group Photo 4.jpg"
              alt=""
              className="card-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
