import React, { Fragment } from "react";
import classes from "./Leaderboard.module.css";

const Leaderboard = () => {
  return (
    <Fragment>
      {/* <p className="tsheading w3-animate-opacity">Mulearn Leaderboards</p> */}

      <p className={classes.tsheading}>Mulearn Leaderboards</p>

      {/* <div className="leaderboardsection w3-animate-opacity"> */}

      <div className={classes.leaderboardsection}>
        <div className={classes.clgleaderboard}>
          <iframe
            title="clgleaderboard"
            src="https://meta.atfg.gtechindia.org/public/question/22d50b41-a216-4f59-89e2-335caf2d2079"
            frameborder="0"
            className={classes.clgframe}
            allowtransparency
          ></iframe>
        </div>

        <div className={classes.studentleaderboard}>
          <iframe
            title="studentleaderboard"
            src="https://meta.atfg.gtechindia.org/public/question/c7f33800-d3a5-41d6-8c90-7e35139ecb2c"
            frameborder="0"
            className={classes.studentframe}
            allowtransparency
          ></iframe>
        </div>
      </div>
    </Fragment>
  );
};

export default Leaderboard;
