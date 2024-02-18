import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Title from "../Title";
import MainInfo from "./MainInfo";
import Actors from "./Actors";
import ProductionDetails from "./ProductionDetails";
import TrailerModal from "./TrailerModal";

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

  @media only screen and (max-width: 600px) {
    overflow: hidden;
  }
`;

function DetailedMovie() {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [error, setError] = useState();
  const [trailer, setTrailer] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
    <DetailedContainer data-testid="detailed" $loaded={imageLoaded}>
      <Title text={movie.title} style={{ margin: "0 50px" }} />
      <MainInfo
        movie={movie}
        setImageLoaded={setImageLoaded}
        setTrailer={setTrailer}
      />
      <Actors actors={movie.credits.cast.slice(0, 10)} />
      <ProductionDetails movie={movie} />
      {trailer && movie.videos.results.length > 0 && (
        <TrailerModal
          video={movie.videos.results[movie.videos.results.length - 1]}
          setTrailer={setTrailer}
        />
      )}
    </DetailedContainer>
  );
}

export default DetailedMovie;
