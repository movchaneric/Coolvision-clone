import LoveIcon from "../../../assets/LoveIcon";
import LoveIconBox from "../LoveIconBox/LoveIconBox";
import styles from "../WhySection/WhySection.module.css";

const WhySection = ({ children }) => {
  return (
    <div>
      <div>
        <p className={`${"p-section"}`}>
          <span className={`${styles["text-center"]}`}>Why Working at</span>
          <span className={`${styles["text-center"]}`}>CoolVision</span>{" "}
          <span className={`${styles["text-center"]}`}>Rocks</span>
        </p>
      </div>
      <div className={`${styles["why-grid"]}`}>
        <LoveIconBox>{children}</LoveIconBox>
        {/* Excellence Box */}
        <div className={`${styles["excellence-box"]}`}></div>
        {/* Enjoyment Box */}
        <div className={`${styles["enjoyment-box"]}`}></div>
      </div>
    </div>
  );
};

export default WhySection;
