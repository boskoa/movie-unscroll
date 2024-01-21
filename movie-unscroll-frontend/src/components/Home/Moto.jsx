import styled, { css, keyframes } from "styled-components";

const moveUp = keyframes`
  to {
    height: 0;
  }
`;

const MotoContainer = styled.div`
  position: relative;
  padding: 30px 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  animation: ${() => css`2s ${moveUp} 34s forwards`};
`;

const lightUp = keyframes`
  0% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
  41% {
    opacity: 0.8;
  }
  42% {
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  51% {
    opacity: 0.8;
  }
  52% {
    opacity: 1;
  }
  54% {
    opacity: 0.9;
  }
  55% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

const Text = styled.p`
  position: absolute;
  top: 30px;
  font-size: 30px;
  font-weight: 800;
  text-shadow: 0 0 10px gold;
  opacity: 0;
  color: gold;
  text-align: center;
  animation: ${({ $delay }) => css`6s ${lightUp} ${$delay} forwards`};

  @media only screen and (max-width: 500px) {
    font-size: 24px;
  }
`;

function Moto() {
  return (
    <MotoContainer>
      <Text $delay="2s">Tired of endless scrolling</Text>
      <Text $delay="8s">in search of something good to watch?</Text>
      <Text $delay="14s">And stil ending up watching crap?</Text>
      <Text $delay="20s">Remove the scrolling part</Text>
      <Text $delay="28s">and watch crap straight away!</Text>
    </MotoContainer>
  );
}

export default Moto;
