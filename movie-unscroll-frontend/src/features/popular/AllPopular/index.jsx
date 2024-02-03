import { useDispatch, useSelector } from "react-redux";
import MovieListItem from "../../../components/MovieListItem";
import Title from "../../../components/Title";
import { useEffect, useState } from "react";
import { selectLoggedUser } from "../../login/loginSlice";
import Pagination from "../../../components/Pagination";
import {
  MainContainer,
  MovieContainer,
} from "../../../components/styledComponents";
import {
  getPopular,
  selectAllPopular,
  selectPopularLoading,
} from "../popularSlice";

function AllPopular() {
  const loggedUser = useSelector(selectLoggedUser);
  const popular = useSelector(selectAllPopular);
  const [page, setPage] = useState(1);
  const loading = useSelector(selectPopularLoading);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopular({ token: loggedUser.token, page }));
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
      <Title text="popular" />
      <MovieContainer $loaded={!loading}>
        {popular.slice(page * 20 - 20, page * 20).map((t) => (
          <MovieListItem key={t.id} movie={t} />
        ))}
      </MovieContainer>
      {!loading && <Pagination page={page} setPage={setPage} />}
    </MainContainer>
  );
}

export default AllPopular;
