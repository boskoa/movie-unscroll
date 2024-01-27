import { Link } from "react-router-dom";
import styled, { css, keyframes } from "styled-components";
import Rating from "./Rating";

const MovieContainer = styled.div`
  top: 0px;
  left: 0;
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
  //opacity: 0;
  overflow: hidden;
  transition: all 0.5s;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const PosterContainer = styled.div`
  position: relative;
  height: 80vh;
  //opacity: 0;
`;

const descriptionExpand = keyframes`
  from {
    width: 0px;
    padding: 0px;
  }
  to {
    width: 46%;
    padding: 0 30px;
  }
`;

const Description = styled.div`
  position: relative;
  width: 46%;
  max-height: 80vh;
  overflow: hidden;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  /* animation: ${() => css`1s ${descriptionExpand} 9s forwards`}; */

  @media only screen and (max-width: 700px) {
    animation: none;
    width: 100%;
    padding: 20px;
    //min-height: 70vh;
    max-height: 120vh;
  }
`;

const Title = styled.h4`
  font-size: 26px;
  margin-bottom: 30px;
  //opacity: 0;
  text-align: center;
`;

const Overview = styled.p`
  font-size: 14px;
  //opacity: 0;
  text-align: justify;
  overflow-y: auto;
  padding-right: 5px;
  margin-bottom: 20px;

  &::-webkit-scrollbar {
    width: 3px;
    background-color: #fffac828;
  }

  &::-webkit-scrollbar-track {
    width: 3px;
    background: #fffac828;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #fffac8;
    border-radius: 3px;
  }

  &::-webkit-scrollbar-button:single-button:vertical:decrement {
    height: 0px;
    width: 0px;
  }

  &::-webkit-scrollbar-button:single-button:vertical:increment {
    height: 0px;
    width: 0px;
  }
`;

const Genres = styled.p`
  //flex: 2;
  font-size: 14px;
  font-style: italic;
  //opacity: 0;
  color: grey;
  align-self: start;
`;

function Suggestion({ movie }) {
  if (!movie) {
    return null;
  }

  return (
    <MovieContainer>
      <PosterContainer>
        <Rating rating={Math.round(movie.vote_average * 10) / 10} />
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
          onError={(e) => (e.currentTarget.alt = "No poster for this movie...")}
          height="100%"
        />
      </PosterContainer>
      <Description>
        <Title>
          <Link
            style={{ color: "inherit", textDecoration: "none" }}
            to={`/detailed-movie/${movie.id}`}
          >
            {movie.title} ({movie.release_date.slice(0, 4)})
          </Link>
        </Title>
        <Overview>{movie.overview}</Overview>
        <Genres>Genres: {movie.genres.map((g) => g.name).join(", ")}</Genres>
      </Description>
    </MovieContainer>
  );
}

export default Suggestion;
