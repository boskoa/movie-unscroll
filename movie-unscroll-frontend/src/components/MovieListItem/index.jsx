import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";
import { Link } from "react-router-dom";
import Rating from "../Rating";

const ItemContainer = styled.li`
  position: relative;
  width: 260px;
`;

const Poster = styled.div`
  height: 390px;
  width: 260px;
  filter: ${({ $loaded }) => ($loaded ? "" : "blur(10px)")};
  transition: filter 1s;
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  height: 36%;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px;
  background-color: rgba(0, 128, 128, 0.3);
  backdrop-filter: blur(7px);
  color: #fffac8;
  overflow-y: auto;
  overflow-x: hidden;
`;

const Dots = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: end;
  color: #fffac8;
  font-weight: 600;
  background: linear-gradient(transparent, #004141f2 80%, #004141);
  padding-left: 10px;
  letter-spacing: 2px;
`;

const Title = styled(Link)`
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  color: inherit;
`;

const Release = styled.p`
  font-size: 12px;
  font-style: italic;
`;

const Overview = styled.p`
  font-size: 12px;
`;

function MovieListItem({ movie }) {
  const posterRef = useRef();
  const detailsRef = useRef();
  const [dots, setDots] = useState(false);
  const intersecting = useIntersectionObserver(posterRef);
  const [load, setLoad] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (intersecting) {
      setLoad(true);
    }
  }, [intersecting]);

  useEffect(() => {
    if (detailsRef.current.scrollHeight > 140) {
      setDots(true);
      detailsRef.current.style.overflow = "hidden";
    }
  }, []);

  return (
    <ItemContainer>
      <Poster ref={posterRef} $loaded={loaded}>
        {load ? (
          <img
            draggable="false"
            alt="poster"
            src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
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
        <Rating rating={movie.vote_average} />
      </Poster>
      <Details ref={detailsRef}>
        <Title to={`/detailed-movie/${movie.id}`}>{movie.title}</Title>
        <Release>
          {movie.release_date
            ? new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              }).format(new Date(movie.release_date))
            : "No data"}
        </Release>
        <Overview>
          {movie.overview}
          {dots && <Dots>...</Dots>}
        </Overview>
      </Details>
    </ItemContainer>
  );
}

export default MovieListItem;
