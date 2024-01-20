import styled from "styled-components";

const PosterContainer = styled.div`
  position: relative;
  padding: 30px 20px;
`;

const Image = styled.img`
  position: relative;
  width: 260px;
  z-index: 1;
  filter: sepia(0.5);
`;

const Glow = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  filter: blur(30px) sepia(0.5);
`;

function Poster({ path, setImageLoaded }) {
  return (
    <PosterContainer>
      <Glow
        alt="poster glow"
        src={`https://image.tmdb.org/t/p/original/${path}`}
        onError={(e) => (e.currentTarget.alt = "")}
      />
      <Image
        alt="poster"
        src={`https://image.tmdb.org/t/p/original/${path}`}
        onError={(e) => {
          e.currentTarget.alt = "No poster for this movie...";
          setImageLoaded(true);
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </PosterContainer>
  );
}

export default Poster;
