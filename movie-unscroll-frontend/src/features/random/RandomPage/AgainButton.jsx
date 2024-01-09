import styled, { css, keyframes } from "styled-components";

const buttonIntro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const buttonRoll = keyframes`
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(-200%);
  }
`;

const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  box-shadow: 0 0 8px 0 #f1e77a;
  border: none;
  background-color: #f1e77a;
  width: 80px;
  margin: 10px 0;
  cursor: pointer;
  opacity: 0;
  overflow: hidden;
  user-select: none;
  animation: ${() => css`2s ${buttonIntro} 12s forwards`};

  @media only screen and (max-width: 700px) {
    animation-delay: 8s;
  }

  &:hover > * {
    transform: translateX(-100%);
    animation: ${() => css`1s ${buttonRoll} linear forwards infinite`};
  }
`;

const Margin = styled.div`
  position: relative;
  height: 10px;
  width: 100%;
  background: url("/film-hole.svg");

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: -100%;
    width: 100%;
    height: 10px;
    background: url("/film-hole.svg");
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -200%;
    width: 100%;
    height: 10px;
    background: url("/film-hole.svg");
  }
`;

const Text = styled.p`
  position: relative;
  padding: 1px 20px;
  background-color: #f1e77a;
  border-left: 1px solid black;
  border-right: 1px solid black;
  font-weight: 600;

  &::before {
    content: "Another";
    position: absolute;
    top: 1px;
    right: -103%;
    width: 100%;
    height: 100%;
    border-left: 1px solid black;
    border-right: 1px solid black;
    background-color: #f1e77a;
  }

  &::after {
    content: "Nah...";
    position: absolute;
    top: 1px;
    right: -206%;
    width: 100%;
    height: 100%;
    border-left: 1px solid black;
    border-right: 1px solid black;
    background-color: #f1e77a;
  }
`;

function AgainButton({ handleAnother }) {
  return (
    <ButtonContainer
      onClick={() => {
        handleAnother();
      }}
    >
      <Margin />
      <Text>Nah...</Text>
      <Margin />
    </ButtonContainer>
  );
}

export default AgainButton;
