import React from "react";
import Aboutyip from "./components/Aboutyip";
import classes from "./Yip.module.css";

const Yip = () => {
  return (
    <main>
      <Aboutyip />

      <div class={classes.thirdSection} id="timeline">
        <p class="tsheading">YIP Idea Registration Procedure</p>
        <div class="timeline-container">
          <div class="timeline">
            <div class="timeline__event animated fadeInUp delay-3s timeline__event--type1">
              <div class="timeline__event__icon">
                <img
                  src="assets/procedure/prereg.png"
                  alt=""
                  class="lni-cake"
                />
              </div>
              <div class="timeline__event__date">
                Pre
                <br />
                Registration
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">Step One</div>
                <div class="timeline__event__description">
                  <p>
                    <a href="https://yip.kerala.gov.in/yipapp/index.php/Idea2021/?utm_source=mulearn&utm_medium=link&utm_campaign=mulearn_directv1&utm_id=yip21v1&utm_term=new_reg">
                      <span>
                        {" "}
                        <b>Click Here</b>{" "}
                      </span>
                    </a>
                    to go to the Pre-Registration page. Enter all your details
                    in the Pre-Registration Form and Complete the OTP
                    Verification. By Now you would have recived an email with
                    login credentials, you can now login with that.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
              <div class="timeline__event__icon">
                <img
                  src="assets/procedure/studentreg.png"
                  alt=""
                  class="lni-cake"
                />
              </div>
              <div class="timeline__event__date">
                Ideator <br />
                Registration
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">Step Two</div>
                <div class="timeline__event__description">
                  <p>
                    <a href="https://yip.kerala.gov.in/yipapp/index.php/Init/">
                      <span>
                        {" "}
                        <b>Click Here to Login</b>{" "}
                      </span>
                    </a>
                    ,After Logging in Click the Open the left navbar option and
                    from the options listed there click the
                    <b>Profile Completion</b> option. Fill in all your details
                    correctly and according to the mentioned specifications.
                    Finally Submit the form and click OK.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
              <div class="timeline__event__icon">
                <img
                  src="assets/procedure/yip-voc.png"
                  alt=""
                  class="lni-cake"
                />
              </div>
              <div class="timeline__event__date">
                Voice of <br />
                Customer
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">Step Three</div>
                <div class="timeline__event__description">
                  <p>
                    After completing your Profile and submitting it, You can
                    check the left navbar again to find the
                    <b>Voice of Customer(VOC)</b> option. By clicking that you
                    will be directed to the course page where you can complete
                    it.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline__event animated fadeInUp timeline__event--type1">
              <div class="timeline__event__icon">
                <img src="assets/procedure/team.png" alt="" class="lni-cake" />
              </div>
              <div class="timeline__event__date">
                Team
                <br />
                Formation
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">Step Four</div>
                <div class="timeline__event__description">
                  <p>
                    After completing the VOC Course and attending the quiz
                    there.
                    <b>
                      You can form a team consisting of minimum 2 members and
                      maximum 5 members by clicking the Group Formation Button
                      from the left navbar. Only one person from a group is
                      required to form the group
                    </b>
                    while the other members can join it using the team's name
                    and password.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline__event animated fadeInUp delay-3s timeline__event--type1">
              <div class="timeline__event__icon">
                <img
                  src="assets/procedure/ideafind.png"
                  alt=""
                  class="lni-cake"
                />
              </div>
              <div class="timeline__event__date">
                Idea <br />
                Submission
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">Step Five</div>
                <div class="timeline__event__description">
                  <p>
                    After forming a team and finding an idea which suits the
                    given themes, the <b>person who formed the team</b> can
                    submit the idea by going to the
                    <b>Idea Submission Option</b> from his/her Navbar.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline__event animated fadeInUp delay-2s timeline__event--type2">
              <div class="timeline__event__icon">
                <img
                  src="assets/procedure/approved.png"
                  alt=""
                  class="lni-cake"
                />
              </div>
              <div class="timeline__event__date">
                Institutional <br />
                Approval
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">Step Six</div>
                <div class="timeline__event__description">
                  <p>
                    After the submission of the idea, it requires the approval
                    of the repective Institution and you may contact the
                    concerned authority for the approval of your idea.
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline__event animated fadeInUp delay-1s timeline__event--type3">
              <div class="timeline__event__icon">
                <img
                  src="assets/procedure/evaluation.png"
                  alt=""
                  class="lni-cake"
                />
              </div>
              <div class="timeline__event__date">
                Preliminary <br />
                Evaluation
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">Step Seven</div>
                <div class="timeline__event__description">
                  <p>
                    Once your Idea is approved by the institution, it is put
                    forward for a preliminary evaluation and
                    <b>8000 teams</b> are selected from District Level and
                    <b>2000 teams</b> are selected from State Level and are
                    awarded prizes upto <b>Rs.50000</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="timeline__event animated fadeInUp timeline__event--type1">
              <div class="timeline__event__icon">
                <img
                  src="assets/procedure/winner annoucement.png"
                  alt=""
                  class="lni-cake"
                />
              </div>
              <div class="timeline__event__date">
                Winner
                <br />
                Annoucement
              </div>
              <div class="timeline__event__content">
                <div class="timeline__event__title">Step Eight</div>
                <div class="timeline__event__description">
                  <p>
                    Finally the winners are annouced and out of the 2000 teams
                    selected at state level
                    <b>
                      900 teams are provided financial and mentoring support for
                      the next 3 years.
                    </b>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Yip;
