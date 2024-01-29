import styled from "styled-components";
import Title from "../Title";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import NotLogged from "../NotLogged";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import RatedMovie from "./RatedMovie";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";
import { useNavigate } from "react-router-dom";
import Search from "./Search";

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
  min-height: 80vh;
`;

const Loader = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 20px;
  //border: 1px solid gold;
`;

const LIMIT = 5;

function RatedMovies() {
  const loggedUser = useSelector(selectLoggedUser);
  const [ratings, setRatings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);
  const [stopLoading, setStopLoading] = useState(false);
  const loaderRef = useRef();
  const navigate = useNavigate();
  const intersecting = useIntersectionObserver(loaderRef);
  const getRatings = useCallback(async (o, token) => {
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `/api/movies/user-ratings?pagination=${o},${LIMIT}`,
        config,
      );
      if (response.data.length === 0) {
        setStopLoading(true);
      } else {
        setRatings((p) => [
          ...p,
          ...response.data.filter(
            (r) => !p.map((entry) => entry.id).includes(r.id),
          ),
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function deleteRating(id) {
    const config = {
      headers: {
        Authorization: `bearer ${loggedUser.token}`,
      },
    };
    try {
      await axios.delete(`/api/movies/${id}`, config);
      setRatings((p) => p.filter((m) => m.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (intersecting && !stopLoading) {
      setOffset((prev) => prev + LIMIT);
    }
  }, [intersecting, stopLoading]);

  useEffect(() => {
    if (offset - LIMIT > ratings.length) {
      setStopLoading(true);
    } else {
      setStopLoading(false);
    }
  }, [offset, ratings]);

  useEffect(() => {
    if (loggedUser) {
      getRatings(offset, loggedUser.token);
    }
  }, [loggedUser, offset, getRatings]);

  useEffect(() => {}, [loggedUser]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  useEffect(() => {
    if (!loggedUser) navigate("/");
  }, [loggedUser, navigate]);

  if (!loggedUser) return <NotLogged />;

  if (!ratings) return null;

  return (
    <SuperMainContainer $loaded={loaded}>
      <MainContainer>
        <Title style={{ width: "100%" }} text="Your ratings" />
        <Search />
        <RatedContainer>
          {ratings.map((r) => (
            <RatedMovie
              key={r.id}
              movie={r}
              user={loggedUser}
              deleteRating={deleteRating}
            />
          ))}
        </RatedContainer>
      </MainContainer>
      <Loader ref={loaderRef} />
    </SuperMainContainer>
  );
}

export default RatedMovies;
