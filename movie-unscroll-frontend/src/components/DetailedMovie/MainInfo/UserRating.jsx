import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import styled, { css, keyframes } from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const starSlide = (id) => keyframes`
  0% {
    transform: translateX(${id});
    opacity: 0;
  }
  50% {
    transform: translateX(20px);
    opacity: 1;
  }
  100% {
    transform: translateX(0%);
    opacity: 1;
  }
`;

const starReturn = (id) => keyframes`
  0% {
    transform: translateX(0%);
    opacity: 1;
  }
  100% {
    transform: translateX(${id});
    opacity: 0;
  }
`;

const StarsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 5px;

  & div:first-child {
    transform: scale(1.4) translateX(-9%);
    transition: transform 0.5s ease-in;

    & > p {
      opacity: 1;
      transform: translateX(-9%);
    }
  }

  &:hover > div:first-child {
    transform: scale(1);

    & > p {
      opacity: 0;
    }
  }
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
  transform: translateX(${({ $id }) => $id * -100}%) scale(1);
  z-index: ${({ $id }) => 10 - $id};
  opacity: ${({ $id }) => ($id !== 0 ? 0 : 1)};
  transition: filter 0.5s;
  animation: ${({ $hover, $id }) =>
    $id !== 0 &&
    ($hover
      ? css`0.1s ${starSlide(`${$id * -100}%`)} ${$id * 0.05}s both`
      : css`0.1s ${starReturn(`${$id * -100}%`)} ${(9 - $id) * 0.05}s both`)};

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
    font-size: 18px;
    padding: 2px;

    & > span {
      font-size: 8px;
      padding: 6px;
    }
  }

  @media (hover: none) {
    animation: none;
    transform: translateX(0%);
    opacity: 1;
  }
`;

const Grade = styled.p`
  position: absolute;
  top: 0px;
  bottom: 0;
  left: 0;
  right: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  color: black;
  transition: opacity, 0.2s;
`;

const Text = styled.p`
  font-size: 14px;
`;

function UserRating({ user, movie }) {
  const [rating, setRating] = useState({ rating: 0 });
  const [hover, setHover] = useState(false);
  const [newRating, setNewRating] = useState();
  const [existing, setExisting] = useState(false);

  useEffect(() => {
    async function getRating() {
      const config = {
        headers: {
          Authorization: `bearer ${user.token}`,
        },
      };
      const response = await axios.get(`/api/movies/${movie.id}`, config);
      if (response.data) {
        setRating(response.data);
        setExisting(true);
      } else {
        setExisting(false);
      }
    }

    getRating();
  }, [movie.id, user.token]);

  useEffect(() => {
    async function addRating() {
      const config = {
        headers: {
          Authorization: `bearer ${user.token}`,
        },
      };
      const response = await axios.post(
        `/api/movies`,
        {
          rating: newRating,
          tmdbId: movie.id,
          title: movie.title,
          movieShow: "movie",
          userId: user.id,
        },
        config,
      );
      setRating(response.data);
      setExisting(true);
    }

    async function updateRating() {
      const config = {
        headers: {
          Authorization: `bearer ${user.token}`,
        },
      };
      const response = await axios.patch(
        `/api/movies/${movie.id}`,
        { rating: newRating },
        config,
      );
      setRating(response.data);
    }

    if (newRating) {
      if (!existing) {
        addRating();
      } else {
        updateRating();
      }
    }
  }, [
    newRating,
    movie.id,
    user.token,
    user.id,
    movie.tmdbId,
    movie.title,
    existing,
  ]);

  if (!user) return null;

  return (
    <MainContainer>
      <Text>{rating?.rating ? "Your rating:" : "Not rated:"}</Text>
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
          <Grade>{rating?.rating ?? 0}</Grade>
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
    </MainContainer>
  );
}

export default UserRating;
