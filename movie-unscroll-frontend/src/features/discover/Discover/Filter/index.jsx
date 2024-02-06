import styled from "styled-components";
import SelectFilter from "./SelectFilter";
import { genres, languages, sorts } from "./selections";
import { useCallback, useEffect, useState } from "react";
import MultipleSelectFilter from "./MultipleSelectFilter";
import InputFilter from "./InputFilter";
import axios from "axios";
import SelectLanguage from "./SelectLanguage";
import MinMax from "./MinMax";

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

function Filter() {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [excludedGenres, setExcludedGenres] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [selectedSort, setSelectedSort] = useState();
  const [searchedCast, setSearchedCast] = useState([]);
  const [cast, setCast] = useState([]);
  const [searchedCrew, setSearchedCrew] = useState([]);
  const [crew, setCrew] = useState([]);
  const [voteAvgMin, setVoteAvgMin] = useState();
  const [voteAvgMax, setVoteAvgMax] = useState();
  const [voteCountMin, setVoteCountMin] = useState();
  const [voteCountMax, setVoteCountMax] = useState();
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
    console.log(selectedLanguage);
  }, [selectedLanguage]);

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
      <SelectLanguage
        options={languages}
        setSelectedOption={setSelectedLanguage}
        title="Language:"
      />
      <SelectFilter
        options={sorts}
        setSelectedOption={setSelectedSort}
        title="Sort by:"
      />
    </MainContainer>
  );
}

export default Filter;
