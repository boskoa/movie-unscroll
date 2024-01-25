const router = require("express").Router();
const axios = require("axios");
const { TMDB_KEY } = require("../utils/config");
const { tokenExtractor } = require("../utils/tokenExtractor");
const { User, Movie, Director, Genre, Actor } = require("../models");

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

router.get("/user-ratings", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  let pagination = {};
  if (req.query.pagination) {
    const [offset, limit] = req.query.pagination.split(",");
    pagination = { offset, limit };
  }

  try {
    const ratings = await Movie.findAll({
      where: { userId: user.id },
      ...pagination,
    });
    return res.status(200).json(ratings);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);

  if (!user) {
    return res.status(400).json({ error: "No user" });
  }

  try {
    const rating = await Movie.findOne({ where: { tmdbId: req.params.id } });
    return res.status(200).json(rating);
  } catch (error) {
    next(error);
  }
});

router.post("/", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  const existing = await Movie.findOne({ where: { tmdbId: req.body.tmdbId } });

  if (existing) {
    return res.status(400).json({ error: "Already existing entry" });
  }

  if (!user) {
    return res.status(400).json({ error: "No user" });
  }

  try {
    const rating = await Movie.create({ ...req.body });
    return res.status(200).json(rating);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);

  if (!req.body) {
    return res.status(200).send("Nothing to change");
  }

  if (!user) {
    return res.status(400).json({ error: "No user" });
  }

  try {
    const rating = await Movie.findOne({ where: { tmdbId: req.params.id } });
    rating.set({ ...req.body });
    await rating.save();
    return res.status(200).json(rating);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);

  if (!user) {
    return res.status(400).json({ error: "Not authorized" });
  }

  try {
    const [movie, tmdb] = await Promise.all([
      Movie.findByPk(req.params.id),
      axios.get(
        `https://api.themoviedb.org/3/movie/${req.params.id}?api_key=${TMDB_KEY}&include_adult=false&append_to_response=credits`,
      ),
    ]);
    console.log("FOOOOOOOOOOOOOOOOO", movie.rating, tmdb.data);
    /* await Director.destroy({ where: { tmdbId: rating.tmdbId } });
    await Genre.destroy({ where: { tmdbId: rating.tmdbId } });
    await Actor.destroy({ where: { tmdbId: rating.tmdbId } });
    await movie.destroy();
    return res.status(200).send(req.params.id);
    */
  } catch (error) {
    next(error);
  }
});

module.exports = router;
