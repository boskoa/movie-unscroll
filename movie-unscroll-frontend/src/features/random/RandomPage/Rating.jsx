import { useEffect, useState } from "react";
import styled from "styled-components";

const OUTER_R = "40px";
const INNER_R = "36px";

const RatingContainer = styled.div`
  --ang: 0deg;
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
  animation: ${() => "0.5s rotate linear forwards"};

  &:hover {
    opacity: 0;
    animation: ${() => "0.5s back linear forwards"};
  }

  @keyframes rotate {
    0% {
      --ang: 0deg;
    }
    100% {
      --ang: ${({ $ang }) => $ang};
    }
  }

  @keyframes back {
    0% {
      --ang: ${({ $ang }) => $ang};
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
  font-size: 12px;
  font-weight: 600;
  transition: opacity 0.3s;
`;

function Rating({ show, rating }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let index;
    if (show) {
      index = setTimeout(() => setVisible(true), 10000);
    }

    return () => clearTimeout(index);
  }, [show]);

  useEffect(() => {
    console.log("RATING", rating);
  }, [rating]);

  if (!visible || !rating) return undefined;

  return (
    <RatingContainer $ang={`${rating * 36}deg`}>
      <RatingCounter>{rating}</RatingCounter>
    </RatingContainer>
  );
}

export default Rating;
