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
import { clearDiscover, getDiscover } from "../../discoverSlice";

const MainContainer = styled.div`
  width: 96vw;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
  background: rgba(0, 255, 60, 0.2);
`;

const Title = styled.h4`
  color: gold;
  font-size: 20px;
  font-weight: 600;
`;

function Filter({ page, setPage }) {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [excludedGenres, setExcludedGenres] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedSort, setSelectedSort] = useState("vote_average.desc");
  const [searchedCast, setSearchedCast] = useState([]);
  const [cast, setCast] = useState([]);
  const [searchedCrew, setSearchedCrew] = useState([]);
  const [crew, setCrew] = useState([]);
  const [voteAvgMin, setVoteAvgMin] = useState(1);
  const [voteAvgMax, setVoteAvgMax] = useState(10);
  const [voteCountMin, setVoteCountMin] = useState("");
  const [voteCountMax, setVoteCountMax] = useState("");
  const [minYear, setMinYear] = useState("");
  const [maxYear, setMaxYear] = useState("");
  const loggedUser = useSelector(selectLoggedUser);
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
    if (page > 1) {
      dispatch(
        getDiscover({
          token: loggedUser.token,
          searchData: {
            language: selectedLanguage,
            releaseGte: minYear.slice(0, 4),
            releaseLte: maxYear.slice(0, 4),
            sortBy: selectedSort,
            voteAverageGte: voteAvgMin,
            voteAverageLte: voteAvgMax,
            voteCountGte: voteCountMin,
            voteCountLte: voteCountMax,
            cast: cast.map((c) => c.id).join("|"),
            crew: crew.map((c) => c.id).join("|"),
            genre: selectedGenres.join("|"),
            noGenre: excludedGenres.join("|"),
          },
          page,
        }),
      );
    }
  }, [
    page,
    loggedUser,
    dispatch,
    selectedLanguage,
    minYear,
    maxYear,
    selectedSort,
    voteAvgMin,
    voteAvgMax,
    voteCountMin,
    voteCountMax,
    cast,
    crew,
    selectedGenres,
    excludedGenres,
  ]);

  useEffect(() => {
    console.log(page, selectedSort);
  }, [page, selectedSort]);

  return (
    <MainContainer>
      <Title>Filters</Title>
      <MultipleSelectFilter
        options={genres}
        selectedOptions={selectedGenres}
        setSelectedOptions={setSelectedGenres}
        title="Include genres:"
      />
      <MultipleSelectFilter
        options={genres}
        selectedOptions={excludedGenres}
        setSelectedOptions={setExcludedGenres}
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
        setMin={setVoteAvgMin}
        setMax={setVoteAvgMax}
        titles={["Min rating", "Max rating"]}
      />
      <MinMaxInput
        min={voteCountMin}
        setMin={setVoteCountMin}
        max={voteCountMax}
        setMax={setVoteCountMax}
        titles={["Min vote count", "Max vote count"]}
        type="number"
        width="10ch"
      />
      <MinMaxInput
        min={minYear}
        setMin={setMinYear}
        max={maxYear}
        setMax={setMaxYear}
        titles={["Released from", "to"]}
        type="date"
        width="16ch"
      />
      <SelectLanguage
        options={languages}
        setSelectedOption={setSelectedLanguage}
        title="Language:"
      />
      <SelectFilter
        options={sorts}
        setSelectedOption={setSelectedSort}
        selectedOption={selectedSort}
        title="Sort by:"
      />
      <div>
        <button
          onClick={() => {
            dispatch(clearDiscover());
            setPage(1);
            dispatch(
              getDiscover({
                token: loggedUser.token,
                searchData: {
                  language: selectedLanguage,
                  releaseGte: minYear.slice(0, 4),
                  releaseLte: maxYear.slice(0, 4),
                  sortBy: selectedSort,
                  voteAverageGte: voteAvgMin,
                  voteAverageLte: voteAvgMax,
                  voteCountGte: voteCountMin,
                  voteCountLte: voteCountMax,
                  cast: cast.map((c) => c.id).join("|"),
                  crew: crew.map((c) => c.id).join("|"),
                  genre: selectedGenres.join("|"),
                  noGenre: excludedGenres.join("|"),
                },
                page,
              }),
            );
          }}
        >
          discover
        </button>
      </div>
    </MainContainer>
  );
}

export default Filter;
