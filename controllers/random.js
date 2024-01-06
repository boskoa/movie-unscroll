const axios = require("axios");
const router = require("express").Router();
const { TMDB_KEY } = require("../utils/config");

router.get("/", async (_req, res, next) => {
  try {
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/551?api_key=${TMDB_KEY}`,
    );
    console.log("RESULT", result.data);
    return res.status(200).json(result.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
