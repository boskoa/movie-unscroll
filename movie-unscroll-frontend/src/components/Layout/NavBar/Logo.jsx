import styled, { css, keyframes } from "styled-components";

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const filmRoll = keyframes`
  from {
    transform: rotateZ(0deg);
  }
  to {
    transform: rotateZ(360deg);
  }
`;

const filmUnroll = keyframes`
  from {
    transform: rotateZ(360deg);
  }
  to {
    transform: rotateZ(0deg);
  }
`;

const Roll = styled.img`
  //box-shadow: 0 0 5px 0 gold;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  animation: ${() => css`2s ${filmUnroll} linear forwards`};

  &:hover {
    animation: ${() => css`1s ${filmRoll} linear forwards`};
  }
`;

const Movie = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  align-self: start;
`;

const Unscroll = styled.span`
  font-family: "Josefin Sans", sans-serif;
  font-size: 24px;
  align-self: end;
`;

function Logo() {
  return (
    <LogoContainer>
      <Movie>Movie</Movie>
      <Roll src="/roll.png" />
      <Unscroll>Unscroll</Unscroll>
    </LogoContainer>
  );
}

export default Logo;
