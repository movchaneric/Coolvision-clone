import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import styles from "./Footer.module.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles["footer-grid"]}`}>
        {/* Grid Left column */}
        <div className={`${styles["footer-grid-links"]}`}>
          <div>Home</div>
          <div>About</div>
          <div>Life at CoolVision</div>
          <div>Cool Team</div>
          <div>Careers</div>
          <div>Contact Us</div>
          <div>Blog</div>
        </div>

        {/* Grid right Column */}
        <div className={`${styles["footer-info-box"]}`}>
          <h2>CONTACT US</h2>
          <p>
            HaBarzel st 6, Tel Aviv - Yafo ​Tel : 03 694 8200​
            officeadmin@top4.com
          </p>
          <div className={`${styles["footer-info-box-links"]}`}>
            <div>
              <AiFillLinkedin />
            </div>
            <div>
              <AiFillFacebook />
            </div>
            <div>
              <AiOutlineTwitter />
            </div>
            <div>
              <AiOutlineInstagram />
            </div>
          </div>
        </div>
      </div>

      <div className={`${styles["footer-copyright"]}`}>
        <p>CoolVision copyright, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
