import styled from "styled-components";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import LoginModal from "../../features/login/LoginModal";
import RegisterModal from "../../features/users/RegisterModal";
import Footer from "./Footer";

const MainContainer = styled.div`
  position: relative;
  min-height: 100vh;
  color: white;
  background-color: black;
  padding-bottom: ${({ $loaded }) => ($loaded ? "50px" : "0")};
`;

function Layout() {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const location = useLocation().pathname;

  return (
    <MainContainer $loaded={location !== "/"}>
      <NavBar
        login={login}
        setLogin={setLogin}
        register={register}
        setRegister={setRegister}
      />
      <Outlet />
      {login && <LoginModal login={login} setLogin={setLogin} />}
      {register && (
        <RegisterModal register={register} setRegister={setRegister} />
      )}
      <Footer />
    </MainContainer>
  );
}

export default Layout;

// tired of endless scrolling in search of something good to watch? and stil ending up watching crap? remove the scrolling part and watch crap straigh away!
