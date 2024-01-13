import styled from "styled-components";
import Logo from "./Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../../features/login/loginSlice";
import UserMenu from "./UserMenu";
import MainMenu from "./MainMenu";

const NavContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: rgba(0, 67, 67, 0.9);
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  z-index: 100;
  //opacity: 1;
  backdrop-filter: blur(10px);

  @media only screen and (max-width: 400px) {
    gap: 0px;
  }
`;

const Icon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  font-size: 20px;
  color: ${({ $color }) => $color};
  cursor: pointer;
  text-shadow: none;
  user-select: none;

  & > svg {
    transition: 0.5s all 0.1s;
  }

  &:hover > svg {
    opacity: 0;
  }

  &:hover::after {
    opacity: 1;
  }

  &:active {
    transform-origin: 50%;
    transform: perspective(100px) translateZ(-3px);
    transition: transform 0.1s;
  }
`;

const LogInIcon = styled(Icon)`
  &::after {
    content: "Log in";
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: end;
    align-items: center;
    opacity: 0;
    transition: 0.5s all 0.1s;
  }
`;

const SignUpIcon = styled(Icon)`
  &::after {
    content: "Sign up";
    font-size: 12px;
    font-weight: 600;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
    opacity: 0;
    transition: 0.5s all 0.1s;
  }
`;

function NavBar({ setLogin, setRegister }) {
  const loggedUser = useSelector(selectLoggedUser);

  return (
    <NavContainer>
      {loggedUser ? (
        <MainMenu />
      ) : (
        <LogInIcon
          onClick={() => setLogin(true)}
          $title="Log in"
          $color="rgb(255, 68, 0)"
        >
          <FontAwesomeIcon icon={faRightToBracket} />
        </LogInIcon>
      )}
      <Logo />
      {loggedUser ? (
        <UserMenu />
      ) : (
        <SignUpIcon
          onClick={() => setRegister(true)}
          $title="Sign up"
          $color="gold"
        >
          <FontAwesomeIcon icon={faUserPlus} />
        </SignUpIcon>
      )}
    </NavContainer>
  );
}

export default NavBar;
