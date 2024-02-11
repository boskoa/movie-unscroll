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

function MainInfo({ movie, setImageLoaded, setTrailer }) {
  return (
    <MainInfoContainer>
      <Poster
        movie={movie}
        setImageLoaded={setImageLoaded}
        setTrailer={setTrailer}
      />
      <Info movie={movie} />
    </MainInfoContainer>
  );
}

export default MainInfo;
