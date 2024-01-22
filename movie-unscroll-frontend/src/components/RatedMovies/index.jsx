import styled from "styled-components";
import Title from "../Title";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import NotLogged from "../NotLogged";
import { useEffect, useState } from "react";
import axios from "axios";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
`;

const RatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 800px;
`;

const RatedMovie = styled.div`
  box-shadow:
    0 0 10px 0 gold,
    inset 0 0 10px 0 gold;
  border-radius: 10px;
  border: 3px solid gold;
  min-height: 120px;
  color: #fff7c6;
  display: flex;
  flex-wrap: wrap;
`;

const MovieTitle = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 30px;
`;

function RatedMovies() {
  const loggedUser = useSelector(selectLoggedUser);
  const [ratings, setRatings] = useState();

  useEffect(() => {
    async function getRatings() {
      const config = {
        headers: {
          Authorization: `bearer ${loggedUser.token}`,
        },
      };
      try {
        const response = await axios.get("/api/movies/user-ratings", config);
        setRatings(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    if (loggedUser) {
      getRatings();
    }
  }, [loggedUser, setRatings]);

  if (!loggedUser) return <NotLogged />;

  if (!ratings) return null;

  return (
    <div style={{ maxWidth: 700, margin: "0 auto" }}>
      <MainContainer>
        <Title style={{ width: "100%" }} text="Your ratings" />
        <RatedContainer>
          {ratings.map((r) => (
            <RatedMovie key={r.id}>
              <MovieTitle>{r.title}</MovieTitle>
            </RatedMovie>
          ))}
        </RatedContainer>
      </MainContainer>
    </div>
  );
}

export default RatedMovies;
