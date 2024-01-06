import styled, { css, keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie, selectRandom } from "../randomSlice";
import { useEffect, useRef, useState } from "react";
import AgainButton from "./AgainButton";

const intro = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MovieContainer = styled.div`
  top: 50px;
  left: 0;
  min-height: 90vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: stretch;
  padding: 30px;
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
  top: 40%;
  left: 0;
  width: 100%;
  overflow: hidden;
  text-align: center;
  font-size: 60px;
  max-height: 50vh;
  animation: ${({ $show }) => ($show ? css`5s ${taglineShow} forwards` : "")};

  @media only screen and (max-width: 500px) {
    font-size: 40px;
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

const Poster = styled.img`
  height: 80vh;
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
    padding: 20px;
    min-height: 70vh;
    max-height: 120vh;
  }
`;

const Title = styled.h4`
  font-size: 30px;
  margin-bottom: 30px;
  opacity: 0;
  text-align: center;
  animation: ${() => css`2s ${posterIntro} 10s forwards`};

  @media only screen and (max-width: 700px) {
    animation-delay: 6s;
  }
`;

const Overview = styled.p`
  flex: 2;
  font-size: 16px;
  opacity: 0;
  text-align: justify;
  overflow-y: auto;
  padding-right: 5px;
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

function RandomMovie({ show }) {
  const movie = useSelector(selectRandom);
  const dispatch = useDispatch();
  const movieRef = useRef();
  const [refetched, setRefetched] = useState(false);

  function handleAnother() {
    setRefetched(true);
    dispatch(getRandomMovie());
    console.log("FUNC", movieRef.current.style.opacity);
    setTimeout(() => setRefetched(false), 500);
  }

  useEffect(() => {
    dispatch(getRandomMovie());
  }, [dispatch]);

  if (!movie || show || refetched) {
    return null;
  }

  return (
    <MovieContainer ref={movieRef} $show={!show}>
      <Poster
        alt="poster"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
        onError={(e) => (e.currentTarget.alt = "No poster for this movie...")}
      />
      <Description>
        <Title>{movie.title}</Title>
        <Overview>{movie.overview}</Overview>
        <AgainButton handleAnother={handleAnother}>Nah...</AgainButton>
      </Description>
      <Tagline $show={!show}>
        {movie.tagline || "No tagline! Must be great."}
      </Tagline>
    </MovieContainer>
  );
}

export default RandomMovie;
