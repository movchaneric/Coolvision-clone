import WelcomeImg from "../../assets/welcom-img";
import styles from "./About.module.css";

const About = () => {
  return (
    <section className={`${styles["about-box"]}`}>
      <div className={`${styles["header"]}`}>
        <h1 className={`${styles["header-h1"]}`}>Get To Know Us</h1>
      </div>

      <div className={`${styles["sub-header-box"]}`}>
        <span className={`${styles["sub-header"]}`}>
          CoolVision is part of a group developing online video streaming
          platforms, used by millions of users across the globe.
        </span>
      </div>

      <div className={`${styles["welcome-img-box"]}`}>
        <WelcomeImg />
      </div>

      <div className={`${styles["sub-header-box"]}`}>
        <span className={`${styles["sub-header"]}`}>
          For over 20 years, CoolVision has been revolutionizing the online
          video streaming landscape as part of an internationally recognized
          group. Always striving to develop cutting-edge web solutions and video
          platforms for the global entertainment industry. By integrating a wide
          range of technologies, our group has crafted a versatile platform
          suitable for a broad array of applications within the entertainment
          and recreation sectors.
        </span>
      </div>

      <div className={`${styles["sub-header-box"]}`}>
        <span className={`${styles["sub-header"]}`}>
          Our innovative solutions have cemented our position as a leading
          provider in numerous international markets, inspiring a new generation
          of online web solutions and shaping the future of digital
          entertainment.
        </span>
      </div>
    </section>
  );
};

export default About;
