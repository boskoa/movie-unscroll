import { Link } from "react-router-dom";
import styled from "styled-components";
import Rating from "./Rating";
import { useEffect, useRef, useState } from "react";
import useIntersectionObserver from "../../../customHooks/useIntersectionObserver";

const MovieContainer = styled.div`
  top: 0px;
  left: 0;
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
  overflow: hidden;
  transition: all 0.5s;
  color: #fff7c6;

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: start;
  }
`;

const PosterContainer = styled.div`
  position: relative;
  height: 60vh;
  aspect-ratio: 0.6666667;
  filter: ${({ $loaded }) => ($loaded ? "" : "blur(10px)")};
  transition: filter 1s;
`;

const Description = styled.div`
  position: relative;
  width: 46%;
  max-height: 70vh;
  overflow: hidden;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;

  @media only screen and (max-width: 700px) {
    animation: none;
    width: 100%;
    padding: 20px;
  }
`;

const Title = styled.h4`
  font-size: 22px;
  margin-bottom: 10px;
  text-align: center;
`;

const Overview = styled.p`
  font-size: 14px;
  text-align: justify;
  overflow-y: auto;
  max-height: 50vh;
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
  font-size: 14px;
  font-style: italic;
  color: grey;
  align-self: start;
`;

function Suggestion({ movie }) {
  const posterRef = useRef();
  const intersecting = useIntersectionObserver(posterRef);
  const [load, setLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (intersecting) {
      setLoad(true);
    }
  }, [intersecting]);

  if (!movie) {
    return null;
  }

  return (
    <MovieContainer>
      <PosterContainer ref={posterRef} $loaded={loaded}>
        <Rating rating={Math.round(movie.vote_average * 10) / 10} />
        {load ? (
          <img
            draggable="false"
            alt="poster"
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            onError={(e) => {
              e.currentTarget.alt = "No poster for this movie...";
              setLoaded(true);
            }}
            height="100%"
            width="100%"
            onLoad={() => setLoaded(true)}
            style={{ display: loaded ? "block" : "none" }}
          />
        ) : null}
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
