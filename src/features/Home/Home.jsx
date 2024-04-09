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
import CoolvisionLRG from "../../assets/coolvision-lg";
import HomeLogo from "./HomeLogo/HomeLogo";

const Home = ({ children }) => {
  return (
    <div>
      <section className={`${styles["logo-section"]}`}>
        <HomeLogo>{children}</HomeLogo>
      </section>
    </div>
  );
};

export default Home;
