import styled from "styled-components";

const BackContainer = styled.div`
  width: 26px;
  height: 26px;
  position: absolute;
  bottom: -14px;
  left: -8px;
  background-color: gold;
  padding: 4px;
  mix-blend-mode: exclusion;
  transform: rotateZ(10deg);
`;

const RatingContainer = styled.div`
  position: absolute;
  bottom: -11px;
  left: -5px;
  height: 20px;
  width: 20px;
  background-color: ${({ $bg }) => $bg};
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotateZ(10deg);
  transition: transform 0.3s;
  font-weight: 600;
  user-select: none;

  &:active {
    transform: rotateZ(-360deg);
  }
`;

function RatingBox({ rating }) {
  return (
    <>
      <BackContainer />
      <RatingContainer $bg={rating <= 5 ? "red" : "limegreen"}>
        {rating}
      </RatingContainer>
    </>
  );
}

export default RatingBox;
