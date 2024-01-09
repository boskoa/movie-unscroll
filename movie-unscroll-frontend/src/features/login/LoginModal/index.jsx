import styled, { css, keyframes } from "styled-components";
import ClapComponent from "./ClapComponent";

const appear = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(70, 100, 100, 0.7);
  opacity: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 200;
  animation: ${() => css`1s ${appear} forwards`};
`;

function LoginModal({ login, setLogin }) {
  if (!login) return null;

  return (
    <ModalContainer>
      <ClapComponent setLogin={setLogin} />
    </ModalContainer>
  );
}

export default LoginModal;
