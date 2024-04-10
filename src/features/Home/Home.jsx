import styles from "../Home/Home.module.css";
import HomeLogo from "./HomeLogo/HomeLogo";
import HomeDescription from "./HomeDescription/HomeDescription";
import WhySection from "./WhySection/WhySection";
import RightArrow from "../../componenets/RightArrow";

const Home = ({ children }) => {
  return (
    <div className={`${styles["home-box"]}`}>
      <section className={`${styles["logo-section"]}`}>
        <HomeLogo>{children}</HomeLogo>
      </section>

      <section>
        <HomeDescription>{children}</HomeDescription>
      </section>

      <section className={`${styles["why-section"]}`}>
        <WhySection>{children}</WhySection>
        <div className={`${styles["why-section-arrow-btn"]}`}>
          <RightArrow />
        </div>
      </section>
    </div>
  );
};

export default Home;

// className={`${styles['why-section-arrow-btn']}`}
