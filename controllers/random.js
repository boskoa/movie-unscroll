const axios = require("axios");
const router = require("express").Router();
const { TMDB_KEY } = require("../utils/config");
const { User, Actor, Director, Genre, Movie } = require("../models");
const { tokenExtractor } = require("../utils/tokenExtractor");
const { Op } = require("sequelize");

router.get("/", async (_req, res, next) => {
  try {
    const lengthResponse = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&include_adult=false`,
    );
    const page = Math.floor(
      Math.random() * (lengthResponse.data.total_pages / 2),
    );
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

router.get("/personalized", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);

  if (!user) {
    return res.status(400).json({ error: "Not logged in" });
  }

  const actors = await Actor.findAll({
    where: { userId: user.id, count: { [Op.gt]: 0 } },
    order: [["count", "DESC"]],
    limit: 10,
  });
  const randomActor = actors.length
    ? actors[Math.floor(Math.random() * actors.length)]
    : null;

  const directors = await Director.findAll({
    where: { userId: user.id, count: { [Op.gt]: 0 } },
    order: [["count", "DESC"]],
    limit: 10,
  });
  const randomDirector = directors.length
    ? directors[Math.floor(Math.random() * directors.length)]
    : null;

  const genres = (
    await Genre.findAll({
      where: { userId: user.id, count: { [Op.gt]: 0 } },
      order: [["count", "DESC"]],
      limit: 5,
      attributes: ["tmdbId"],
      raw: true,
    })
  ).map((g) => g?.tmdbId);

  let all = [];

  const watched = (
    await Movie.findAll({ attributes: ["tmdbId"], raw: true })
  ).map((m) => m.tmdbId);

  try {
    if (randomActor) {
      const actorMoviesResponse = await axios.get(
        `https://api.themoviedb.org/3/person/${randomActor.tmdbId}/movie_credits?api_key=${TMDB_KEY}`,
      );
      all = all.concat(
        actorMoviesResponse.data.cast.filter(
          (m) => m.character !== "Self" && !watched.includes(m.id),
        ),
      );
    }

    if (randomDirector) {
      const directorMoviesResponse = await axios.get(
        `https://api.themoviedb.org/3/person/${randomDirector.tmdbId}/movie_credits?api_key=${TMDB_KEY}`,
      );
      all = all.concat(
        directorMoviesResponse.data.crew.filter(
          (m) => m.job !== "Director" && !watched.includes(m.id),
        ),
      );
    }

    /* eslint-disable indent */
    let filteredAllIds = all.length
      ? [
          ...new Set(
            all
              .filter((m) => m.genre_ids.some((g) => genres.includes(g)))
              .map((m) => m.id),
          ),
        ]
          .sort(() => Math.random() - 0.5)
          .slice(0, 7)
      : [];
    /* eslint-enable indent */

    const topRandomLength = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&include_adult=false`,
    );
    const page = Math.floor(
      Math.random() * (topRandomLength.data.total_pages / 2),
    );

    const topRandomTen = (
      await axios.get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&include_adult=false&page=${page}`,
      )
    ).data.results
      .filter((m) => !watched.includes(m.id))
      .slice(0, 10)
      .map((m) => m.id);

    let allIds = [
      topRandomTen[0],
      ...filteredAllIds,
      ...topRandomTen.slice(1, -filteredAllIds.length),
    ];

    let axiosRequests = allIds.map((id) =>
      axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${TMDB_KEY}&include_adult=false`,
      ),
    );

    const final = (await axios.all([...axiosRequests])).map((f) => f.data);

    return res.status(200).json(final);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
