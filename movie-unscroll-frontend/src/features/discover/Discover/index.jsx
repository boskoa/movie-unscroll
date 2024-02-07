import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser } from "../../login/loginSlice";
import {
  selectAllDiscover,
  selectDiscoverLoading,
  selectPages,
  setPages,
} from "../discoverSlice";
import { useEffect, useState } from "react";
import {
  MainContainer,
  MovieContainer,
} from "../../../components/styledComponents";
import Title from "../../../components/Title";
import MovieListItem from "../../../components/MovieListItem";
import Pagination from "../../../components/Pagination";
import { useNavigate } from "react-router-dom";
import Filter from "./Filter";

function Discover() {
  const loggedUser = useSelector(selectLoggedUser);
  const movies = useSelector(selectAllDiscover);
  const pages = useSelector(selectPages);
  const [page, setPage] = useState(pages);
  const loading = useSelector(selectDiscoverLoading);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(setPages(page));
  }, [dispatch, page]);

  useEffect(() => {
    const index = setTimeout(() => setLoaded(true), 1000);

    return () => clearTimeout(index);
  }, []);

  useEffect(() => {
    if (!loggedUser) {
      navigate(-1);
    }
  }, [loggedUser, navigate]);

  return (
    <MainContainer $loaded={loaded}>
      <Title text="discover" />
      <Filter page={page} setPage={setPage} />
      {movies && (
        <MovieContainer $loaded={!loading}>
          {movies.slice(page * 20 - 20, page * 20).map((t) => (
            <MovieListItem key={t.id} movie={t} />
          ))}
        </MovieContainer>
      )}
      {!loading && movies.length ? (
        <Pagination page={page} setPage={setPage} />
      ) : null}
    </MainContainer>
  );
}

export default Discover;
