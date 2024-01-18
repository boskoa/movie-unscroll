import { useRef } from "react";
import styled from "styled-components";

const SignContainer = styled.div`
  position: relative;
  width: 100%;
  height: 1px;
  margin-bottom: 30px;
`;

const SignBox = styled.div`
  position: absolute;
  top: -7px;
  left: -65px;
  width: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid gold;
  border-radius: 5px;
  padding: 0px 5px;
  font-size: 10px;
  font-weight: 600;
  box-shadow:
    0 0 5px 0 gold,
    inset 0 0 5px 0 gold;
  transition: all 1s ease-out;
  transition-delay: 2s;
  transform: translateX(${({ $width }) => $width + 5}px);
  background-color: gold;
  color: black;
`;

const Arrow = styled.div`
  position: absolute;
  top: -7px;
  right: 6px;
  width: 10px;
  height: 10px;
  background-color: gold;
  box-shadow:
    0 0 5px 0 gold,
    inset 0 0 5px 0 gold;
  border: 2px solid gold;
  border-radius: 2px 0 0 0;
  transform: rotateZ(45deg);
`;

function Sign({ rating, votes }) {
  const signRef = useRef();

  return (
    <SignContainer ref={signRef}>
      <SignBox $width={signRef.current?.offsetWidth * (rating / 10)}>
        <p>{rating}</p>
        <p>
          {votes > 1000
            ? `${Math.round(votes / 1000)}k`
            : new Intl.NumberFormat().format(votes)}{" "}
          votes
        </p>
        <Arrow />
      </SignBox>
    </SignContainer>
  );
}

export default Sign;
