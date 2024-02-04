import { useCallback, useEffect, useRef, useState } from "react";
import { selectLoggedUser } from "../../features/login/loginSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  EnterIcon,
  Error,
  InputContainer,
  MainContainer,
  SearchIcon,
  SearchResults,
  StyledInput,
  StyledLink,
} from "../styledComponents";
import Title from "../Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket, faSearch } from "@fortawesome/free-solid-svg-icons";

function MovieSearch() {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState();
  const [movies, setMovies] = useState();
  const [error, setError] = useState();
  const [loaded, setLoaded] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);
  const searchRef = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();
  const searchMovie = useCallback(async (movie, token) => {
    if (!movie) return;
    try {
      const config = {
        headers: {
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.get(
        `/api/movies/search?search=${movie}`,
        config,
      );
      if (response.data.results.length < 1) {
        setError("Nothing found");
      } else {
        setError("");
      }
      setMovies(response.data.results);
    } catch {
      setError("Nothing found");
    }
  }, []);

  useEffect(() => {
    const index = setTimeout(() => setLoaded(true), 1000);

    return () => clearTimeout(index);
  }, []);

  useEffect(() => {
    if (active) {
      setTimeout(() => inputRef.current.focus(), 0);
    }
  }, [active, setSearch]);

  useEffect(() => {
    function clickAway(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setActive(false);
      }
    }

    document.addEventListener("click", clickAway);

    return () => document.removeEventListener("click", clickAway);
  }, []);

  useEffect(() => {
    if (!loggedUser) {
      navigate(-1);
    }
  }, [loggedUser, navigate]);

  useEffect(() => {
    function fetch(e) {
      if (search && active && e.key === "Enter") {
        searchMovie(search, loggedUser.token);
      }
    }
    document.addEventListener("keypress", fetch);

    return () => document.removeEventListener("keypress", fetch);
  }, [active, loggedUser.token, search, searchMovie]);

  return (
    <MainContainer $loaded={loaded}>
      <Title text="search for movies" />
      <InputContainer ref={searchRef}>
        <SearchIcon onClick={() => setActive(true)}>
          <FontAwesomeIcon
            icon={faSearch}
            color="gold"
            style={{ fontSize: "20px", zIndex: 3 }}
          />
        </SearchIcon>
        <StyledInput
          id="search"
          name="search"
          type="text"
          ref={inputRef}
          $active={active}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <EnterIcon
          $active={active}
          disabled={search?.length < 1}
          onClick={() => {
            if (search) {
              searchMovie(search, loggedUser.token);
            }
          }}
        >
          <FontAwesomeIcon
            icon={faRightToBracket}
            color="gold"
            style={{ fontSize: "20px" }}
          />
        </EnterIcon>
      </InputContainer>
      {error?.length > 0 && <Error>{error}</Error>}
      {movies?.length > 0 && (
        <SearchResults>
          {movies.map((m) => (
            <StyledLink to={`/detailed-movie/${m.id}`} key={m.id}>
              {m.title} ({m.release_date.slice(0, 4)})
            </StyledLink>
          ))}
        </SearchResults>
      )}
    </MainContainer>
  );
}

export default MovieSearch;
