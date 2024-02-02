import styled from "styled-components";

const TitleContainer = styled.h3`
  height: 100%;
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({ $color }) => $color};
  font-size: 22px;
  text-transform: uppercase;
  color: black;
  mix-blend-mode: lighten;
  writing-mode: vertical-rl;
  text-orientation: upright;
`;

function SectionTitle({ title, sectionColor }) {
  return <TitleContainer $color={sectionColor}>{title}</TitleContainer>;
}

export default SectionTitle;
