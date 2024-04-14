import styles from "./CoolTeam.module.css";
import FiveStarImg from "../../assets/5StarImg";
import CoolTeamWorkers from "./CoolTeamWorkers/CoolTeamWorkers";
import AnimatedGif from "../../componenets/AnimatedGif";
import RightArrow from "../../componenets/RightArrow";
import Button from "../../componenets/Button";

const CoolTeam = () => {
  return (
    <>
      <div>
        <div className={`${styles["header"]}`}>
          <h1 className={`${styles["header-h1"]}`}>Let's Meet Our Cool Team</h1>
        </div>
      </div>

      <div className={`${styles["sub-container"]}`}>
        <div className={`${styles["grid-2-cols"]}`}>
          {/* First col of Z pattern */}
          <div className={`${styles["rocket-box"]}`}>
            <p className={`${styles["rocket-box-text"]}`}>
              We pride ourselves on having the coolest team ever! We employ the
              best-qualified and most experienced people throughout our various
              departments within the company, but besides being true pros, they
              also fit our culture very well, making the work environment so
              much more pleasant and socially buzzing.
            </p>
          </div>
          <div className={`${styles["rocket-box-img"]}`}>
            <AnimatedGif
              src="https://static.wixstatic.com/media/5a5335_e37f3410b845493d805640fbe8e84046~mv2.gif"
              alt="coolvision-gif"
            />
          </div>

          {/* Second row of Z pattern */}
          <div className={`${styles["rocket-box-img"]}`}>
            <FiveStarImg />
          </div>
          <div className={`${styles["rocket-box"]}`}>
            <p className={`${styles["rocket-box-text"]}`}>
              Constantly striving to push their careers, we offer our employees
              a range of professional benefits, including extensive on-the-job
              training and opportunities for continued learning, personal
              growth, and promotion within the company.
            </p>
          </div>
        </div>

        <div className={`${styles["worker-box"]}`}>
          <CoolTeamWorkers />
        </div>

        <div className="cool-team-footer">
          <div className="flex justify-center items-center mb-10">
            <Button>Want to join the team?</Button>
          </div>
          <div className="flex justify-center items-center">
            <p className={`${styles["team-footer-p"]}`}>
              "Great things in business are never done by one person; they're
              done by a team of people." – Steve Jobs
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoolTeam;
