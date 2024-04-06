import styled from "styled-components";

const ArrowDownIcon = () => {
  const BtnIcon = styled.svg`
    height: 50px;
    width: 50px;
    font: 10px;
  `;
  return (
    <BtnIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="#173364"
      className="btn-icon"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m19.5 8.25-7.5 7.5-7.5-7.5"
      />
    </BtnIcon>
  );
};

export default ArrowDownIcon;
