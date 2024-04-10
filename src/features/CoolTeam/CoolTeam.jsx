import styles from "./CoolTeam.module.css";
import FiveStarImg from "../../assets/5StarImg";
import CoolTeamWorkers from "./CoolTeamWorkers/CoolTeamWorkers";

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
            <p>Coolvision-GIF</p>
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

        <div>
          <CoolTeamWorkers />
        </div>
      </div>
    </>
  );
};

export default CoolTeam;
