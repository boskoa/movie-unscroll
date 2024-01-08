import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 35px;
`;

const filmRoll = keyframes`
  0% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(360deg);
  }
`;

const filmUnroll = keyframes`
  0% {
    transform: rotateZ(360deg);
  }
  50% {
    transform: rotateZ(0deg);
  }
  100% {
    transform: rotateZ(0deg);
  }
`;

const Roll = styled.img`
  //box-shadow: 0 0 5px 0 gold;
  position: absolute;
  top: 0;
  left: 70px;
  border-radius: 50%;
  height: 35px;
  width: 35px;
  z-index: 30;
  animation: ${({ $hover }) =>
    !$hover
      ? css`1s ${filmUnroll} linear forwards`
      : css`1s ${filmRoll} linear forwards`};

  /* &:hover {
    animation: ${() => css`1s ${filmRoll} linear forwards`};
  } */
`;

const MovieContainer = styled.div`
  overflow: hidden;
  align-self: start;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 90px;
`;

const movieFall = keyframes`
  0% {
    transform: perspective(150px) translateX(0%) rotateX(0deg);
  }
  50% {
    transform: perspective(150px) translateX(0%) rotateX(-80deg);
  }
  100% {
    transform: perspective(150px) translateX(125%) rotateX(-80deg);
  }
`;

const movieRise = keyframes`
  0% {
    transform: perspective(150px) translateX(125%) rotateX(-80deg);
  }
  50% {
    transform: perspective(150px) translateX(0%) rotateX(-80deg);
  }
  100% {
    transform: perspective(150px) translateX(0%) rotateX(0deg);
  }
`;

const Movie = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  transform-origin: 50% 0%;
  animation: ${({ $hover }) =>
    $hover
      ? css`1s ${movieFall} linear forwards`
      : css`1s ${movieRise} linear forwards`};
`;

const UnscrollContainer = styled.div`
  overflow: hidden;
  height: 100%;
  align-self: end;
  display: flex;
  justify-content: end;
  align-items: end;
  width: 107px;
`;

const unscrollFall = keyframes`
  0% {
    transform: perspective(150px) translateX(0%) rotateX(0deg);
  }
  50% {
    transform: perspective(150px) translateX(0%) rotateX(80deg);
  }
  100% {
    transform: perspective(150px) translateX(-120%) rotateX(80deg);
  }
`;

const unscrollRise = keyframes`
  0% {
    transform: perspective(150px) translateX(-120%) rotateX(80deg);
  }
  50% {
    transform: perspective(150px) translateX(0%) rotateX(80deg);
  }
  100% {
    transform: perspective(150px) translateX(0%) rotateX(0deg);
  }
`;

const Unscroll = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  transform-origin: 50% 100%;
  animation: ${({ $hover }) =>
    $hover
      ? css`1s ${unscrollFall} linear forwards`
      : css`1s ${unscrollRise} linear forwards`};
`;

function Logo() {
  const [hover, setHover] = useState(false);

  return (
    <LogoContainer>
      <MovieContainer>
        <Movie $hover={hover}>Movie</Movie>
      </MovieContainer>
      <Roll
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        $hover={hover}
        src="/roll.png"
      />
      <UnscrollContainer>
        <Unscroll $hover={hover}>Unscroll</Unscroll>
      </UnscrollContainer>
    </LogoContainer>
  );
}

export default Logo;
