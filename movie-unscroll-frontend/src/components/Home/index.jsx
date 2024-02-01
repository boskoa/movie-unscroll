import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Section from "./Section";
import Title from "../Title";
import styled from "styled-components";
import {
  getTrending,
  selectAllTrending,
} from "../../features/trending/trendingSlice";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin-bottom: 50px;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s;
`;

const SectionsContainer = styled.div`
  display: grid;
  grid-template-areas:
    "trending theaters"
    "popular top-rated";
  gap: 30px;

  @media only screen and (max-width: 920px) {
    grid-template-areas:
      "trending"
      "theaters"
      "popular"
      "top-rated";
  }
`;

function Home() {
  const [loaded, setLoaded] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);
  const trending = useSelector(selectAllTrending).slice(0, 4);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedUser) {
      navigate(-1);
    } else {
      dispatch(getTrending({ token: loggedUser.token, page: 1 }));
    }
  }, [dispatch, loggedUser, navigate]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  if (!loggedUser) return null;

  return (
    <MainContainer $loaded={loaded}>
      <Title text="home" />
      <SectionsContainer>
        <Section title="trending" movies={trending} />
        <Section title="theaters" movies={trending} />
        <Section title="popular" movies={trending} />
        <Section title="top rated" movies={trending} />
      </SectionsContainer>
    </MainContainer>
  );
}

export default Home;
