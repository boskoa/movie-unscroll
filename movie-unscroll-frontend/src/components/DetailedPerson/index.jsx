import { useCallback, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";
import { selectLoggedUser } from "../../features/login/loginSlice";
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
import axios from "axios";

function DetailedPerson() {
  const { id } = useParams();
  const [search, setSearch] = useState("");
  const [active, setActive] = useState();
  const [persons, setPersons] = useState();
  const [error, setError] = useState();
  const [loaded, setLoaded] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);
  const searchRef = useRef();
  const inputRef = useRef();
  const navigate = useNavigate();
  const searchPerson = useCallback(async (person, token) => {
    if (!person) return;
    try {
      const config = {
        headers: {
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.get(
        `/api/actors/search?search=${person}`,
        config,
      );
      if (response.data.results.length < 1) {
        setError("Nothing found");
      } else {
        setError("");
      }
      setPersons(response.data.results);
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
        searchPerson(search, loggedUser.token);
      }
    }
    document.addEventListener("keypress", fetch);

    return () => document.removeEventListener("keypress", fetch);
  }, [active, loggedUser.token, search, searchPerson]);

  return (
    <MainContainer $loaded={loaded}>
      <Title text="people profile" />
      {!id && (
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
            araia-label="find a person"
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
                searchPerson(search, loggedUser.token);
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
      )}
      {error?.length > 0 && <Error>{error}</Error>}
      {!id && persons?.length > 0 && (
        <SearchResults>
          {persons.map((p) => (
            <StyledLink to={`/detailed-person/${p.id}`} key={p.id}>
              {p.name}{" "}
              {p.known_for_department ? `(${p.known_for_department})` : null}
            </StyledLink>
          ))}
        </SearchResults>
      )}
      <Outlet />
    </MainContainer>
  );
}

export default DetailedPerson;
