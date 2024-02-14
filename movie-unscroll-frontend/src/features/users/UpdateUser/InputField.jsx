import { useState } from "react";
import styled, { css, keyframes } from "styled-components";

const InputContainer = styled.div`
  position: relative;
  transition: all 0.5s;
`;

const open = keyframes`
  0% {
    transform: perspective(200px) translateZ(0px) translateY(0px);
  }
  50% {
    transform: perspective(200px) translateZ(3px) translateY(0px);
  }
  100% {
    transform: perspective(200px) translateZ(3px) translateY(-29px);
  }
`;

const close = keyframes`
  0% {
    transform: perspective(200px) translateZ(3px) translateY(-29px);
  }
  50% {
    transform: perspective(200px) translateZ(3px) translateY(0px);
  }
  100% {
    transform: perspective(200px) translateZ(0px) translateY(0px);
  }
`;

const Front = styled.div`
  position: relative;
  height: 50px;
  width: 200px;
  cursor: pointer;
  transition: all 0.5s;
  color: gold;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  border-radius: 10px;
  filter: ${({ $clicked }) => ($clicked ? "brightness(1)" : "brightness(0.8)")};
  animation: ${({ $clicked }) =>
    $clicked ? css`0.5s ${open} forwards` : css`0.5s ${close} forwards`};
  box-shadow: ${({ $clicked }) =>
    $clicked
      ? `inset 5px 5px 20px rgba(255, 255, 255, 0.9),
    inset -5px -5px 20px rgba(255, 255, 255, 0.9)`
      : ""};
  background: linear-gradient(
    90deg,
    gold 10%,
    rgb(255, 68, 0) 10%,
    rgb(255, 68, 0) 90%,
    gold 90%
  );

  &::before {
    content: "";
    position: absolute;
    top: -5px;
    left: -5px;
    height: 60px;
    width: 210px;
    z-index: -1;
    transition: all 0.5s;
    opacity: ${({ $clicked }) => ($clicked ? "1" : "0")};
    background: linear-gradient(
      90deg,
      gold 10%,
      rgb(255, 68, 0) 10%,
      rgb(255, 68, 0) 90%,
      gold 90%
    );
    filter: blur(20px);
  }
`;

const Option = styled.div`
  font-size: 14px;
  font-weight: 600;
`;

const Back = styled.input`
  position: relative;
  height: 42px;
  width: 200px;
  transition: all 0.25s;
  transition-delay: ${({ $clicked }) => ($clicked ? "0.25s" : "")};
  color: gold;
  background-color: black;
  padding: 0 5px;
  border: 2px solid gold;
  border-radius: 0 0 10px 10px;
  filter: ${({ $clicked }) => ($clicked ? "brightness(1)" : "brightness(0.8)")};
  transform: ${({ $clicked }) =>
    $clicked ? "translateY(58px)" : "translateY(50px)"};

  &:focus {
    outline: none;
    box-shadow: 0 0 5px 0 gold;
  }
`;

const Error = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #8b10c8;
`;

function InputField({ params, error }) {
  const [clicked, setClicked] = useState(false);

  return (
    <InputContainer>
      <Back $clicked={clicked} {...params} />
      <Front $clicked={clicked} onClick={() => setClicked((p) => !p)}>
        <Option>
          {error ? <Error>{error}</Error> : `Change ${params.placeholder}`}
        </Option>
      </Front>
    </InputContainer>
  );
}

export default InputField;
