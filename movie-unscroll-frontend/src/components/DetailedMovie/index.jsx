import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Title from "../Title";
import MainInfo from "./MainInfo";
import Actors from "./Actors";

const DetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  max-width: 800px;
  margin: 0 auto;
  gap: 30px;
  padding-bottom: 20px;
  opacity: ${({ $loaded }) => ($loaded ? "1" : "0")};
  transition: all 0.5s;
  //transition-delay: 2s;

  @media only screen and (max-width: 600px) {
    overflow: hidden;
  }
`;

function DetailedMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    async function getMovie(movieId) {
      const response = await axios.get(`/api/movies/detailed-movie/${movieId}`);
      setMovie(response.data);
    }
    if (id) {
      getMovie(id);
    }
  }, [id]);

  if (!movie) return null;

  return (
    <DetailedContainer $loaded={imageLoaded}>
      <Title text={movie.title} />
      <MainInfo movie={movie} setImageLoaded={setImageLoaded} />
      <Actors actors={movie.credits.cast.slice(0, 10)} />
    </DetailedContainer>
  );
}

export default DetailedMovie;
