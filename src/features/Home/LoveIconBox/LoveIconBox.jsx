import LoveIcon from "../../../assets/LoveIcon";
import styles from "./LoveIconBox.module.css";

const LoveIconBox = () => {
  return (
    <div className={`${styles["we-care-box"]}`}>
      <div className="flex justify-center items-center mb-5">
        <LoveIcon />
      </div>
      <div className="flex justify-center items-center mb-5">
        <div className={`${styles["box-header"]}`}>
          <h2>We care</h2>
        </div>
      </div>
      <div className="flex items-center justify-center mb-[10px]">
        <p className="text-[#173364] text-[18px]">
          The friendly environment with its collaborative spirit and great
          professional relationships allows everyone the opportunity to make a
          difference.
        </p>
      </div>
    </div>
  );
};

export default LoveIconBox;
