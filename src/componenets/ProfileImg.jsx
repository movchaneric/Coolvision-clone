import styled from "styled-components";

const Img = styled.img`
  max-width: 229px;
  border-radius: 50%;
`;

const ProfileImg = ({ name }) => {
  const formattedName = name.replace(/\s/g, "-");

  return (
    <Img
      src={`src/features/CoolTeam/workers-imgs/${formattedName}.jpg`}
      alt={`${name}-img`}
    />
  );
};

export default ProfileImg;
