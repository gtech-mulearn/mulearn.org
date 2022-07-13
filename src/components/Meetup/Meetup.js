import React, { Fragment } from "react";
import classes from "./Meetup.module.css";

const Meetup = () => {
  return (
    <Fragment>
      <div className={classes.thirdsection}>
        <p className={classes.tsheading}>
          GTech µlearn Ambassadors & Team Meetup
        </p>

        <div className={classes.galleryCards}>
          <div className={classes.card}>
            <img
              src="assets/Meetup/GroupPhoto1.jpg"
              alt=""
              className={classes.cardImage}
            />
          </div>

          <div className={classes.card}>
            <img
              src="assets/Meetup/GroupPhoto3.jpg"
              alt=""
              className={classes.cardImage}
            />
          </div>

          <div className={classes.card}>
            <img
              src="assets/Meetup/GroupPhoto2.jpg"
              alt=""
              className={classes.cardImage}
            />
          </div>

          <div className={classes.card}>
            <img
              src="assets/Meetup/GroupPhoto4.jpg"
              alt=""
              className={classes.cardImage}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Meetup;
