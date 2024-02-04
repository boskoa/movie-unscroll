const { User, Actor } = require("../models");
const { TMDB_KEY } = require("../utils/config");
const { tokenExtractor } = require("../utils/tokenExtractor");
const axios = require("axios");
const router = require("express").Router();

router.get("/", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);

  if (!user) {
    return res.status(404).send("Not logged in");
  }

  try {
    const actors = await Actor.findAll({ where: { userId: user.id } });
    return res.status(200).json(actors);
  } catch (error) {
    next(error);
  }
});

router.get("/detailed/:id", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  const id = req.params.id;
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  if (!id) {
    return res.status(404).send("No ID");
  }

  try {
    const person = await axios.get(
      `https://api.themoviedb.org/3/person/${id}?api_key=${TMDB_KEY}&append_to_response=credits%2Ccrew&language=en-US&include_adult=false`,
    );
    return res.status(200).json(person.data);
  } catch (error) {
    next(error);
  }
});

router.get("/search", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  const search = req.query.search;
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  if (!search) {
    return res.status(404).send("No search term");
  }

  try {
    const person = await axios.get(
      `https://api.themoviedb.org/3/search/person?query=${search}&api_key=${TMDB_KEY}&language=en-US&include_adult=false&page=1`,
    );
    return res.status(200).json(person.data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
