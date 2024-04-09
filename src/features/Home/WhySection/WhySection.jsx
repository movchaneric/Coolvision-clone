import LoveIcon from "../../../assets/LoveIcon";
import EnjoymentBox from "../EnjoymentBox/EnjoymentBox";
import ExcellenceBox from "../ExcellenceBox/ExcellenceBox";
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
      <div className="flex items-center justify-center mt-20 mb-20">
        <div className={`${styles["why-grid"]}`}>
          {/* LoveIcon box */}
          <LoveIconBox>{children}</LoveIconBox>
          {/* Excellence Box */}
          <ExcellenceBox>{children}</ExcellenceBox>
          {/* Enjoyment Box */}
          <EnjoymentBox>{children}</EnjoymentBox>
        </div>
      </div>
    </div>
  );
};

export default WhySection;
