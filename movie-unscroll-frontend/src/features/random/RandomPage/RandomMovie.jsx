import styled, { css, keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie, selectRandom } from "../randomSlice";
import { useEffect, useRef, useState } from "react";
import AgainButton from "./AgainButton";
import Rating from "./Rating";
import { Link } from "react-router-dom";

const intro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MovieContainer = styled.div`
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
  color: #fffac8;
  opacity: 0;
  overflow: hidden;
  transition: all 0.5s;
  animation: ${({ $show }) => ($show ? css`2s ${intro} forwards` : "")};

  @media only screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const taglineShow = keyframes`
  0% {
    opacity: 1;
  }
  60% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    z-index: -1;
  }
`;

const Tagline = styled.h3`
  opacity: 1;
  position: absolute;
  top: 20vh;
  left: 0;
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: ${({ $font }) => $font}px;
  height: 60vh;
  animation: ${({ $show }) => ($show ? css`5s ${taglineShow} forwards` : "")};

  @media only screen and (max-width: 500px) {
    font-size: ${({ $font }) => $font * 0.6}px;
  }
`;

const posterIntro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const PosterContainer = styled.div`
  position: relative;
  height: ${({ $height }) => $height};
  opacity: 0;
  animation: ${() => css`2s ${posterIntro} 5s forwards`};
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
  width: 0%;
  max-height: 80vh;
  overflow: hidden;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  animation: ${() => css`1s ${descriptionExpand} 9s forwards`};

  @media only screen and (max-width: 700px) {
    animation: none;
    width: 100%;
    min-height: 70vh;
    max-height: 120vh;
  }
`;

const Title = styled.h4`
  font-size: 26px;
  margin-bottom: 30px;
  opacity: 0;
  text-align: center;
  animation: ${() => css`2s ${posterIntro} 10s forwards`};

  @media only screen and (max-width: 700px) {
    animation-delay: 6s;
  }
`;

const Overview = styled.p`
  font-size: 14px;
  opacity: 0;
  text-align: justify;
  overflow-y: auto;
  padding-right: 5px;
  margin-bottom: 20px;
  animation: ${() => css`2s ${posterIntro} 11s forwards`};

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

  @media only screen and (max-width: 700px) {
    animation-delay: 7s;
  }
`;

const Genres = styled.p`
  flex: 2;
  font-size: 14px;
  font-style: italic;
  opacity: 0;
  color: grey;
  align-self: start;
  animation: ${() => css`2s ${posterIntro} 11.5s forwards`};

  @media only screen and (max-width: 700px) {
    animation-delay: 7.5s;
  }
`;

function RandomMovie({ show }) {
  const movie = useSelector(selectRandom);
  const dispatch = useDispatch();
  const movieRef = useRef();
  const [refetched, setRefetched] = useState(false);
  const [height, setHeight] = useState();

  function handleAnother() {
    setRefetched(true);
    dispatch(getRandomMovie());
    setTimeout(() => setRefetched(false), 1000);
  }

  useEffect(() => {
    if (document.body.clientWidth > 400) {
      setHeight("80vh");
    } else {
      setHeight("60vh");
    }
  }, []);

  useEffect(() => {
    dispatch(getRandomMovie());
  }, [dispatch]);

  if (!movie || show || refetched) {
    return null;
  }

  return (
    <MovieContainer ref={movieRef} $show={!show}>
      <PosterContainer $height={height}>
        <Rating
          show={!show}
          rating={Math.round(movie.vote_average * 10) / 10}
        />
        <img
          alt="poster"
          src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
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
        <AgainButton handleAnother={handleAnother}>Nah...</AgainButton>
      </Description>
      <Tagline
        $show={!show}
        $font={
          Math.floor((100 / (movie.tagline.length * 5)) * 100) > 70
            ? 70
            : Math.floor((100 / (movie.tagline.length * 5)) * 100)
        }
      >
        {movie.tagline || "No tagline."}
      </Tagline>
    </MovieContainer>
  );
}

export default RandomMovie;
