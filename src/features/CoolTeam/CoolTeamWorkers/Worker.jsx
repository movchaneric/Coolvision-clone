import ProfileImg from "../../../componenets/ProfileImg";
import styles from "./CoolTeamWorkers.module.css";

const Worker = ({ worker }) => {
  return (
    <div>
      <div className={`${styles["worker-img"]}`}>
        <ProfileImg name={worker.name} />
      </div>
      <div className={`${styles["header"]}`}>
        <h2>{worker.name}</h2>
      </div>

      <div className={`${styles["worker-description"]}`}>
        <p>
          {worker.position}, joined CoolVision in {worker.dateJoined}
        </p>
      </div>

      <blockquote className={`${styles["worker-description"]}`}>
        <p>{worker.description}</p>
      </blockquote>
    </div>
  );
};

export default Worker;
