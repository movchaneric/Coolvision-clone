import styled from "styled-components";

const StyledButton = styled.a`
  background-color: #51c3ee;
  font-size: 22px;
  padding: 10px;
  border-radius: 15px;
  cursor: pointer;
  display: inline-block;
  position: relative;

  span {
    display: inline-block;
    transition: font-size 0.3s ease-in-out;
  }

  &:hover span {
    font-size: 1.4em;
  }
`;

const Button = ({ children }) => {
  return (
    <StyledButton>
      <span>{children}</span>
    </StyledButton>
  );
};

export default Button;
