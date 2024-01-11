import styled, { css, keyframes } from "styled-components";
import clapper from "../../../assets/clapper.png";
import clap from "../../../assets/clap-up.png";
import RegisterForm from "./RegisterForm";
import { useState } from "react";

const slideIn = keyframes`
  from {
    transform: translateX(100vw);
  }
  to {
    transform: translateX(0vw);
  }
`;

const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  animation: ${() =>
    css`0.5s ${slideIn} 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both`};
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

function ClapComponent({ setRegister }) {
  const [clapDown, setClapDown] = useState(false);

  return (
    <RegisterContainer>
      <Clap src={clap} $clapDown={clapDown} />
      <Clapper src={clapper} />
      <RegisterForm setRegister={setRegister} setClapDown={setClapDown} />
    </RegisterContainer>
  );
}

export default ClapComponent;
