import { useEffect, useState } from "react";
import styled from "styled-components";

const OUTER_R = "40px";
const INNER_R = "34px";

const RatingContainer = styled.div`
  --ang: ${({ $ang }) => `${$ang}deg`};
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${OUTER_R};
  height: ${OUTER_R};
  background: conic-gradient(gold var(--ang), rgb(255, 68, 0) var(--ang));
  border-radius: 50%;
  transition: opacity 0.8s;
  animation: 0.5s fort linear;

  &:hover {
    opacity: 0;
    animation: 0.5s back linear;
  }

  @keyframes fort {
    0% {
      --ang: 0deg;
    }
    100% {
      --ang: ${({ $ang }) => `${$ang}deg`};
    }
  }

  @keyframes back {
    0% {
      --ang: ${({ $ang }) => `${$ang}deg`};
    }
    100% {
      --ang: 0deg;
    }
  }

  @property --ang {
    syntax: "<angle>";
    inherits: false;
    initial-value: 0deg;
  }
`;

const RatingCounter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${INNER_R};
  height: ${INNER_R};
  background-color: black;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 600;
  user-select: none;
  transition: opacity 0.3s;
`;

function Rating({ rating }) {
  const [ang, setAng] = useState();

  useEffect(() => {
    setAng(Math.floor(rating * 36));
  }, [rating]);

  if (!rating) return null;

  return (
    <RatingContainer $ang={ang}>
      <RatingCounter>{rating}</RatingCounter>
    </RatingContainer>
  );
}

export default Rating;
