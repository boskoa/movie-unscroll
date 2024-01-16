import styled from "styled-components";
import Poster from "./Poster";
import Info from "./Info";

const MainInfoContainer = styled.div`
  display: flex;
  align-items: stretch;
  gap: 20px;
  color: #fff7c6;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

function MainInfo({ movie, setImageLoaded }) {
  return (
    <MainInfoContainer>
      <Poster path={movie.poster_path} setImageLoaded={setImageLoaded} />
      <Info movie={movie} />
    </MainInfoContainer>
  );
}

export default MainInfo;
