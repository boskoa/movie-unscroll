import styled, { css, keyframes } from "styled-components";
import SectionTitle from "./Section/SectionTitle";
import { StyledLink } from "../styledComponents";

const WrapContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-area: ${({ $title }) => $title};
`;

const MainContainer = styled.div`
  height: 300px;
  max-width: 800px;
  display: flex;
  border: 1px solid ${({ $color }) => $color};
  box-sizing: content-box;
  position: relative;
  grid-area: ${({ $title }) => $title};
`;

const translate = keyframes`
  0% {
    transform: translateY(0);
  }
  60% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(295px);
  }
`;

const Scanner = styled.div`
  height: 5px;
  width: 30px;
  margin: 0 5px;
  position: absolute;
  top: 0;
  background-color: rgb(150, 4, 45);
  box-shadow: 0 0 5px 0 rgb(150, 4, 45);
  mix-blend-mode: lighten;
  transform: translateY(0px);
  animation: ${() => css`7s ${translate} infinite`};
`;

const Description = styled.p`
  position: relative;
  width: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-size: 20px;
  font-weight: 800;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("public/collage.jpg");
    background-position: 50%;
    filter: blur(5px);
    z-index: -1;
  }

  @media only screen and (max-width: 600px) {
    width: 200px;
  }
`;

function DiscoverSection({ title, sectionColor }) {
  return (
    <WrapContainer $title={title.replace(" ", "-")}>
      <MainContainer $color={sectionColor} style={{ opacity: 1 }}>
        <SectionTitle sectionColor={sectionColor} title={title} />
        <Scanner $color={sectionColor} />
        <Description>
          <StyledLink
            to="/discover"
            style={{ color: "gold", textShadow: "0 0 5px black" }}
          >
            Find new movies based on your favourite genres, actors, directors
            etc.
          </StyledLink>
        </Description>
      </MainContainer>
    </WrapContainer>
  );
}

export default DiscoverSection;
