import styles from './EnjoymentBox.module.css'
import EnjoymentIcon from '../../../assets/EnjoymentIcon'

const EnjoymentBox = () => {
  return (
    <div className={`${styles["we-care-box"]}`}>
      <div className="flex justify-center items-center mb-5">
        <EnjoymentIcon />
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

export default EnjoymentBox;
