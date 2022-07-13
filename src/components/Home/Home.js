import React from "react";
import About from "../About/About";
import Join from "../Join/Join";
import Leaderboard from "../Leaderboard/Leaderboard";
import Meetup from "../Meetup/Meetup";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div classNameName={classes.main_contents}>
      <About />
      <Join />
      <Leaderboard />
      <Meetup />
    </div>
  );
};

export default Home;
