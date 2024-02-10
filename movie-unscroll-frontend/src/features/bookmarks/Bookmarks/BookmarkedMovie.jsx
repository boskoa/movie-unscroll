import styled from "styled-components";
import Delete from "./Delete";
import { Link } from "react-router-dom";

const RatedMovieContainer = styled.div`
  min-height: 80px;
  color: black;
  background-color: gold;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  position: relative;
  margin: 0 15px;

  @media only screen and (max-width: 400px) {
    padding: 5px;
  }
`;

const MovieTitle = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

function BookmarkedMovie({ movie }) {
  return (
    <RatedMovieContainer $background={movie}>
      <Delete id={movie.id} />
      <Link
        style={{ textDecoration: "none", cursor: "pointer", color: "inherit" }}
        to={`/detailed-movie/${movie.tmdbId}`}
      >
        <MovieTitle>{movie.name}</MovieTitle>
      </Link>
    </RatedMovieContainer>
  );
}

export default BookmarkedMovie;
