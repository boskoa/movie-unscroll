import styled, { css, keyframes } from "styled-components";
import SectionTitle from "./SectionTitle";
import Content from "./Content";
import { useEffect, useState } from "react";

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
  80% {
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
  background-color: ${({ $color }) => $color};
  box-shadow: 0 0 5px 0 ${({ $color }) => $color};
  transform: translateY(0px);
  animation: ${() => css`7s ${translate} infinite`};
`;

function Section({ title, movies, delay, sectionColor }) {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    let index;
    const timeout = setTimeout(() => {
      index = setInterval(() => setPosition((p) => (p < 3 ? p + 1 : 0)), 7000);
    }, delay * 1200);

    return () => {
      clearInterval(index);
      clearTimeout(timeout);
    };
  }, [delay]);

  return (
    <MainContainer $color={sectionColor} $title={title.replace(" ", "-")}>
      <SectionTitle sectionColor={sectionColor} title={title} />
      <Scanner $color={sectionColor} />
      <Content
        sectionColor={sectionColor}
        movies={movies}
        position={position}
        setPosition={setPosition}
      />
    </MainContainer>
  );
}

export default Section;
