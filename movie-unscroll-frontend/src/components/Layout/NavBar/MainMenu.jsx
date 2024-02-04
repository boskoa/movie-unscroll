import { useEffect, useRef, useState } from "react";
import { Icon, MainIcon, MenuIcon } from "./navbarStyles";
import MainMenuIcon from "./MainMenuIcon";
import { Link } from "react-router-dom";

function MainMenu() {
  const [selected, setSelected] = useState(false);
  const menuRef = useRef();

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
      <Link to="home">
        <MenuIcon
          $left="0px"
          $delay="0"
          $selected={selected}
          $color="rgb(255, 68, 0)"
          $color2="#002f2f"
          $color3="gold"
        >
          Home
        </MenuIcon>
      </Link>
      <Link to="suggestions">
        <MenuIcon
          $left="0px"
          $delay="0.3"
          $selected={selected}
          $color="rgb(255, 68, 0)"
          $color2="#002f2f"
          $color3="gold"
        >
          Custom
        </MenuIcon>
      </Link>
      <Link to="movie-search">
        <MenuIcon
          $left="0px"
          $delay="0.6"
          $selected={selected}
          $color="rgb(255, 68, 0)"
          $color2="#002f2f"
          $color3="gold"
        >
          Movies
        </MenuIcon>
      </Link>
      <Link to="detailed-person">
        <MenuIcon
          $left="0px"
          $delay="0.9"
          $selected={selected}
          $color="rgb(255, 68, 0)"
          $color2="#002f2f"
          $color3="gold"
        >
          People
        </MenuIcon>
      </Link>
      <MainIcon $color="rgb(255, 68, 0)">
        <MainMenuIcon selected={selected} color="#002f2f" />
      </MainIcon>
    </Icon>
  );
}

export default MainMenu;
