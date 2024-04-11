import workersData from "../../../assets/workersData/workers.json";
import Worker from "./Worker";
import styles from "./CoolTeamWorkers.module.css";

const CoolTeamWorkers = () => {
  return (
    <div className={`${styles["workers-box"]}`}>
      <div className={`${styles["workers-grid"]}`}>
        {workersData?.map((worker) => (
          <Worker key={worker.key} worker={worker} />
        ))}
      </div>
    </div>
  );
};

export default CoolTeamWorkers;
