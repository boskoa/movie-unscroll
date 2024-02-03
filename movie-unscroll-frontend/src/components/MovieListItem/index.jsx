import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";

const ItemContainer = styled.li`
  height: 120px;
  width: 100%;
  border: 3px solid gold;
  box-shadow: 0 0 10px gold;
  box-sizing: content-box;
  border-radius: 3px;
  display: flex;
`;

const Poster = styled.div`
  height: 120px;
  width: 90px;
  filter: ${({ $loaded }) => ($loaded ? "" : "blur(10px)")};
  transition: filter 1s;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  color: #fffac8;
`;

function MovieListItem({ movie }) {
  const posterRef = useRef();
  const intersecting = useIntersectionObserver(posterRef);
  const [load, setLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (intersecting) {
      setLoad(true);
    }
  }, [intersecting]);

  return (
    <ItemContainer>
      <Poster ref={posterRef} $loaded={loaded}>
        {load ? (
          <img
            draggable="false"
            alt="poster"
            src={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`}
            onError={(e) => {
              e.currentTarget.alt = "No poster for this movie...";
              setLoaded(true);
            }}
            height="100%"
            width="100%"
            onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? "1" : "0" }}
          />
        ) : null}
      </Poster>
      <Details>
        <Text>{movie.title}</Text>
        <Text>{movie.vote_average}</Text>
      </Details>
    </ItemContainer>
  );
}

export default MovieListItem;
