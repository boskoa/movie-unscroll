import styled from "styled-components";

const ActorContainer = styled.div`
  width: 150px;
  display: inline-block;
`;

const ActorImage = styled.img`
  width: 100%;
  height: auto;
`;

function Actor({ actor }) {
  return (
    <ActorContainer>
      <ActorImage
        alt={actor.name}
        src={`https://image.tmdb.org/t/p/original/${actor.profile_path}`}
      />
    </ActorContainer>
  );
}

export default Actor;
