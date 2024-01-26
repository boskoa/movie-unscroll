import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import Delete from "./Delete";
import RatingBox from "./RatingBox";

const RatedMovieContainer = styled.div`
  /* box-shadow:
    0 0 10px 0 gold,
    inset 0 0 10px 0 gold;
  border-radius: 10px;
  border: 3px solid gold; */
  min-height: 120px;
  color: black;
  background-color: gold;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  //overflow: hidden;
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

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: black;
  //height: 40px;
  padding: 5px;
  overflow: hidden;
`;

const StarContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  padding: 3px;
  font-size: 22px;
  color: ${({ $rated }) => ($rated ? "#c7a900" : "grey")};
  cursor: pointer;
  transition: filter 0.5s;

  &:hover > svg {
    filter: brightness(2.7);
  }

  & > span {
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px;
    width: 75%;
    text-align: center;
    font-size: 12px;
    font-weight: 600;
    color: black;
    transition: 0.2s;
  }

  &:hover > span {
    opacity: 1;
  }

  @media only screen and (max-width: 500px) {
    font-size: 16px;
    padding: 2px;

    & > span {
      font-size: 7px;
      padding: 5px;
    }
  }

  @media (hover: none) {
    animation: none;
    transform: translateX(0%);
    opacity: 1;
  }
`;

function RatedMovie({ movie, user, deleteRating }) {
  const [rating, setRating] = useState({ rating: 0 });
  const [hover, setHover] = useState(false);
  const [newRating, setNewRating] = useState();

  useEffect(() => {
    setRating(movie);
  }, [movie]);

  useEffect(() => {
    async function updateRating() {
      const config = {
        headers: {
          Authorization: `bearer ${user.token}`,
        },
      };
      const response = await axios.patch(
        `/api/movies/${movie.tmdbId}`,
        { rating: newRating },
        config,
      );
      setRating(response.data);
    }

    if (newRating) {
      updateRating();
    }
  }, [newRating, movie.id, user.token, user.id, movie.tmdbId, movie.title]);

  return (
    <RatedMovieContainer>
      <Delete id={movie.id} deleteRating={deleteRating} />
      <RatingBox rating={rating.rating} />
      <MovieTitle>{movie.title}</MovieTitle>
      <StarsContainer
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <StarContainer
          onClick={() => setNewRating(1)}
          $hover={hover}
          $id={0}
          $rated={rating?.rating > 0}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>1</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(2)}
          $hover={hover}
          $id={1}
          $rated={rating?.rating > 1}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>2</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(3)}
          $hover={hover}
          $id={2}
          $rated={rating?.rating > 2}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>3</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(4)}
          $hover={hover}
          $id={3}
          $rated={rating?.rating > 3}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>4</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(5)}
          $hover={hover}
          $id={4}
          $rated={rating?.rating > 4}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>5</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(6)}
          $hover={hover}
          $id={5}
          $rated={rating?.rating > 5}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>6</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(7)}
          $hover={hover}
          $id={6}
          $rated={rating?.rating > 6}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>7</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(8)}
          $hover={hover}
          $id={7}
          $rated={rating?.rating > 7}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>8</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(9)}
          $hover={hover}
          $id={8}
          $rated={rating?.rating > 8}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>9</span>
        </StarContainer>
        <StarContainer
          onClick={() => setNewRating(10)}
          $hover={hover}
          $id={9}
          $rated={rating?.rating > 9}
        >
          <FontAwesomeIcon icon={faVideo} />
          <span>10</span>
        </StarContainer>
      </StarsContainer>
    </RatedMovieContainer>
  );
}

export default RatedMovie;
