import { useEffect, useState } from "react";
import styled from "styled-components";

const OUTER_R = "40px";
const INNER_R = "34px";

const RatingContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${OUTER_R};
  height: ${OUTER_R};
  background: ${({ $ang }) =>
    `conic-gradient(gold ${$ang}deg, rgb(255, 68, 0) ${$ang}deg)`};
  border-radius: 50%;
  transition: opacity 0.8s;

  &:hover {
    opacity: 0;
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
      <RatingCounter>{Math.round(rating * 10) / 10}</RatingCounter>
    </RatingContainer>
  );
}

export default Rating;
