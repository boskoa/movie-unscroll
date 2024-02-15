import { useDispatch, useSelector } from "react-redux";
import {
  clearSuggestions,
  getSuggestions,
  selectAllSuggestions,
  selectSuggestionsLoading,
} from "../suggestionsSlice";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { selectLoggedUser } from "../../login/loginSlice";
import Suggestion from "./Suggestion";
import styled, { css, keyframes } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import RotorComponent from "../../random/RandomPage/RotorComponent";
import FilmStrip from "./FilmStrip";

const appear = keyframes`
  to {
    opacity: 1;
  }
`;

const MainContainer = styled.div`
  display: ${({ $show }) => (!$show ? "none" : "flex")};
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 90vh;
  opacity: 0;
  animation: ${() => css`
    ${appear} 1s ease-in forwards
  `};
  overflow: hidden;
  padding-bottom: 50px;
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
  position: fixed;
  top: calc(50vh - 13px);
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
  position: fixed;
  top: calc(50vh - 13px);
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

const RefetchButton = styled.button`
  position: absolute;
  bottom: 10px;
  left: calc(50vw - 60px);
  width: 120px;
  color: gold;
  background-color: inherit;
  border: 2px solid gold;
  border-radius: 5px;
  padding: 3px;
  cursor: pointer;
  transition: all 0.1s;

  &:active {
    box-shadow:
      0 0 5px 0 gold,
      0 0 5px 0 gold inset;
  }
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
  const loading = useSelector(selectSuggestionsLoading);
  const suggestionsRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    let index;
    if (loggedUser && !suggestions.length) {
      index = setTimeout(() => dispatch(getSuggestions(loggedUser.token)), 100);
    }

    return () => {
      clearTimeout(index);
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
    if (count === 0 && !loading) {
      setTimeout(() => setShow(false), 1500);
      setAnimate(false);
    }
  }, [count, loading]);

  useLayoutEffect(() => {
    if (suggestions.length && count === 3) {
      setShow(false);
    }
  }, [suggestions, count]);

  return (
    <>
      {show ? <RotorComponent animate={animate} count={count} /> : ""}
      <MainContainer $show={!show && !loading} $loaded={!show}>
        <FilmStrip
          ids={suggestions.map((s) => s.id)}
          position={position}
          setPosition={setPosition}
        />
        <Container
          onTouchStart={(e) => {
            setStart(e.targetTouches[0].clientX);
            setEnd(e.targetTouches[0].clientX);
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
            aria-label="left button"
            onClick={() => {
              setPosition((p) => (p > 0 ? p - 1 : suggestions.length - 1));
            }}
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </Left>
          <Right
            aria-label="right button"
            onClick={() => {
              setPosition((p) => (p < suggestions.length - 1 ? p + 1 : 0));
            }}
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </Right>
          <RefetchButton
            onClick={() => {
              setShow(true);
              setCount(3);
              setAnimate(true);
              setPosition(0);
              dispatch(clearSuggestions());
            }}
          >
            Another batch
          </RefetchButton>
        </Container>
      </MainContainer>
    </>
  );
}

export default Suggestions;
