const router = require("express").Router();
const axios = require("axios");
const { TMDB_KEY } = require("../utils/config");

router.get("/detailed-movie/:id", async (req, res, next) => {
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${TMDB_KEY}&include_adult=false&append_to_response=credits`,
    );
    return res.status(200).json(movie.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
