import styled from "styled-components";
import NavBar from "./NavBar";

const MainContainer = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  color: white;
  background-color: black;
`;

function Layout() {
  return (
    <MainContainer>
      <NavBar />
    </MainContainer>
  );
}

export default Layout;
