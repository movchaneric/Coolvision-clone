import RocketImg from "../../assets/RocketImg";
import VictoryImg from "../../assets/VictoryImg";
import styles from "./LifeAtCoolvision.module.css";

const LifeAtCoolvision = () => {
  return (
    <container>
      <div className={`${styles["header"]}`}>
        <h1 className={`${styles["header-h1"]}`}>Life at CoolVision</h1>
      </div>

      <div className={`${styles["sub-container"]}`}>
        <div className={`${styles["grid-2-cols"]}`}>
          {/* First col of Z pattern */}
          <div className={`${styles["rocket-box"]}`}>
            <p className={`${styles["rocket-box-text"]}`}>
              Want a job with the option to make a difference in people's lives
              all over the world? What a coincidence – that's is exactly what we
              do!
            </p>
            <p className={`${styles["rocket-box-text"]}`}>
              Naturally, we use our premium professional skills all the time,
              but life at CoolVision is so much more than merely professional
              excellence.
            </p>
          </div>
          <div className={`${styles["rocket-box-img"]}`}>
            <RocketImg />
          </div>

          {/* Second row of Z pattern */}
          <div className={`${styles["rocket-box-img"]}`}>
            <VictoryImg />
          </div>
          <div className={`${styles["rocket-box"]}`}>
            <p className={`${styles["rocket-box-text"]}`}>
              The CoolVision environment encourages interaction among employees
              through social events, happy hours, team building activities, and
              much more.
            </p>
            <p className={`${styles["rocket-box-text"]}`}>
              We respect our employees’ work-life balance and enable them to
              have flexibility at work. COVID-19 was a great example of the
              company’s ability to line up with our employees’ needs by allowing
              a full work-from-home solution.
            </p>
            <p className={`${styles["rocket-box-text"]}`}>
              Now that life has returned to ‘normalcy’ we offer hybrid working
              days, which have benefitted the company in countless ways.
            </p>
          </div>
        </div>
      </div>
    </container>
  );
};

export default LifeAtCoolvision;
