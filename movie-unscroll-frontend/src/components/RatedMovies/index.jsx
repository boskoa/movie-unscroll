import styled from "styled-components";
import Title from "../Title";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../features/login/loginSlice";
import NotLogged from "../NotLogged";
import { useCallback, useEffect, useRef, useState } from "react";
import axios from "axios";
import RatedMovie from "./RatedMovie";
import useIntersectionObserver from "../../customHooks/useIntersectionObserver";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import StatisticsModal from "./StatisticsModal";
import StatisticsButton from "./StatisticsButton";

const SuperMainContainer = styled.div`
  max-width: 700px;
  margin: 0 auto;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 0.5s;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 30px;
`;

const RatedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  max-width: 800px;
  min-height: 80vh;
`;

const Loader = styled.div`
  height: 30px;
  width: 100%;
  margin-top: 20px;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 20px;
`;

const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 30px;
  border: 2px solid gold;
  border-radius: 15px;
  cursor: pointer;
  color: gold;
  transform: ${({ $rotate }) => ($rotate ? "rotateZ(180deg)" : "")};
  transition: all 0.1s;

  &:active {
    box-shadow:
      0 0 5px 0 gold,
      0 0 5px 0 gold inset;
  }
`;

const LIMIT = 5;

function RatedMovies() {
  const loggedUser = useSelector(selectLoggedUser);
  const [active, setActive] = useState(false);
  const [ratings, setRatings] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("rating,DESC");
  const [stopLoading, setStopLoading] = useState(false);
  const loaderRef = useRef();
  const navigate = useNavigate();
  const intersecting = useIntersectionObserver(loaderRef);
  const getRatings = useCallback(async (o, token, s, order) => {
    const config = {
      headers: {
        Authorization: `bearer ${token}`,
      },
    };
    try {
      const response = await axios.get(
        `/api/movies/user-ratings?title=${s}&order=${order}&pagination=${o},${LIMIT}`,
        config,
      );
      if (response.data.length === 0) {
        setStopLoading(true);
      } else {
        setRatings((p) => [
          ...p,
          ...response.data.filter(
            (r) => !p.map((entry) => entry.id).includes(r.id),
          ),
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  }, []);

  async function deleteRating(id) {
    const config = {
      headers: {
        Authorization: `bearer ${loggedUser.token}`,
      },
    };
    try {
      await axios.delete(`/api/movies/${id}`, config);
      setRatings((p) => p.filter((m) => m.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (intersecting && !stopLoading) {
      setOffset((prev) => prev + LIMIT);
    }
  }, [intersecting, stopLoading]);

  useEffect(() => {
    if (offset - LIMIT > ratings.length) {
      setStopLoading(true);
    } else {
      setStopLoading(false);
    }
  }, [offset, ratings]);

  useEffect(() => {
    if (loggedUser) {
      if (!search.length) {
        getRatings(offset, loggedUser.token, "", order);
      } else {
        const s = search.split(" ").join("+");
        getRatings(offset, loggedUser.token, s, order);
      }
    }
  }, [loggedUser, offset, getRatings, order, search]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  useEffect(() => {
    if (!loggedUser) navigate("/");
  }, [loggedUser, navigate]);

  useEffect(() => {
    console.log(active);
  }, [active]);

  if (!loggedUser) return <NotLogged />;

  if (!ratings) return null;

  return (
    <SuperMainContainer $loaded={loaded}>
      <MainContainer>
        <Title style={{ width: "100%" }} text="Your ratings" />
        <FilterContainer>
          <Search
            search={search}
            setSearch={setSearch}
            setOffset={setOffset}
            setRatings={setRatings}
          />
          <OrderContainer
            onClick={() => {
              setOrder((p) =>
                p === "rating,DESC" ? "rating,ASC" : "rating,DESC",
              );
              setOffset(0);
              setRatings([]);
            }}
            $rotate={order === "rating,DESC"}
          >
            <FontAwesomeIcon icon={faChevronUp} />
          </OrderContainer>
        </FilterContainer>
        <RatedContainer>
          {ratings.map((r) => (
            <RatedMovie
              key={r.id}
              movie={r}
              user={loggedUser}
              deleteRating={deleteRating}
            />
          ))}
        </RatedContainer>
      </MainContainer>
      <Loader ref={loaderRef} />
      <StatisticsModal active={active} />
      <StatisticsButton setActive={setActive} />
    </SuperMainContainer>
  );
}

export default RatedMovies;
