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

  &:hover > span {
    transform: rotateZ(-45deg) translateY(0px);
  }

  @media only screen and (max-width: 600px) {
    font-size: 12px;
  }
`;

const Title = styled.h3`
  height: 25%;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  color: #fff7c6;
`;

const Highlight = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 25%;
  background-color: ${({ $color }) => $color};
  mix-blend-mode: exclusion;
  transform: translateY(${({ $position }) => $position * 100}%);
  transition: all 1s;
`;

const More = styled.span`
  position: absolute;
  bottom: -30px;
  right: -30px;
  height: 60px;
  width: 60px;
  background-color: gold;
  box-shadow: 0 0 5px 0 gold;
  color: black;
  font-size: 12px;
  font-weight: 600;
  text-align: center;
  z-index: 3;
  transform: rotateZ(-45deg) translateY(30px);
  transition: all 0.5s;
  cursor: pointer;
  mix-blend-mode: difference;
`;

function Content({ title, sectionColor, movies, position, setPosition }) {
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
            <Link
              to={`/detailed-movie/${m.id}`}
              key={m.id}
              aria-label={`link to ${m.title}`}
            >
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
        <Highlight $color={sectionColor} $position={position} />
        <More>
          <Link
            aria-label={`link to more ${title}`}
            to={`/${title.replace(" ", "-")}`}
            style={{
              textDecoration: "none",
              color: "inherit",
              height: "100%",
              width: "100%",
              display: "inline-block",
            }}
          >
            more
          </Link>
        </More>
      </TitlesContainer>
    </ContentContainer>
  );
}

export default Content;
