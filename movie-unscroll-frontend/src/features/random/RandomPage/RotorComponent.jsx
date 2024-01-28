import styled, { css, keyframes } from "styled-components";

const outro = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const RandomContainer = styled.div`
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  color: black;
  overflow: hidden;
  opacity: 1;
  z-index: 2;
  animation: ${({ $show }) => ($show ? "" : css`0.8s ${outro} 0.6s forwards`)};
  background: linear-gradient(
      transparent calc(50% - 1px),
      black 2px,
      transparent calc(50% + 1px)
    ),
    linear-gradient(
      90deg,
      transparent calc(50% - 1px),
      black 2px,
      transparent calc(50% + 1px)
    ),
    radial-gradient(
      circle at 50%,
      transparent calc(40% - 2px),
      black 4px,
      transparent calc(40% + 2px)
    ),
    radial-gradient(
      circle at 50%,
      white calc(34% - 2px),
      black 4px,
      white calc(34% + 2px)
    );
`;

const Counter = styled.p`
  font-size: 230px;
  font-weight: 400;

  @media only screen and (max-width: 600px) {
    font-size: 180px;
  }
`;

const light = keyframes`
  0% {
    box-shadow: 20px 20px 160px black inset, -20px -20px 160px black inset;
  }
  25% {
    box-shadow: 20px 20px 260px black inset, -20px -20px 260px black inset;
  }
  50% {
    box-shadow: 20px 20px 180px black inset, -20px -20px 180px black inset;
  }
  75% {
    box-shadow: 20px 20px 240px black inset, -20px -20px 240px black inset;
  }
  100% {
    box-shadow: 20px 20px 160px black inset, -20px -20px 160px black inset;
  }
`;

const Filter = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  box-shadow:
    20px 20px 60px black inset,
    -20px -20px 60px black inset;
  animation: ${() => css`2s ${light} linear infinite`};
`;

const move = keyframes`
  0% {
    transform: translateX(${Math.random() * 130}px) translateY(${
      Math.random() * 60
    }px);
  }
  25% {
    transform: translateX(${Math.random() * -30}px) translateY(${
      Math.random() * 300
    }px);
  }
  50% {
    transform: translateX(${Math.random() * 100}px) translateY(${
      Math.random() * 180
    }px);
  }
  75% {
    transform: translateX(${Math.random() * -120}px) translateY(${
      Math.random() * 240
    }px);
  }
  100% {
    transform: translateX(${Math.random() * 120}px) translateY(${
      Math.random() * 120
    }px);
  }
`;

const Grain = styled.div`
  position: absolute;
  top: -300px;
  left: -200px;
  height: 150%;
  width: 200%;
  background-image: url("/film-grain-vertical.png");
  opacity: 0.25;
  animation: ${() => css`0.2s ${move} linear infinite`};
`;

const Rotor = styled.div`
  --ang: 0deg;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: conic-gradient(
    rgba(0, 0, 0, 0.5) var(--ang),
    transparent var(--ang)
  );
  animation: ${({ $animate }) => ($animate ? "1s rotate linear infinite" : "")};

  @keyframes rotate {
    0% {
      --ang: 0deg;
    }
    100% {
      --ang: 360deg;
    }
  }

  @property --ang {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }
`;

function RotorComponent({ count, animate }) {
  return (
    <RandomContainer $show={count !== 0}>
      <Counter>{count}</Counter>
      <Filter />
      <Grain />
      <Rotor $animate={animate} />
    </RandomContainer>
  );
}

export default RotorComponent;
