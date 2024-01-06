import styled from "styled-components";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";

const MainContainer = styled.div`
  min-height: 100vh;
  color: white;
  background-color: black;
`;

function Layout() {
  return (
    <MainContainer>
      <NavBar />
      <Outlet />
    </MainContainer>
  );
}

export default Layout;

// tired of endless scrolling in search of something good to watch? and stil ending up watching crap? remove the scrolling part and watch crap straigh away!
