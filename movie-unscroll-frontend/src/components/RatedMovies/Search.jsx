import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  height: 30px;
  width: ${({ $active }) => ($active ? "200px" : "30px")};
  border: 2px solid gold;
  border-radius: 15px;
  box-shadow: ${({ $active }) =>
    $active ? "0 0 5px 0 gold, 0 0 5px 0 gold inset" : ""};
  transition: all 0.3s;
  display: flex;
  justify-content: end;
  align-items: center;
  overflow: hidden;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  flex-shrink: 0;
  height: 26px;
  width: 26px;
  border-radius: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const SearchInput = styled.input`
  border: none;
  outline: none;
  width: 158px;
  height: 16px;
  background-color: black;
  color: gold;
  flex-shrink: 20;

  &:focus {
    outline: none;
  }
`;

function Search({ search, setSearch, setOffset, setRatings }) {
  const [active, setActive] = useState(false);
  const inputRef = useRef();
  const searchRef = useRef();

  useEffect(() => {
    if (active) {
      setTimeout(() => inputRef.current.focus(), 0);
    }
  }, [active, setSearch]);

  useEffect(() => {
    function clickAway(e) {
      if (
        !inputRef.current.value.length &&
        searchRef.current &&
        !searchRef.current.contains(e.target)
      ) {
        setActive(false);
      }
    }

    document.addEventListener("click", clickAway);

    return () => document.removeEventListener("click", clickAway);
  }, []);

  return (
    <MainContainer ref={searchRef} $active={active}>
      <IconContainer
        onClick={() => {
          setActive((p) => !p);
        }}
      >
        <FontAwesomeIcon
          icon={faSearch}
          style={{
            color: "gold",
            height: "16px",
          }}
        />
      </IconContainer>
      <SearchInput
        aria-label="search rated movies"
        ref={inputRef}
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setOffset(0);
          setRatings([]);
        }}
      />
    </MainContainer>
  );
}

export default Search;
