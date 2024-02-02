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
import {
  getTheaters,
  selectAllTheaters,
} from "../../features/theaters/theatersSlice";
import {
  getPopular,
  selectAllPopular,
} from "../../features/popular/popularSlice";
import {
  getTopRated,
  selectAllTopRated,
} from "../../features/topRated/topRatedSlice";

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
  const theaters = useSelector(selectAllTheaters).slice(0, 4);
  const popular = useSelector(selectAllPopular).slice(0, 4);
  const topRated = useSelector(selectAllTopRated).slice(0, 4);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!loggedUser) {
      navigate(-1);
    } else {
      dispatch(getTrending({ token: loggedUser.token, page: 1 }));
      dispatch(getTheaters({ token: loggedUser.token, page: 1 }));
      dispatch(getPopular({ token: loggedUser.token, page: 1 }));
      dispatch(getTopRated({ token: loggedUser.token, page: 1 }));
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
          sectionColor="orange"
          title="trending"
          movies={trending}
        />
        <Section
          delay={1}
          sectionColor="rgb(178, 180, 40)"
          title="theaters"
          movies={theaters}
        />
        <Section
          delay={2}
          sectionColor="rgb(205, 165, 10)"
          title="popular"
          movies={popular}
        />
        <Section
          delay={3}
          sectionColor="rgb(191, 68, 70)"
          title="top rated"
          movies={topRated}
        />
      </SectionsContainer>
    </MainContainer>
  );
}

export default Home;
