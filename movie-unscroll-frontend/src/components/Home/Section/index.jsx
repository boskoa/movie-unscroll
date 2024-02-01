import styled, { css, keyframes } from "styled-components";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import { useEffect, useState } from "react";

const MainContainer = styled.div`
  height: 300px;
  max-width: 800px;
  display: flex;
  border: 1px solid gold;
  box-sizing: content-box;
  position: relative;
  grid-area: ${({ $title }) => $title};
`;

const translate = keyframes`
  0% {
    transform: translateY(0);
  }
  80% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(290px);
  }
`;

const Scanner = styled.div`
  height: 5px;
  width: 30px;
  position: absolute;
  top: 0;
  background-color: rgb(255, 68, 0);
  box-shadow: 0 0 5px 0 rgb(255, 68, 0);
  z-index: 0;
  transform: translateY(0px);
  animation: ${() => css`7s ${translate} infinite`};
`;

function Section({ title, movies }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const index = setInterval(
      () => setPosition((p) => (p < 3 ? p + 1 : 0)),
      7000,
    );

    return () => clearInterval(index);
  }, []);

  return (
    <MainContainer $title={title.replace(" ", "-")}>
      <SectionTitle title={title} />
      <Scanner />
      <Content movies={movies} position={position} setPosition={setPosition} />
    </MainContainer>
  );
}

export default Section;
