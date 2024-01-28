import { useDispatch, useSelector } from "react-redux";
import {
  clearSuggestions,
  getSuggestions,
  selectAllSuggestions,
} from "../suggestionsSlice";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { selectLoggedUser } from "../../login/loginSlice";
import Suggestion from "./Suggestion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import RotorComponent from "../../random/RandomPage/RotorComponent";
import FilmStrip from "./FilmStrip";

const MainContainer = styled.div`
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  opacity: ${({ $loaded }) => ($loaded ? 1 : 0)};
  transition: opacity 1s;
  overflow: hidden;
  transition-delay: 4s;
`;

const Container = styled.div`
  width: 100%;
  min-height: 80vh;
  position: relative;
`;

const SuggestionsContainer = styled.div`
  display: flex;
  width: ${({ $length }) => $length * 100}%;
  transition: all 0.8s;
`;

const Left = styled.button`
  position: absolute;
  top: calc(50% - 13px);
  left: 5px;
  border: none;
  background-color: rgba(255, 0, 0, 0.1);
  color: gold;
  border-radius: 50%;
  padding: 3px;
  height: 30px;
  width: 30px;
  line-height: 100%;
  font-size: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;
`;

const Right = styled.button`
  position: absolute;
  top: calc(50% - 13px);
  right: 5px;
  border: none;
  background-color: rgba(255, 0, 0, 0.1);
  color: gold;
  border-radius: 50%;
  padding: 3px;
  height: 30px;
  width: 30px;
  line-height: 100%;
  font-size: 24px;
  backdrop-filter: blur(10px);
  cursor: pointer;
`;

function Suggestions() {
  const [position, setPosition] = useState(0);
  const [start, setStart] = useState();
  const [end, setEnd] = useState();
  const [count, setCount] = useState(3);
  const [show, setShow] = useState(true);
  const [animate, setAnimate] = useState(false);
  const loggedUser = useSelector(selectLoggedUser);
  const suggestions = useSelector(selectAllSuggestions);
  const suggestionsRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    let index;
    if (loggedUser && !suggestions.length) {
      index = setTimeout(() => dispatch(getSuggestions(loggedUser.token)), 100);
    }

    return () => {
      clearTimeout(index);
      //dispatch(clearSuggestions());
    };
  }, [dispatch, loggedUser, suggestions]);

  useEffect(() => {
    if (suggestionsRef.current) {
      suggestionsRef.current.style.transform = `translateX(${
        position * -(100 / suggestions.length)
      }%)`;
    }
  }, [position, suggestions.length]);

  useEffect(() => {
    const index = setInterval(() => setCount((p) => (p > 0 ? p - 1 : 0)), 1000);
    setAnimate(true);

    return () => clearInterval(index);
  }, []);

  useEffect(() => {
    if (count === 0) {
      setTimeout(() => setShow(false), 1500);
      setAnimate(false);
    }
  }, [count]);

  useLayoutEffect(() => {
    if (suggestions.length && count === 3) {
      setShow(false);
    }
  }, [suggestions, count]);

  return (
    <>
      {show ? <RotorComponent animate={animate} count={count} /> : ""}
      <MainContainer $show={!show} $loaded={suggestions.length}>
        <FilmStrip />
        <Container
          onTouchStart={(e) => {
            setStart(e.targetTouches[0].clientX);
          }}
          onTouchEnd={() => {
            if (start - end > 30) {
              setPosition((p) => (p < suggestions.length - 1 ? p + 1 : 0));
            } else if (start - end < -30) {
              setPosition((p) => (p > 0 ? p - 1 : suggestions.length - 1));
            }
          }}
          onTouchMove={(e) => {
            setEnd(e.targetTouches[0].clientX);
          }}
          onMouseDown={(e) => {
            setStart(e.pageX);
          }}
          onMouseUp={() => {
            if (start - end > 30) {
              setPosition((p) => (p < suggestions.length - 1 ? p + 1 : 0));
            } else if (start - end < -30) {
              setPosition((p) => (p > 0 ? p - 1 : suggestions.length - 1));
            }
          }}
          onMouseMove={(e) => {
            setEnd(e.pageX);
          }}
        >
          <SuggestionsContainer
            ref={suggestionsRef}
            $length={suggestions.length}
          >
            {suggestions.map((s) => (
              <Suggestion key={s.id} movie={s} />
            ))}
          </SuggestionsContainer>
          <Left
            onClick={() => {
              setPosition((p) => (p > 0 ? p - 1 : suggestions.length - 1));
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Left>
          <Right
            onClick={() => {
              setPosition((p) => (p < suggestions.length - 1 ? p + 1 : 0));
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Right>
        </Container>
      </MainContainer>
    </>
  );
}

export default Suggestions;
