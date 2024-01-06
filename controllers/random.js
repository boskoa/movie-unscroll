const axios = require("axios");
const router = require("express").Router();
const { TMDB_KEY } = require("../utils/config");

router.get("/", async (_req, res, next) => {
  try {
    const lengthResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&include_adult=false`,
    );
    const page = Math.floor(Math.random() * lengthResponse.data.total_pages);
    const item = Math.floor(Math.random() * 20);

    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&include_adult=false&include_tagline=true&page=${page}`,
    );

    const movieResult = await axios.get(
      `https://api.themoviedb.org/3/movie/${result.data.results[item].id}?api_key=${TMDB_KEY}&include_adult=false`,
    );
    return res.status(200).json(movieResult.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
