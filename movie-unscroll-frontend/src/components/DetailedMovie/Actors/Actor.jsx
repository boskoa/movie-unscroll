import styled from "styled-components";

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
  height: 30%;
  width: 100%;
  padding: 5px;
  font-size: 12px;
  font-weight: 600;
  background-color: rgba(255, 215, 0, 0.3);
  color: black;
  transform: translateY(101%);
  backdrop-filter: blur(5px);
  transition: all 0.5s;

  @media (hover: none) {
    transform: translate(0);
  }
`;

function Actor({ actor, elementWidth }) {
  return (
    <ActorContainer $width={elementWidth}>
      <ActorImage
        draggable="false"
        alt={actor.name}
        src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
      />
      <ActorDataContainer>
        <ActorData>
          <p>{actor.name}</p>
          <p>
            <i>as {actor.character}</i>
          </p>
        </ActorData>
      </ActorDataContainer>
    </ActorContainer>
  );
}

export default Actor;
