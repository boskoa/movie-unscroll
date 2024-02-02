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
        <Section
          delay={0}
          sectionColor="gold"
          title="trending"
          movies={trending}
        />
        <Section
          delay={1}
          sectionColor="teal"
          title="theaters"
          movies={trending}
        />
        <Section
          delay={2}
          sectionColor="orange"
          title="popular"
          movies={trending}
        />
        <Section
          delay={3}
          sectionColor="limegreen"
          title="top rated"
          movies={trending}
        />
      </SectionsContainer>
    </MainContainer>
  );
}

export default Home;
