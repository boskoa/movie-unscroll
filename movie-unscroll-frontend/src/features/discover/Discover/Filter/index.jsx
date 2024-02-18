import styled from "styled-components";
import SelectFilter from "./SelectFilter";
import { genres, languages, sorts } from "./selections";
import { useCallback, useEffect, useState } from "react";
import MultipleSelectFilter from "./MultipleSelectFilter";
import InputFilter from "./InputFilter";
import axios from "axios";
import SelectLanguage from "./SelectLanguage";
import MinMax from "./MinMax";
import MinMaxInput from "./MinMaxInput";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser } from "../../../login/loginSlice";
import {
  clearDiscover,
  getDiscover,
  selectAllFilters,
  selectCast,
  selectCrew,
  selectGenres,
  selectLanguage,
  selectNoGenres,
  selectReleaseGte,
  selectReleaseLte,
  selectSortBy,
  selectVoteAverageGte,
  selectVoteAverageLte,
  selectVoteCountGte,
  selectVoteCountLte,
  setCast,
  setCrew,
  setGenres,
  setLanguage,
  setNoGenres,
  setReleaseGte,
  setReleaseLte,
  setSortBy,
  setVoteAverageGte,
  setVoteAverageLte,
  setVoteCountGte,
  setVoteCountLte,
} from "../../discoverSlice";
import { Discover } from "./filterStyles";

const MainContainer = styled.div`
  position: relative;
  width: 96vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  background: rgba(0, 67, 67, 0.5);

  @media only screen and (max-width: 400px) {
    padding-bottom: 30px;
  }
`;

const Title = styled.h2`
  color: gold;
  font-size: 20px;
  font-weight: 600;
`;

function Filter({ page, setPage }) {
  const genre = useSelector(selectGenres);
  const noGenre = useSelector(selectNoGenres);
  const language = useSelector(selectLanguage);
  const sortBy = useSelector(selectSortBy);
  const [searchedCast, setSearchedCast] = useState([]);
  const cast = useSelector(selectCast);
  const [searchedCrew, setSearchedCrew] = useState([]);
  const crew = useSelector(selectCrew);
  const voteAverageGte = useSelector(selectVoteAverageGte);
  const voteAverageLte = useSelector(selectVoteAverageLte);
  const voteCountGte = useSelector(selectVoteCountGte);
  const voteCountLte = useSelector(selectVoteCountLte);
  const releaseGte = useSelector(selectReleaseGte);
  const releaseLte = useSelector(selectReleaseLte);
  const loggedUser = useSelector(selectLoggedUser);
  const filters = useSelector(selectAllFilters);
  const [toFirst, setToFirst] = useState(false);
  const dispatch = useDispatch();
  const fetchCast = useCallback(async (search, token, role, set) => {
    try {
      const config = {
        headers: {
          Authorization: `bearer ${token}`,
        },
      };
      const response = await axios.get(
        `/api/actors/search?search=${search}`,
        config,
      );
      set(
        response.data.results
          .filter((a) => a.known_for_department === role)
          .sort((a, b) => b.known_for.length - a.known_for.length)
          .slice(0, 10),
      );
    } catch {
      setSearchedCast([]);
    }
  }, []);

  useEffect(() => {
    if (toFirst) {
      dispatch(clearDiscover());
      dispatch(
        getDiscover({
          token: loggedUser.token,
          searchData: {
            language,
            releaseGte: releaseGte.slice(0, 4),
            releaseLte: releaseLte.slice(0, 4),
            sortBy,
            voteAverageGte,
            voteAverageLte,
            voteCountGte,
            voteCountLte,
            cast: cast.map((c) => c.id).join("|"),
            crew: crew.map((c) => c.id).join("|"),
            genre: genre.join("|"),
            noGenre: noGenre.join("|"),
          },
          page,
        }),
      );
    }
  }, [
    page,
    loggedUser,
    dispatch,
    language,
    releaseGte,
    releaseLte,
    sortBy,
    voteAverageGte,
    voteAverageLte,
    voteCountGte,
    voteCountLte,
    cast,
    crew,
    genre,
    noGenre,
    toFirst,
  ]);

  useEffect(() => {
    if (page > 1) {
      setToFirst(true);
    } else {
      setToFirst(false);
    }
  }, [page, filters, setPage, dispatch]);

  useEffect(() => {
    setPage(1);
    dispatch(clearDiscover());
  }, [dispatch, filters, setPage]);

  return (
    <MainContainer>
      <Title>Filters</Title>
      <MultipleSelectFilter
        options={genres}
        selectedOptions={genre}
        setSelectedOptions={setGenres}
        title="Include genres:"
      />
      <MultipleSelectFilter
        options={genres}
        selectedOptions={noGenre}
        setSelectedOptions={setNoGenres}
        title="Exclude genres:"
      />
      <InputFilter
        selectedOptions={cast}
        setSelectedOptions={setCast}
        searched={searchedCast}
        setSearched={setSearchedCast}
        fetch={fetchCast}
        role="Acting"
        title="Include cast"
      />
      <InputFilter
        selectedOptions={crew}
        setSelectedOptions={setCrew}
        searched={searchedCrew}
        setSearched={setSearchedCrew}
        fetch={fetchCast}
        role="Directing"
        title="Include director"
      />
      <MinMax
        ratings={[...new Array(10).keys()].map((k) => k + 1 + "")}
        setMin={setVoteAverageGte}
        setMax={setVoteAverageLte}
        titles={["Min rating", "Max rating"]}
      />
      <MinMaxInput
        min={voteCountGte}
        setMin={setVoteCountGte}
        max={voteCountLte}
        setMax={setVoteCountLte}
        titles={["Min vote count", "Max vote count"]}
        type="number"
        width="10ch"
      />
      <MinMaxInput
        min={releaseGte}
        setMin={setReleaseGte}
        max={releaseLte}
        setMax={setReleaseLte}
        titles={["Released from", "to"]}
        type="date"
        width="16ch"
      />
      <SelectLanguage
        options={languages}
        setSelectedOption={setLanguage}
        title="Language:"
      />
      <SelectFilter
        options={sorts}
        setSelectedOption={setSortBy}
        selectedOption={sortBy}
        title="Sort by:"
      />
      <div>
        <Discover
          onClick={() => {
            dispatch(clearDiscover());
            setPage(1);
            dispatch(
              getDiscover({
                token: loggedUser.token,
                searchData: {
                  language,
                  releaseGte: releaseGte.slice(0, 4),
                  releaseLte: releaseLte.slice(0, 4),
                  sortBy,
                  voteAverageGte,
                  voteAverageLte,
                  voteCountGte,
                  voteCountLte,
                  cast: cast.map((c) => c.id).join("|"),
                  crew: crew.map((c) => c.id).join("|"),
                  genre: genre.join("|"),
                  noGenre: noGenre.join("|"),
                },
                page,
              }),
            );
          }}
        >
          discover
        </Discover>
      </div>
    </MainContainer>
  );
}

export default Filter;
