import React, { Fragment } from "react";
import classes from "../Yip.module.css";

const Aboutyip = () => {
  return (
    <Fragment>
      <div class={classes.firstSection}>
        <div class={classes.leftSection}>
          <p class={classes.mainHeader}>ഐഡിയ ആണ് മെയിൻ!</p>
          <p class={classes.tagline}>
            Young Innovators Programme (YIP) is a specially designed programme
            under Kerala Development and Innovation Strategic Council (K-DISC).
            The programme aims to empower future innovators to innovate new
            products, services or models to meet emerging requirements,
            unarticulated needs, or existing market needs of the society more
            effectively through an innovative challenge.
          </p>

          <a
            rel="noopener noreferrer"
            href="https://yip.kerala.gov.in/yipapp/index.php/Idea2021/?utm_source=mulearn&utm_medium=link&utm_campaign=mulearn_directv1&utm_id=yip21v1&utm_term=new_reg"
          >
            <button class={classes.ctabtn}>Register Now</button>
          </a>
        </div>

        <div class={classes.rightSection}>
          <img
            src="assets/Yip/Illustration.png"
            alt=""
            class={classes.illustration}
          />
        </div>
      </div>

      <div class={classes.rightSection}>
        <div class={classes.bulbContainer}>
          <img
            class={classes.paperBulb}
            src="assets/Yip/PaperBulb.png"
            alt=""
          />
        </div>

        <div class={classes.imageContainer}>
          <div class={classes.s1s2}>
            <div class={classes.s1}>
              <p class={classes.sheader}>Who all can Participate</p>
              <p class={classes.stext}>
                Students studying in 8th Standard, College Students and working
                Professionals who are interested in innovation upto the age of
                35 can participate.
              </p>
            </div>

            <div class={classes.s2}>
              <p class={classes.sheader}>Funding of 30Cr</p>
              <p class={classes.stext}>
                The most important thing in the development of an Idea is the
                availability of funding at the correct time. If funding is your
                issue, don't worry we have you covered.
              </p>
            </div>
          </div>

          <iframe
            class={classes.ytVideo}
            src="https://www.youtube.com/embed/cHK16ItlY3w"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>

          <div class={classes.s3s4}>
            <div class={classes.s3}>
              <p class={classes.sheader}>Amazing Prizes</p>
              <p class={classes.stext}>
                YIP is offering financial support of Rs.25000 to 8000 teams
                getting selected in the District level and Rs.50000 to 2000
                teams getting selected in the state level.
              </p>
            </div>

            <div class={classes.s4}>
              <p class={classes.sheader}>How to Register</p>

              <p class={classes.stext}>
                You can join in and submit your ideas as a team consisting
                minimum two and maximum five members before February 15th 2022.
                Each Ideator can exist in 2 teams at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Aboutyip;
