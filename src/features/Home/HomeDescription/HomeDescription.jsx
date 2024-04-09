import PeopleTalking from "../../../assets/PeopleTalking";
import styles from "../HomeDescription/HomeDescription.module.css";

const HomeDescription = () => {
  return (
    // {`${styles["header-description"]}`}
    <section className={`${styles["header-description"]}`}>
      <div>
        <p className={`${styles["header-p"]}`}>
          CoolVision is part of a group developing online video streaming
          <span className={`${styles["header-p-center"]}`}>
            platforms, used by millions of users across the globe.
          </span>
        </p>
      </div>

      <div>
        <PeopleTalking />
      </div>
    </section>
  );
};

export default HomeDescription;
