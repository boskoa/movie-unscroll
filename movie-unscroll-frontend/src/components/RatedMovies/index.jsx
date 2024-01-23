import styled from "styled-components";
import Title from "../Title";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import NotLogged from "../NotLogged";
import { useEffect, useState } from "react";
import axios from "axios";
import RatedMovie from "./RatedMovie";

const SuperMainContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
`;

const RatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
`;

function RatedMovies() {
  const loggedUser = useSelector(selectLoggedUser);
  const [ratings, setRatings] = useState();
  const [loaded, setLoaded] = useState(false);

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

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  if (!loggedUser) return <NotLogged />;

  if (!ratings) return null;

  return (
    <SuperMainContainer $loaded={loaded}>
      <MainContainer>
        <Title style={{ width: "100%" }} text="Your ratings" />
        <RatedContainer>
          {ratings.map((r) => (
            <RatedMovie key={r.id} movie={r} user={loggedUser} />
          ))}
        </RatedContainer>
      </MainContainer>
    </SuperMainContainer>
  );
}

export default RatedMovies;
