import styled from "styled-components";
import Title from "../Title";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import NotLogged from "../NotLogged";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import RatedMovie from "./RatedMovie";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";

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
  min-height: 90vh;
`;

const Loader = styled.div`
  height: 30px;
  width: 100%;
  margin: 20px 0;
  border: 1px solid gold;
`;

const LIMIT = 5;

function RatedMovies() {
  const loggedUser = useSelector(selectLoggedUser);
  const [ratings, setRatings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);
  const [stopLoading, setStopLoading] = useState(false);
  const loaderRef = useRef();
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
      <Loader ref={loaderRef} />
    </SuperMainContainer>
  );
}

export default RatedMovies;
