import ProfileImg from "../../../componenets/ProfileImg";
import styles from "./CoolTeamWorkers.module.css";

const Worker = ({ name, position, dateJoined, description, imgSrc }) => {
  return (
    <div>
      <div className={`${styles["worker-img"]}`}>
        <ProfileImg name={name} />
      </div>
      <div>
        <h2>{name}</h2>
      </div>

      <div>
        <p>
          {position}, joined CoolVision in {dateJoined}
        </p>
      </div>

      <div>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Worker;
