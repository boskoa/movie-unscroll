import styled, { css, keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getRandomMovie, selectRandom } from "../randomSlice";
import { useEffect } from "react";

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
  flex-wrap: wrap;
  padding: 30px;
  opacity: 0;
  animation: ${({ $show }) => ($show ? css`2s ${intro} forwards` : "")};
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
  }
`;

const Tagline = styled.h3`
  opacity: 1;
  position: absolute;
  top: 40%;
  left: 0;
  width: 100%;
  text-align: center;
  font-size: 60px;
  animation: ${({ $show }) => ($show ? css`5s ${taglineShow} forwards` : "")};
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
    width: 40%;
    padding: 30px;
  }
`;

const Description = styled.div`
  position: relative;
  width: 0%;
  overflow: hidden;
  padding: 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 30px;
  animation: ${() => css`1s ${descriptionExpand} 9s forwards`};
`;

const Title = styled.h4`
  font-size: 30px;
  opacity: 0;
  animation: ${() => css`2s ${posterIntro} 10s forwards`};
`;

const Overview = styled.p`
  font-size: 20px;
  opacity: 0;
  animation: ${() => css`2s ${posterIntro} 11s forwards`};
`;

const Button = styled.button`
  border: none;
  background-color: teal;
  padding: 10px 20px;
  margin-top: auto;
  cursor: pointer;
  opacity: 0;
  animation: ${() => css`2s ${posterIntro} 12s forwards`};
`;

function RandomMovie({ show }) {
  const movie = useSelector(selectRandom);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRandomMovie());
  }, [dispatch]);

  if (!movie || show) {
    return null;
  }

  return (
    <MovieContainer $show={!show}>
      <Poster
        alt="poster"
        src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
      />
      <Description>
        <Title>{movie.title}</Title>
        <Overview>{movie.overview}</Overview>
        <Button>Nah...</Button>
      </Description>
      <Tagline $show={!show}>{movie.tagline}</Tagline>
    </MovieContainer>
  );
}

export default RandomMovie;
