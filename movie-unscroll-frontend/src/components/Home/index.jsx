import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Moto from "./Moto";
import Carousel from "./Carousel";

function Home() {
  const loggedUser = useSelector(selectLoggedUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loggedUser) {
      navigate(-1);
    }
  }, [loggedUser, navigate]);

  if (!loggedUser) return null;

  return (
    <div>
      <Moto />
      <Carousel />
    </div>
  );
}

export default Home;
