import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Title from "../Title";
import MainInfo from "./MainInfo";
import Actors from "./Actors";
import ProductionDetails from "./ProductionDetails";

const DetailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  max-width: 800px;
  margin: 0 auto;
  gap: 40px;
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
  const [error, setError] = useState();
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    async function getMovie(movieId) {
      try {
        const response = await axios.get(
          `/api/movies/detailed-movie/${movieId}`,
        );
        setMovie(response.data);
      } catch (error) {
        setError(error.response.status);
      }
    }
    if (id) {
      getMovie(id);
    }
  }, [id]);

  if (error === 400) return "No entry with that ID.";

  if (!movie) return null;

  return (
    <DetailedContainer $loaded={imageLoaded}>
      <Title text={movie.title} />
      <MainInfo movie={movie} setImageLoaded={setImageLoaded} />
      <Actors actors={movie.credits.cast.slice(0, 10)} />
      <ProductionDetails movie={movie} />
    </DetailedContainer>
  );
}

export default DetailedMovie;