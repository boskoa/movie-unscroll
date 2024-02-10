import styled from "styled-components";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { selectAllBookmarks } from "../bookmarksSlice";
import BookmarkedMovie from "./BookmarkedMovie";
import Title from "../../../components/Title";
import { selectLoggedUser } from "../../login/loginSlice";
import NotLogged from "../../../components/NotLogged";
import useIntersectionObserver from "../../../customHooks/useIntersectionObserver";

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

const LIMIT = 5;

function Bookmarks() {
  const loggedUser = useSelector(selectLoggedUser);
  const bookmarks = useSelector(selectAllBookmarks);
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(LIMIT);
  const [stopLoading, setStopLoading] = useState(false);
  const loaderRef = useRef();
  const navigate = useNavigate();
  const intersecting = useIntersectionObserver(loaderRef);

  useEffect(() => {
    if (intersecting && !stopLoading) {
      setOffset((prev) => prev + LIMIT);
    }
  }, [intersecting, stopLoading]);

  useEffect(() => {
    if (offset > bookmarks.length) {
      setStopLoading(true);
    } else {
      setStopLoading(false);
    }
  }, [offset, bookmarks]);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 500);
  }, []);

  useEffect(() => {
    if (!loggedUser) navigate("/");
  }, [loggedUser, navigate]);

  if (!loggedUser) return <NotLogged />;

  if (!bookmarks) return null;

  return (
    <SuperMainContainer $loaded={loaded}>
      <MainContainer>
        <Title style={{ width: "100%" }} text="Bookmarks" />
        <RatedContainer>
          {bookmarks.slice(0, offset).map((r) => (
            <BookmarkedMovie key={r.id} movie={r} />
          ))}
        </RatedContainer>
      </MainContainer>
      <Loader ref={loaderRef} />
    </SuperMainContainer>
  );
}

export default Bookmarks;
