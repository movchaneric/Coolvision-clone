import ArrowDownIcon from "../../../assets/DownArray";
import CoolvisionLRG from "../../../assets/coolvision-lg";
import styles from "../HomeLogo/HomeLogo.module.css";

const HomeLogo = () => {
  return (
    <>
      <div className={`${styles["background-img"]}`}>
        <CoolvisionLRG />
      </div>

      <div className={`${styles["Home-header"]}`}>
        <h1>Making Lives Cooler!</h1>
      </div>

      <div className={`${styles['Home-btn-down']}`}>
        <div>
            <ArrowDownIcon />
        </div>
      </div>
    </>
  );
};

export default HomeLogo;
