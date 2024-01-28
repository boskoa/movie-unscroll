import styled from "styled-components";

const StripContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 20px;
  margin-top: 20px;
  width: 80vw;

  @media only screen and (max-width: 500px) {
    width: 100vw;
  }
`;

const Bulb = styled.p`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: radial-gradient(
    rgba(255, 255, 0, 1) 10%,
    rgba(255, 215, 0, 1) 55%,
    rgba(255, 215, 0, 1)
  );
  box-shadow: ${({ $glow }) => ($glow ? "0 0 10px 0 rgb(255, 255, 0)" : "")};
  opacity: ${({ $glow }) => ($glow ? 1 : 0.5)};
  cursor: pointer;
  transition: all 0.3s;

  @media only screen and (max-width: 500px) {
    width: 16px;
    height: 16px;
  }
`;

function FilmStrip({ ids, position, setPosition }) {
  return (
    <StripContainer>
      {ids.map((id, i) => (
        <Bulb key={id} $glow={i === position} onClick={() => setPosition(i)} />
      ))}
    </StripContainer>
  );
}

export default FilmStrip;
