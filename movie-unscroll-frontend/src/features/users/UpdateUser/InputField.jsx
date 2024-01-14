import { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  position: relative;
  transition: all 0.5s;
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
  transform: ${({ $clicked }) =>
    $clicked ? "translateY(-25px)" : "translateY(0px)"};
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

const Back = styled.input`
  position: relative;
  height: 42px;
  width: 200px;
  transition: all 0.5s;
  color: gold;
  background-color: black;
  padding: 0 5px;
  border: 2px solid gold;
  border-radius: 0 0 10px 10px;
  filter: ${({ $clicked }) => ($clicked ? "brightness(1)" : "brightness(0.8)")};
  transform: ${({ $clicked }) =>
    $clicked ? "translateY(58px)" : "translateY(50px)"};

  &:focus {
    border: 2px solid gold;
    outline: none;
    box-shadow: 0 0 5px 0 gold;
  }
`;

function InputField() {
  const [clicked, setClicked] = useState(false);

  return (
    <InputContainer>
      <Back $clicked={clicked} />
      <Front $clicked={clicked} onClick={() => setClicked((p) => !p)}>
        <p
          style={{
            position: "relative",
            zIndex: 100,
            //filter: clicked ? "invert(100%)" : "",
            fontSize: "14px",
            fontWeight: 600,
          }}
        >
          Change username
        </p>
      </Front>
    </InputContainer>
  );
}

export default InputField;
