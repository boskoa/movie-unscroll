import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/login/loginSlice";

const Icon = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  margin-right: 10px;
  font-size: 20px;
  border: 2px solid ${({ $color }) => $color};
  border-radius: 50%;
  color: ${({ $color }) => $color};
  cursor: pointer;
  box-shadow: ${({ $color, $selected }) =>
    $selected ? `0 0 5px 0 ${$color}` : "none"};
  transition: 0.1s all;

  &:active {
    box-shadow: 0 0 5px 0 ${({ $color }) => $color};
  }
`;

const menuEnter = keyframes`
  from {
    //opacity: 0;
    border-radius: 50px;
    transform: translateY(-100px);
  }
  to {
    //opacity: 1;
    border-radius: 5px;
    transform: translateY(0px);
  }
`;

const MenuContainer = styled.div`
  position: absolute;
  top: 50px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: 100px;
  border: 2px solid ${({ $color }) => $color};
  border-radius: 5px;
  overflow: hidden;
  z-index: -100;
  animation: ${() => css`1s ${menuEnter} infinite both`};
`;

function UserMenu() {
  const [selected, setSelected] = useState(false);
  const menuRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    function handleClick(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setSelected(false);
      }
    }

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Icon
      ref={menuRef}
      $color="gold"
      $selected={selected}
      onClick={() => setSelected((p) => !p)}
    >
      <FontAwesomeIcon icon={faUser} />
      {selected && (
        <MenuContainer $color="gold">
          <button onClick={() => dispatch(logout())}>log out</button>
          <button onClick={() => dispatch(logout())}>log out</button>
        </MenuContainer>
      )}
    </Icon>
  );
}

export default UserMenu;
