import styled from "styled-components";
import SelectFilter from "./SelectFilter";
import { genres, sorts } from "./selections";
import { useEffect, useState } from "react";
import MultipleSelectFilter from "./MultipleSelectFilter";

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
  const [selectedSort, setselectedSort] = useState();

  useEffect(() => {
    console.log(selectedSort);
  }, [selectedSort]);

  return (
    <MainContainer>
      <Title>Filters</Title>
      <MultipleSelectFilter
        options={genres}
        selectedOptions={selectedGenres}
        setSelectedOptions={setSelectedGenres}
        title="Genres:"
      />
      <MultipleSelectFilter
        options={genres}
        selectedOptions={excludedGenres}
        setSelectedOptions={setExcludedGenres}
        title="Exclude genres:"
      />
      <SelectFilter
        options={sorts}
        setSelectedOption={setselectedSort}
        title="Sort by:"
      />
    </MainContainer>
  );
}

export default Filter;
