import styled from "styled-components";
import actorLogo from "../../assets/actor.jpg";

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
  bottom: 0;
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
  text-shadow: 0 0 3px white;
  backdrop-filter: blur(5px);
`;

const Money = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

function ProductionDetails({ movie }) {
  return (
    <MainContainer>
      <Crews>
        <CrewContainer>
          <p>Screenplay:</p>
          <ImagesContainer>
            {movie.credits.crew
              .filter((c) => c.job === "Screenplay")
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
                      e.currentTarget.src = actorLogo;
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
                      e.currentTarget.src = actorLogo;
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
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(movie.budget) || "not known"}
        </p>
        <p style={{ color: movie.budget > movie.revenue ? "red" : "lime" }}>
          Revenue:{" "}
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(movie.revenue) || "not known"}
        </p>
      </Money>
      <CrewContainer>
        <p>Production:</p>
        <ImagesContainer>
          {movie.production_companies.map(
            (c) =>
              c.logo_path && (
                <CrewImage
                  key={c.id}
                  draggable="false"
                  alt={c.name}
                  src={`https://image.tmdb.org/t/p/original/${c.logo_path}`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = actorLogo;
                  }}
                />
              ),
          )}
        </ImagesContainer>
      </CrewContainer>
    </MainContainer>
  );
}

export default ProductionDetails;
