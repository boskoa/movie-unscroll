import styled from "styled-components";

const ContentContainer = styled.div`
  display: flex;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

const Posters = styled.div`
  width: 40vh;
  height: 60vh;
  display: flex;
  overflow: hidden;
`;

const PosterContainer = styled.div`
  height: 100%;
  width: 400%;
  display: flex;
`;

const Poster = styled.img`
  height: 100%;
  width: 40vh;
  object-position: top;
  object-fit: cover;
`;

const TitlesContainer = styled.div`
  width: 240px;
  height: 60vh;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  height: 25%;
`;

function Content({ movies }) {
  return (
    <ContentContainer>
      <Posters>
        <PosterContainer>
          {movies.map((m) => (
            <Poster
              key={m.id}
              src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
            />
          ))}
        </PosterContainer>
      </Posters>
      <TitlesContainer>
        {movies.map((m) => (
          <Title key={m.id}>{m.title}</Title>
        ))}
      </TitlesContainer>
    </ContentContainer>
  );
}

export default Content;
