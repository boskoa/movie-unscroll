import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/login/loginSlice";
import { Icon, MainIcon, MenuIcon } from "./navbarStyles";
import MainMenuIcon from "./MainMenuIcon";
import { Link } from "react-router-dom";

function MainMenu() {
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
    setTimeout(() => (menuRef.current.style.overflow = "visible"), 1200);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Icon
      ref={menuRef}
      $ml="10px"
      $color2="gold"
      $color="rgb(255, 68, 0)"
      $selected={selected}
      onClick={() => setSelected((p) => !p)}
    >
      <Link to="profile">
        <MenuIcon
          $left="0px"
          $delay="0"
          $selected={selected}
          $color="rgb(255, 68, 0)"
          $color2="#002f2f"
          $color3="gold"
        >
          Profile
        </MenuIcon>
      </Link>
      <MenuIcon
        $left="0px"
        $delay="0.3"
        $selected={selected}
        $color="rgb(255, 68, 0)"
        $color2="#002f2f"
        $color3="gold"
        onClick={() => dispatch(logout())}
      >
        Log out
      </MenuIcon>
      <MainIcon $color="rgb(255, 68, 0)">
        <MainMenuIcon selected={selected} color="gold" />
      </MainIcon>
    </Icon>
  );
}

export default MainMenu;
