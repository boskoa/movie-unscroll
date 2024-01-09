import styled, { css, keyframes } from "styled-components";
import clapper from "../../../assets/clapper.png";
import clap from "../../../assets/clap-up.png";
import LoginForm from "./LoginForm";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  //border: 3px solid gold;
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

const Clap = styled.img`
  width: 302px;
  transform-origin: 5% 50%;
  transform: translateY(44px) translateX(2px) rotateZ(0deg);
  animation: ${() => css`0.2s ${clapDown} ease-in infinite`};
`;

function ClapComponent({ setLogin }) {
  return (
    <LoginContainer>
      <Clap src={clap} />
      <Clapper src={clapper} />
      <LoginForm setLogin={setLogin} />
    </LoginContainer>
  );
}

export default ClapComponent;
