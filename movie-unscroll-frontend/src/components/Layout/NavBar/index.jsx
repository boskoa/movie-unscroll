import styled from "styled-components";
import Logo from "./Logo";

const NavContainer = styled.header`
  position: sticky;
  top: 0;
  background-color: teal;
  height: 50px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  z-index: 100;
`;

function NavBar() {
  return (
    <NavContainer>
      <p>HAI</p>
      <Logo />
      <p>MARK</p>
    </NavContainer>
  );
}

export default NavBar;
