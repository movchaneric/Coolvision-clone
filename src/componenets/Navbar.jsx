import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  AiFillLinkedin,
  AiOutlineInstagram,
  AiFillFacebook,
  AiOutlineTwitter,
} from "react-icons/ai";
import CoolvisionSML from "../assets/coolvision-sm";
const StyledNavBar = styled.nav`
  /* position: fixed; */
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  height: 65px;
  border-bottom: 0.5px solid #555;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px 0px;
`;

const StyledSocialLinks = styled.div`
  display: flex;
  align-items: center;
`;
const StyledNavItem = styled.a`
  font-size: 20px;
  font-weight: 100;
  color: #002e6d;
  word-spacing: 3px;
  display: flex;
  padding: 0 8px;
  transition: color 0.3s;

  &:hover {
    color: #14aedd; /* Define styles for hover */
  }

  &:active {
    color: #002e6d; /* Define styles for active */
  }

  &:visited {
    color: #002e6d; /* Define styles for visited links */
  }
`;

const Navbar = () => {
  return (
    <StyledNavBar>
      <NavLink to="/">
        <StyledNavItem>
          <CoolvisionSML width={120} height={50} />
        </StyledNavItem>
      </NavLink>

      <NavLink to="/">
        <StyledNavItem>Home</StyledNavItem>
      </NavLink>

      <NavLink to="/about">
        <StyledNavItem>About</StyledNavItem>
      </NavLink>

      <NavLink to="/life-at-coolvision">
        <StyledNavItem>Life at CoolVision</StyledNavItem>
      </NavLink>

      <NavLink to="/coolteam">
        <StyledNavItem>Cool Team</StyledNavItem>
      </NavLink>

      <NavLink to="/careers">
        <StyledNavItem>Careers</StyledNavItem>
      </NavLink>

      <NavLink to="/contact">
        <StyledNavItem>Contact Us</StyledNavItem>
      </NavLink>

      <NavLink to="/blog">
        <StyledNavItem>Blog</StyledNavItem>
      </NavLink>

      <StyledSocialLinks>
        <NavLink to="https://www.linkedin.com/company/coolvision/">
          <StyledNavItem>
            <AiFillLinkedin />
          </StyledNavItem>
        </NavLink>
        <NavLink>
          <StyledNavItem to="https://www.instagram.com/coolvision.il/">
            <AiOutlineInstagram />
          </StyledNavItem>
        </NavLink>
        <NavLink>
          <StyledNavItem to="https://www.facebook.com/CoolVisionIL/">
            <AiFillFacebook />
          </StyledNavItem>
        </NavLink>
        <NavLink to="https://twitter.com/CoolvisionIL">
          <StyledNavItem>
            <AiOutlineTwitter />
          </StyledNavItem>
        </NavLink>
      </StyledSocialLinks>
    </StyledNavBar>
  );
};

export default Navbar;
