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
