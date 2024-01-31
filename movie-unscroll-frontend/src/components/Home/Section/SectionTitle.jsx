import styled from "styled-components";

const TitleContainer = styled.h3`
  height: 100%;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: gold;
  font-size: 26px;
  text-transform: uppercase;
  color: black;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

function SectionTitle({ title }) {
  return <TitleContainer>{title}</TitleContainer>;
}

export default SectionTitle;
