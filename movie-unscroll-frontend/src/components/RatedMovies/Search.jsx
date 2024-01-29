import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef, useState } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  position: relative;
  align-self: flex-start;
  height: 30px;
  width: ${({ $active }) => ($active ? "200px" : "30px")};
  margin-left: 14px;
  border: 2px solid gold;
  border-radius: 15px;
  box-shadow: ${({ $active }) =>
    $active ? "0 0 5px 0 gold, 0 0 5px 0 gold inset" : ""};
  transition: all 0.3s;
  display: flex;
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
  background-color: black;
  color: gold;
  margin-left: 30px;
  flex-shrink: 20;

  &:focus {
    outline: none;
  }
`;

function Search({ search, setSearch }) {
  const [active, setActive] = useState(false);
  const inputRef = useRef();

  return (
    <MainContainer $active={active}>
      <IconContainer
        onClick={() => {
          setActive((p) => !p);
          //inputRef.current.focus();
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
      <SearchInput ref={inputRef} />
    </MainContainer>
  );
}

export default Search;
