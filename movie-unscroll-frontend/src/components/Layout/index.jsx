import styled from "styled-components";
import NavBar from "./NavBar";
import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LoginModal from "../../features/login/LoginModal";
import RegisterModal from "../../features/users/RegisterModal";
import Footer from "./Footer";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import { getBookmarks } from "../../features/bookmarks/bookmarksSlice";

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
  const loggedUser = useSelector(selectLoggedUser);
  const dispatch = useDispatch();

  useEffect(() => {
    if (loggedUser) {
      dispatch(getBookmarks(loggedUser.token));
    }
  }, [dispatch, loggedUser]);

  return (
    <MainContainer $loaded={!["/", "/suggestions"].includes(location)}>
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
