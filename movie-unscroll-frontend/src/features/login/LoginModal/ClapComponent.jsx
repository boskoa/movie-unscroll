import styled, { css, keyframes } from "styled-components";
import clapper from "../../../assets/clapper.png";
import clap from "../../../assets/clap-up.png";
import LoginForm from "./LoginForm";
import { useState } from "react";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Clapper = styled.img`
  width: 300px;
  z-index: 2;
`;

const clapDown = keyframes`
  from {
    transform: translateY(44px) translateX(2px) rotateZ(0deg);
  }
  to {
    transform: translateY(44px) translateX(2px) rotateZ(10.5deg);
  }
`;

const clapUp = keyframes`
  to {
    transform: translateY(44px) translateX(2px) rotateZ(0deg);
  }
`;

const Clap = styled.img`
  width: 302px;
  transform-origin: 5% 50%;
  transform: translateY(44px) translateX(2px) rotateZ(0deg);
  animation: ${({ $clapDown }) =>
    $clapDown
      ? css`0.1s ${clapDown} ease-in forwards`
      : css`0.1s ${clapUp} ease-in forwards`};
`;

function ClapComponent({ setLogin }) {
  const [clapDown, setClapDown] = useState(false);

  return (
    <LoginContainer>
      <Clap src={clap} $clapDown={clapDown} />
      <Clapper src={clapper} />
      <LoginForm setLogin={setLogin} setClapDown={setClapDown} />
    </LoginContainer>
  );
}

export default ClapComponent;
