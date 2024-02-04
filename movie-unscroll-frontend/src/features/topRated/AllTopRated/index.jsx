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
  getTopRated,
  selectAllTopRated,
  selectTopRatedLoading,
} from "../topRatedSlice";
import { useNavigate } from "react-router-dom";

function AllTopRated() {
  const loggedUser = useSelector(selectLoggedUser);
  const topRated = useSelector(selectAllTopRated);
  const [page, setPage] = useState(1);
  const loading = useSelector(selectTopRatedLoading);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getTopRated({ token: loggedUser.token, page }));
  }, [page, loggedUser, dispatch]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

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
      <Title text="top rated" />
      <MovieContainer $loaded={!loading}>
        {topRated.slice(page * 20 - 20, page * 20).map((t) => (
          <MovieListItem key={t.id} movie={t} />
        ))}
      </MovieContainer>
      {!loading && <Pagination page={page} setPage={setPage} />}
    </MainContainer>
  );
}

export default AllTopRated;
