import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import { selectLoggedUser } from "../../features/login/loginSlice";
import axios from "axios";

const DetailsContainers = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  width: 90vw;
`;

const PersonalDetails = styled.div`
  color: #fffac8;
`;

const Image = styled.div`
  float: left;
  height: 390px;
  width: 260px;
  margin-right: 10px;
  margin-bottom: 5px;
  filter: ${({ $loaded }) => ($loaded ? "" : "blur(10px)")};
  transition: filter 1s;

  @media only screen and (max-width: 500px) {
    float: none;
    margin: 0 auto;
    margin-bottom: 20px;
  }
`;

const PersonName = styled.p`
  font-size: 20px;
  font-weight: 800;
  align-self: center;
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 14px;
  margin-bottom: 10px;
`;

const Biography = styled.p`
  font-size: 14px;
  font-style: italic;
  text-align: justify;
`;

const Role = styled.h3`
  font-size: 16px;
  color: #fffac8;
  margin: 30px 0 20px 0;
`;

const MovieContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media only screen and (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

const Movie = styled.p`
  display: flex;
  align-items: center;
  font-size: 12px;
  color: #fffac8;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const formater = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
}).format;

function Details() {
  const { id } = useParams();
  const [person, setPerson] = useState();
  const [loaded, setLoaded] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);

  useEffect(() => {
    async function getPerson() {
      const config = {
        headers: {
          Authorization: `bearer ${loggedUser.token}`,
        },
      };

      try {
        const response = await axios.get(`/api/actors/detailed/${id}`, config);
        setPerson(response.data);
      } catch (error) {
        console.log("Error", error);
      }
    }
    if (id && loggedUser) {
      getPerson();
    }
  }, [id, loggedUser]);

  if (!person) {
    return null;
  }

  return (
    <DetailsContainers>
      <PersonalDetails>
        <Image $loaded={loaded}>
          <img
            draggable="false"
            alt="poster"
            src={`https://image.tmdb.org/t/p/h632/${person.profile_path}`}
            onError={(e) => {
              e.currentTarget.alt = "No poster for this movie...";
              setLoaded(true);
            }}
            height="100%"
            width="100%"
            onLoad={() => setLoaded(true)}
            style={{ opacity: loaded ? "1" : "0" }}
          />
        </Image>
        <PersonName>{person.name}</PersonName>
        <Text>
          Born:{" "}
          {`${formater(new Date(person.birthday))} (${
            person.place_of_birth || ""
          })` || "no data"}
        </Text>
        {person.deathday && (
          <Text>Died: {formater(new Date(person.deathday)) || "no data"}</Text>
        )}
        <Biography>Biography: {person.biography || "no data"}</Biography>
      </PersonalDetails>
      {person.credits.cast.length && (
        <>
          <Role>Actor:</Role>
          <MovieContainer>
            {person.credits.cast.map((m) => (
              <StyledLink to={`/detailed-movie/${m.id}`} key={m.id}>
                <Movie>
                  {m.title}{" "}
                  {m.release_date && `(${m.release_date.slice(0, 4)})`}
                </Movie>
              </StyledLink>
            ))}
          </MovieContainer>
        </>
      )}
      {person.credits.crew.length && (
        <>
          <Role>Director:</Role>
          <MovieContainer>
            {person.credits.crew
              .filter((r) => r.job === "Director")
              .map((m) => (
                <StyledLink to={`/detailed-movie/${m.id}`} key={m.id}>
                  <Movie>
                    {m.title}{" "}
                    {m.release_date && `(${m.release_date.slice(0, 4)})`}
                  </Movie>
                </StyledLink>
              ))}
          </MovieContainer>
        </>
      )}
      {person.credits.crew.length && (
        <>
          <Role>Writer:</Role>
          <MovieContainer>
            {person.credits.crew
              .filter((r) => r.job === "Writer")
              .map((m) => (
                <StyledLink to={`/detailed-movie/${m.id}`} key={m.id}>
                  <Movie>
                    {m.title}{" "}
                    {m.release_date && `(${m.release_date.slice(0, 4)})`}
                  </Movie>
                </StyledLink>
              ))}
          </MovieContainer>
        </>
      )}
    </DetailsContainers>
  );
}

export default Details;
