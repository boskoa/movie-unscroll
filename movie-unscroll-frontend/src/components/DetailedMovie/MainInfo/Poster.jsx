import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import {
  faBookmark as faBookmarkSolid,
  faFilm,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { selectLoggedUser } from "../../../features/login/loginSlice";
import {
  addBookmark,
  removeBookmark,
  selectBookmarkById,
} from "../../../features/bookmarks/bookmarksSlice";

const PosterContainer = styled.div`
  position: relative;
  padding: 30px 20px;
`;

const Image = styled.img`
  position: relative;
  width: 260px;
  z-index: 1;
  filter: sepia(0.5);
`;

const Glow = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  filter: blur(30px) sepia(0.5);
`;

const Bookmark = styled.button`
  all: unset;
  position: absolute;
  top: 40px;
  left: 30px;
  z-index: 2;
  cursor: pointer;
`;

const Trailer = styled.button`
  all: unset;
  position: absolute;
  top: 40px;
  right: 30px;
  z-index: 2;
  cursor: pointer;
`;

function Poster({ movie, setImageLoaded, setTrailer }) {
  const loggedUser = useSelector(selectLoggedUser);
  const bookmarked = useSelector((state) =>
    selectBookmarkById(state, movie.id),
  );
  const dispatch = useDispatch();

  return (
    <PosterContainer>
      {loggedUser && (
        <Bookmark
          type="button"
          title="Bookmark this movie"
          onClick={() =>
            bookmarked
              ? dispatch(
                  removeBookmark({
                    token: loggedUser.token,
                    id: bookmarked.id,
                  }),
                )
              : dispatch(
                  addBookmark({
                    token: loggedUser.token,
                    id: movie.id,
                    name: movie.title,
                  }),
                )
          }
        >
          <FontAwesomeIcon
            icon={bookmarked ? faBookmarkSolid : faBookmark}
            style={{ fontSize: 20, color: "gold" }}
          />
        </Bookmark>
      )}
      <Trailer
        type="button"
        title="Watch trailer"
        onClick={() => setTrailer(true)}
      >
        <FontAwesomeIcon
          icon={faFilm}
          style={{ fontSize: 20, color: "gold" }}
        />
      </Trailer>
      <Glow
        alt="poster glow"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        onError={(e) => (e.currentTarget.alt = "")}
      />
      <Image
        alt="poster"
        src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
        onError={(e) => {
          e.currentTarget.alt = "No poster for this movie...";
          setImageLoaded(true);
        }}
        onLoad={() => setImageLoaded(true)}
      />
    </PosterContainer>
  );
}

export default Poster;
