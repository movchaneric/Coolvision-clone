import styled from "styled-components";
import ArrowDownIcon from "../../assets/DownArray";
import { NavLink } from "react-router-dom";
import PeopleTalking from "../../assets/PeopleTalking";
import LoveIcon from "../../assets/LoveIcon";
import ExcellenceIcon from "../../assets/ExcellenceIcon";
import EnjoymentIcon from "../../assets/EnjoymentIcon";
import "../../assets/css/animations/popout.css";
import "../../assets/css/animations/reveal.css";
import styles from "../Home/Home.module.css";

import HomeLogo from "./HomeLogo/HomeLogo";
import HomeDescription from "./HomeDescription/HomeDescription";
import WhySection from "./WhySection/WhySection";

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
      </section>
    </div>
  );
};

export default Home;
