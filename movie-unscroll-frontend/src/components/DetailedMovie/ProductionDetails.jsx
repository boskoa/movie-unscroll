import styled from "styled-components";
import actorLogo from "../../assets/actor.jpg";
import actressLogo from "../../assets/actress.jpg";

const MainContainer = styled.div`
  position: relative;
  //text-shadow: 0 0 8px gold;
  font-size: 14px;
  font-weight: 400;
  max-width: 96%;
  padding: 20px;
  color: #fff7c6;
  border: 3px solid gold;
  box-shadow:
    0 0 10px 0 gold,
    inset 0 0 10px 0 gold;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 40px;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    border-radius: 9px;
    background: ${({ $backdrop }) =>
      `url(https://image.tmdb.org/t/p/original/${$backdrop})`};
    background-size: cover;
    opacity: 0.2;
    z-index: -1;
    box-shadow: inset 0px 0px 50px 0 black;
  }
`;

const Crews = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 40px;
`;

const CrewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;
`;

const ImagesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 10px;
`;

const ImageContainer = styled.div`
  width: 100px;
  position: relative;
`;

const CrewImage = styled.img`
  width: 100%;
  height: auto;
  user-select: none;
`;

const CrewName = styled.div`
  position: absolute;
  width: 100%;
  height: 30%;
  bottom: 6px;
  left: 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2px;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  background-color: rgba(255, 0, 0, 0.3);
  color: black;
  text-shadow: 0 0 5px white;
  backdrop-filter: blur(5px);
`;

const Money = styled.div`
  display: flex;
  gap: 50px;

  @media only screen and (max-width: 500px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const LogoContainer = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  padding: 5px;
  background-color: #fff7c6;
  border-radius: 10px;
  overflow: hidden;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
  user-select: none;
`;

function ProductionDetails({ movie }) {
  return (
    <MainContainer $backdrop={movie.backdrop_path}>
      <Crews>
        <CrewContainer>
          <p>Screenplay:</p>
          <ImagesContainer>
            {movie.credits.crew
              .filter((c) => ["Screenplay", "Writer"].includes(c.job))
              .map((c) => (
                <ImageContainer key={c.id}>
                  <CrewName>
                    <p>{c.name}</p>
                  </CrewName>
                  <CrewImage
                    draggable="false"
                    alt={c.name}
                    src={`https://image.tmdb.org/t/p/w185/${c.profile_path}`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        c.gender === 1 ? actressLogo : actorLogo;
                    }}
                  />
                </ImageContainer>
              ))}
          </ImagesContainer>
        </CrewContainer>
        <CrewContainer>
          <p>Directing:</p>
          <ImagesContainer>
            {movie.credits.crew
              .filter((c) => c.job === "Director")
              .map((c) => (
                <ImageContainer key={c.id}>
                  <CrewName>
                    <p>{c.name}</p>
                  </CrewName>
                  <CrewImage
                    draggable="false"
                    alt={c.name}
                    src={`https://image.tmdb.org/t/p/original/${c.profile_path}`}
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src =
                        c.gender === 1 ? actressLogo : actorLogo;
                    }}
                  />
                </ImageContainer>
              ))}
          </ImagesContainer>
        </CrewContainer>
      </Crews>
      <p>
        Language: {movie.spoken_languages.map((l) => l.english_name).join(", ")}
      </p>
      <Money>
        <p>
          Budget:{" "}
          {movie.budget
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movie.budget)
            : "No data"}
        </p>
        <p
          style={{
            color:
              !movie.budget || !movie.revenue
                ? ""
                : movie.budget > movie.revenue
                  ? "red"
                  : "lime",
          }}
        >
          Revenue:{" "}
          {movie.revenue
            ? new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(movie.revenue)
            : "No data"}
        </p>
      </Money>
      <CrewContainer>
        <p>Production:</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {movie.production_companies.map((c) =>
            c.logo_path ? (
              <LogoContainer key={c.id}>
                <LogoImage
                  title={c.name}
                  draggable="false"
                  alt={c.name}
                  src={`https://image.tmdb.org/t/p/original/${c.logo_path}`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                  }}
                />
              </LogoContainer>
            ) : (
              <LogoContainer key={c.id} style={{ width: 100 }}>
                <p
                  style={{ color: "black", textAlign: "center", fontSize: 12 }}
                >
                  {c.name}
                </p>
              </LogoContainer>
            ),
          )}
        </div>
      </CrewContainer>
    </MainContainer>
  );
}

export default ProductionDetails;
