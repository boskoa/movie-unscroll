import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/login/loginSlice";
import { Icon, MainIcon, MenuIcon } from "./navbarStyles";
import { Link } from "react-router-dom";

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
    setTimeout(() => (menuRef.current.style.overflow = "visible"), 1200);

    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <Icon
      ref={menuRef}
      $mr="10px"
      $color="gold"
      $color2="#002f2f"
      $selected={selected}
      onClick={() => setSelected((p) => !p)}
    >
      <Link to="profile">
        <MenuIcon
          $right="0px"
          $delay="0"
          $selected={selected}
          $color="gold"
          $color2="#002f2f"
          $color3="rgb(255, 68, 0)"
          onClick={() => dispatch(logout())}
        >
          Profile
        </MenuIcon>
      </Link>
      <MenuIcon
        $right="0px"
        $delay="0.3"
        $selected={selected}
        $color="gold"
        $color2="#002f2f"
        $color3="rgb(255, 68, 0)"
        onClick={() => dispatch(logout())}
      >
        Log out
      </MenuIcon>
      <MainIcon $color="rgb(255, 68, 0)" $color2="gold">
        <FontAwesomeIcon icon={faUser} />
      </MainIcon>
    </Icon>
  );
}

export default UserMenu;

/* <svg
  style={{ display: "none" }}
  xmlns="http://www.w3.org/2000/svg"
  version="1.1"
>
  <defs>
    <filter id="goo">
      <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
        result="goo"
      />
      <feBlend in="SourceGraphic" in2="goo" />
    </filter>
  </defs>
</svg>; */
