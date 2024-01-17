import styled from "styled-components";

const ActorContainer = styled.div`
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

function Actor({ actor, elementWidth }) {
  return (
    <ActorContainer $width={elementWidth}>
      <ActorImage
        draggable="false"
        alt={actor.name}
        src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
      />
    </ActorContainer>
  );
}

export default Actor;
