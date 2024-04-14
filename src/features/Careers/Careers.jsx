import styles from "./Careers.module.css";

const Careers = () => {
  return (
    <div className="flex items-center justify-center">
      <header className={`${styles["careers-header-box"]}`}>
        <div className={`${styles["careers-header-h1-box"]}`}>
          <h1 className={`${styles["header-h1"]}`}>
            CoolVision is always on the prowl for new talent and expertise to
            <span className="flex items-center justify-center">
              add to the team. We are always actively recruiting!
            </span>
          </h1>
        </div>

        <div className={`${styles["careers-header-p-box"]}`}>
          <p className={`${styles["header-p"]}`}>
            We happily welcome talented and creative people and offer them a
            wide variety of career opportunities.
          </p>
        </div>
      </header>
    </div>
  );
};

export default Careers;
