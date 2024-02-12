import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import tmdb from "../../assets/tmdb.svg";

const FooterContainer = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background-color: rgba(0, 67, 67, 0.7);
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-top: 50px;
  padding: 0 10px;
  opacity: ${({ $loaded }) => ($loaded ? "1" : "0")};
  transition: all 0.5s;
  z-index: 100;
  backdrop-filter: blur(10px);

  &:hover {
    opacity: 1;
  }
`;

const Title = styled.h2`
  font-size: 16px;
  font-weight: 600;
  color: rgb(255, 68, 0);
  width: 33%;
  text-align: center;

  & span {
    font-family: "Josefin Sans", sans-serif;
  }

  & span:nth-child(even) {
    color: gold;
  }

  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const AboutLink = styled(Link)`
  font-family: "Josefin Sans", sans-serif;
  text-decoration: none;
  font-size: 16px;
  color: gold;
  cursor: pointer;
  width: 33%;

  @media only screen and (max-width: 400px) {
    font-size: 12px;
  }
`;

const PoweredBy = styled.div`
  font-family: "Josefin Sans", sans-serif;
  font-size: 12px;
  color: rgb(255, 68, 0);
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;
  width: 33%;

  @media only screen and (max-width: 500px) {
    font-size: 10px;
    flex-direction: column;
    justify-content: center;
    align-items: end;
  }
`;

function Footer() {
  const location = useLocation().pathname;

  return (
    <FooterContainer $loaded={!["/", "/suggestions"].includes(location)}>
      <AboutLink to="/about">About</AboutLink>
      <Title>
        <span>Movie</span> <span>Unscroll</span>
      </Title>
      <PoweredBy>
        Powered by:{" "}
        <a
          rel="noreferrer"
          target="_blank"
          href="https://www.themoviedb.org/"
          aria-label="TMDB"
        >
          <img alt="tmdb logo" width="70px" src={tmdb} />
        </a>
      </PoweredBy>
    </FooterContainer>
  );
}

export default Footer;
