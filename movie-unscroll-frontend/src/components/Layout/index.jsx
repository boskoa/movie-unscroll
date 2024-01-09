import styled from "styled-components";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../../features/login/LoginModal";

const MainContainer = styled.div`
  min-height: 100vh;
  color: white;
  background-color: black;
`;

function Layout() {
  const [login, setLogin] = useState(false);

  return (
    <MainContainer>
      <NavBar login={login} setLogin={setLogin} />
      <Outlet />
      {login && <LoginModal login={login} setLogin={setLogin} />}
    </MainContainer>
  );
}

export default Layout;

// tired of endless scrolling in search of something good to watch? and stil ending up watching crap? remove the scrolling part and watch crap straigh away!
