import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  margin-bottom: 50px;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s;
`;

export const MovieContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  align-items: center;
  width: 96vw;
  gap: 20px;
  list-style: none;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s;

  @media only screen and (max-width: 1160px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 860px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 580px) {
    grid-template-columns: 1fr;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid gold;
  border-radius: 30px;
  position: relative;
`;

export const SearchIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  background-color: inherit;
  transform-origin: 0%;
  width: ${({ $active }) => ($active ? "20ch" : "0ch")};
  display: ${({ $active }) => ($active ? "visible" : "hidden")};
  color: #fffac8;
  transition: width 0.5s;
  height: 20px;
  margin: ${({ $active }) => ($active ? "5px 25px 5px 5px" : "5px 0 5px 0")};
  border: none;

  &:focus {
    outline: none;
  }
`;

export const EnterIcon = styled.div`
  position: absolute;
  right: 5px;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  opacity: ${({ $active }) => ($active ? "1" : "0")};
  z-index: ${({ $active }) => ($active ? "1" : "-1")};
  transition: opacity 0.3s;
  cursor: pointer;
`;

export const Error = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 60px;
  font-size: 26px;
  color: gold;
`;

export const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fffac8;
`;
