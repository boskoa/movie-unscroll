import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import useIntersectionObserver from "../../../customHooks/useIntersectionObserver";

const ContentContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Posters = styled.div`
  width: 200px;
  height: 300px;
  display: flex;
  overflow: hidden;
`;

const PosterContainer = styled.div`
  height: 100%;
  width: 400%;
  display: flex;
  transform: translateX(${({ $position }) => $position * -25}%);
  transition: all 1s;
`;

const Poster = styled.img`
  height: 100%;
  width: 200px;
  object-position: 0 10%;
  object-fit: cover;
`;

const TitlesContainer = styled.div`
  position: relative;
  width: 200px;
  height: 300px;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Title = styled.h4`
  height: 25%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Highlight = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 25%;
  background-color: rgb(255, 68, 0);
  mix-blend-mode: lighten;
  transform: translateY(${({ $position }) => $position * 100}%);
  transition: all 1s;
`;

function Content({ movies, position, setPosition }) {
  const posterRef = useRef();
  const intersecting = useIntersectionObserver(posterRef);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    if (intersecting) {
      setLoad(true);
    }
  }, [intersecting]);

  return (
    <ContentContainer>
      <Posters>
        <PosterContainer ref={posterRef} $position={position}>
          {movies.map((m) => (
            <Link to={`/detailed-movie/${m.id}`} key={m.id}>
              {load ? (
                <Poster
                  draggable="false"
                  alt="poster"
                  src={`https://image.tmdb.org/t/p/w342/${m.poster_path}`}
                  onError={(e) => {
                    e.currentTarget.alt = "No poster for this movie...";
                  }}
                  height="100%"
                  width="100%"
                />
              ) : null}
            </Link>
          ))}
        </PosterContainer>
      </Posters>
      <TitlesContainer>
        {movies.map((m, i) => (
          <Title onClick={() => setPosition(i)} key={m.id}>
            {m.title}
          </Title>
        ))}
        <Highlight $position={position} />
      </TitlesContainer>
    </ContentContainer>
  );
}

export default Content;
