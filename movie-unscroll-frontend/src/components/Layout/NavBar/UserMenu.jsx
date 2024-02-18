import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../../features/login/loginSlice";
import { Icon, MainIcon, MenuIcon, UserIcon } from "./navbarStyles";
import { Link, useNavigate } from "react-router-dom";
import user from "../../../assets/user.svg";

function UserMenu({ id }) {
  const [selected, setSelected] = useState(false);
  const menuRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
      <Link to="user-settings">
        <MenuIcon
          $right="0px"
          $delay="0"
          $selected={selected}
          $color="gold"
          $color2="#002f2f"
          $color3="rgb(255, 68, 0)"
        >
          Profile
        </MenuIcon>
      </Link>
      <Link to="rated-movies">
        <MenuIcon
          $right="0px"
          $delay="0.3"
          $selected={selected}
          $color="gold"
          $color2="#002f2f"
          $color3="rgb(255, 68, 0)"
        >
          Ratings
        </MenuIcon>
      </Link>
      <Link to="bookmarks">
        <MenuIcon
          $right="0px"
          $delay="0.6"
          $selected={selected}
          $color="gold"
          $color2="#002f2f"
          $color3="rgb(255, 68, 0)"
        >
          Bookmarks
        </MenuIcon>
      </Link>
      <MenuIcon
        $right="0px"
        $delay="0.9"
        $selected={selected}
        $color="gold"
        $color2="#002f2f"
        $color3="rgb(255, 68, 0)"
        onClick={() => {
          dispatch(logout());
          window.localStorage.removeItem("loggedMovieUnscroll");
          navigate("/");
        }}
      >
        Log out
      </MenuIcon>
      <MainIcon $color="gold">
        <UserIcon
          src={`/public/uploads/avatars/${id}.webp`}
          alt="user avatar"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = user;
          }}
          height="100%"
          width="100%"
        />
      </MainIcon>
    </Icon>
  );
}

export default UserMenu;
