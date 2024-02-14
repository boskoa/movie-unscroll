import styled from "styled-components";
import actorLogo from "../../../assets/actor.jpg";
import actressLogo from "../../../assets/actress.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectLoggedUser } from "../../../features/login/loginSlice";

const ActorContainer = styled.div`
  position: relative;
  width: ${({ $width }) => $width / 5}px;
  flex-shrink: 0;
  display: inline-block;
  padding: 5px;

  @media only screen and (max-width: 600px) {
    width: ${({ $width }) => $width / 3}px;
  }

  @media only screen and (max-width: 400px) {
    width: ${({ $width }) => $width / 2}px;
  }
`;

const ActorImage = styled.img`
  width: 100%;
  height: auto;
  user-select: none;
`;

const ActorDataContainer = styled.div`
  position: absolute;
  top: 5px;
  left: 5px;
  height: calc(100% - 17px);
  width: calc(100% - 10px);
  overflow: hidden;

  &:hover > div {
    transform: translate(0);
  }
`;

const ActorData = styled.div`
  position: absolute;
  top: 70%;
  left: 0;
  height: 31%;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 2px;
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  background-color: rgba(255, 215, 0, 0.3);
  color: black;
  transform: translateY(101%);
  backdrop-filter: blur(5px);
  transition: all 0.5s;

  @media (hover: none) {
    transform: translate(0);
  }
`;

export const ActorLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

function Actor({ actor, elementWidth }) {
  const loggedUser = useSelector(selectLoggedUser);

  return (
    <ActorContainer $width={elementWidth}>
      <ActorImage
        draggable="false"
        alt={actor.name}
        src={`https://image.tmdb.org/t/p/w185/${actor.profile_path}`}
        onError={(e) => {
          e.currentTarget.onerror = null;
          e.currentTarget.src = actor.gender === 1 ? actressLogo : actorLogo;
        }}
      />
      <ActorDataContainer>
        <ActorData>
          {loggedUser ? (
            <ActorLink to={`/detailed-person/${actor.id}`}>
              {actor.name}
            </ActorLink>
          ) : (
            <p>{actor.name}</p>
          )}
          <p style={{ fontWeight: 400 }}>
            {actor.character && <i>as {actor.character}</i>}
          </p>
        </ActorData>
      </ActorDataContainer>
    </ActorContainer>
  );
}

export default Actor;
