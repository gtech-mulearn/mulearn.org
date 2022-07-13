import React from "react";
import About from "../About/About";
import Join from "../Join/Join";
import Leaderboard from "../Leaderboard/Leaderboard";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div classNameName={classes.main_contents}>
      <About />
      <Join />
      <Leaderboard />

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
