import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Moto from "./Moto";
import Section from "./Section";
import Title from "../Title";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s;
`;

const SectionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

function Home() {
  const [loaded, setLoaded] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser) {
      navigate(-1);
    }
  }, [loggedUser, navigate]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  if (!loggedUser) return null;

  return (
    <MainContainer $loaded={loaded}>
      <Title text="home" />
      <SectionsContainer>
        <Section title="trending" />
        <Section title="theaters" />
        <Section title="popular" />
        <Section title="top rated" />
      </SectionsContainer>
    </MainContainer>
  );
}

export default Home;
