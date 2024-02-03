import { useDispatch, useSelector } from "react-redux";
import {
  getTrending,
  selectAllTrending,
  selectTrendingLoading,
} from "../trendingSlice";
import MovieListItem from "../../../components/MovieListItem";
import styled from "styled-components";
import Title from "../../../components/Title";
import { useEffect, useState } from "react";
import { selectLoggedUser } from "../../login/loginSlice";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s;
`;

const TrendingContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  max-width: 700px;
  gap: 20px;
  list-style: none;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s;
`;

function AllTrending() {
  const loggedUser = useSelector(selectLoggedUser);
  const trending = useSelector(selectAllTrending);
  const [page, setPage] = useState(1);
  const loading = useSelector(selectTrendingLoading);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrending({ token: loggedUser.token, page }));
  }, [page, loggedUser, dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  useEffect(() => {
    const index = setTimeout(() => setLoaded(true), 1000);

    return () => clearTimeout(index);
  }, []);

  return (
    <MainContainer $loaded={loaded}>
      <Title text="trending" />
      <TrendingContainer $loaded={!loading}>
        {trending.slice(page * 20 - 20, page * 20).map((t) => (
          <MovieListItem key={t.id} movie={t} />
        ))}
      </TrendingContainer>
      <div>
        <span onClick={() => setPage(1)}>1</span>
        <span onClick={() => setPage(2)}>2</span>
        <span onClick={() => setPage(3)}>3</span>
        <span onClick={() => setPage(4)}>4</span>
      </div>
    </MainContainer>
  );
}

export default AllTrending;
