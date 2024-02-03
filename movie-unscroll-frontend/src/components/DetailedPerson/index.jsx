import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { selectLoggedUser } from "../../features/login/loginSlice";
import { MainContainer } from "../styledComponents";
import Title from "../Title";
import styled from "styled-components";

const StyledInput = styled.input`
  background-color: inherit;
  border: 1px solid red;
`;

function DetailedPerson() {
  const [search, setSearch] = useState();
  const [persons, setPersons] = useState();
  const [loaded, setLoaded] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);

  useEffect(() => {
    const index = setTimeout(() => setLoaded(true), 1000);

    return () => clearTimeout(index);
  }, []);

  return (
    <MainContainer $loaded={loaded}>
      <Title text="biography" />
      <StyledInput />
      <Outlet />
    </MainContainer>
  );
}

export default DetailedPerson;
