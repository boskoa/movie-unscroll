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
  getTheaters,
  selectAllTheaters,
  selectTheatersLoading,
} from "../theatersSlice";

function AllTheaters() {
  const loggedUser = useSelector(selectLoggedUser);
  const theaters = useSelector(selectAllTheaters);
  const [page, setPage] = useState(1);
  const loading = useSelector(selectTheatersLoading);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTheaters({ token: loggedUser.token, page }));
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
      <Title text="In theaters" />
      <MovieContainer $loaded={!loading}>
        {theaters.slice(page * 20 - 20, page * 20).map((t) => (
          <MovieListItem key={t.id} movie={t} />
        ))}
      </MovieContainer>
      {!loading && <Pagination page={page} setPage={setPage} />}
    </MainContainer>
  );
}

export default AllTheaters;
