import { useRef } from "react";
import styled from "styled-components";

const RatingContainer = styled.div`
  position: relative;
  width: 100%;
  height: 5px;
  border-radius: 3px;
  overflow: hidden;
  background: linear-gradient(90deg, #ffff00, #80ff00);
`;

const Bar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 1s ease-out;
  transition-delay: 2s;
  background: linear-gradient(90deg, transparent 1%, #ff2a00 3%);
  transform: translateX(${({ $width }) => $width}px);
`;

function Rating({ rating }) {
  const ratingRef = useRef();

  return (
    <RatingContainer ref={ratingRef}>
      <Bar $width={ratingRef.current?.offsetWidth * (rating / 10)} />
    </RatingContainer>
  );
}

export default Rating;
