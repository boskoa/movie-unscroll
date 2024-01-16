import styled from "styled-components";
import Rating from "./Rating";
import Sign from "./Sign";

const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 30px;
  gap: 20px;
`;

const Description = styled.p`
  text-shadow: 0 0 5px #fff7c6;
`;

const Text = styled.p`
  font-size: 14px;
  align-self: flex-start;
`;

function Info({ movie }) {
  return (
    <InfoContainer>
      <Description>{movie.overview}</Description>
      <Rating rating={movie.vote_average} />
      <Sign rating={movie.vote_average} votes={movie.vote_count} />
      <Text>
        Release date:{" "}
        {new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }).format(new Date(movie.release_date))}
      </Text>
      <Text>Genres: {movie.genres.map((g) => g.name).join(", ")}</Text>
    </InfoContainer>
  );
}

export default Info;
