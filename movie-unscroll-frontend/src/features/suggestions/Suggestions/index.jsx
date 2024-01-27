import { useDispatch, useSelector } from "react-redux";
import {
  clearSuggestions,
  getSuggestions,
  selectAllSuggestions,
} from "../suggestionsSlice";
import { useEffect, useRef, useState } from "react";
import { selectLoggedUser } from "../../login/loginSlice";
import Suggestion from "./Suggestion";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const MainContainer = styled.div`
  width: 100%;
  min-height: 90vh;
  overflow: hidden;
  position: relative;
`;

const SuggestionsContainer = styled.div`
  display: flex;
  width: 1000%;
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
  const loggedUser = useSelector(selectLoggedUser);
  const suggestions = useSelector(selectAllSuggestions);
  const suggestionsRef = useRef();
  const dispatch = useDispatch();

  useEffect(() => {
    let index;
    if (loggedUser) {
      index = setTimeout(() => dispatch(getSuggestions(loggedUser.token)), 100);
    }

    return () => {
      clearTimeout(index);
      dispatch(clearSuggestions());
    };
  }, [dispatch, loggedUser]);

  useEffect(() => {
    if (suggestionsRef.current) {
      suggestionsRef.current.style.transform = `translateX(${position * -10}%)`;
    }
  }, [position]);

  return (
    <MainContainer
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
      <SuggestionsContainer ref={suggestionsRef}>
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
    </MainContainer>
  );
}

export default Suggestions;
