const router = require("express").Router();
const axios = require("axios");
const { TMDB_KEY } = require("../utils/config");
const { tokenExtractor } = require("../utils/tokenExtractor");
const { User, Movie, Director, Genre, Actor } = require("../models");
const { Op } = require("sequelize");

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
    const movie = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${search}&api_key=${TMDB_KEY}&language=en-US&include_adult=false&page=1`,
    );
    return res.status(200).json(movie.data);
  } catch (error) {
    next(error);
  }
});

router.post("/discover", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);

  if (!user) {
    return res.status(404).send("Not logged in");
  }

  let language = req.body.language
    ? `with_original_language=${req.body.language}`
    : "";
  let releaseGte = req.body.releaseGte
    ? `release_date.gte=${req.body.releaseGte}`
    : "";
  let releaseLte = req.body.releaseLte
    ? `release_date.lte=${req.body.releaseLte}`
    : "";
  let sortBy = req.body.sortBy ? `sort_by=${req.body.sortBy}` : "";
  let voteAverageGte = req.body.voteAverageGte
    ? `vote_average.gte=${req.body.voteAverageGte}`
    : "";
  let voteAverageLte = req.body.voteAverageLte
    ? `vote_average.lte=${req.body.voteAverageLte}`
    : "";
  let voteCountGte = req.body.voteCountGte
    ? `vote_count.gte=${req.body.voteCountGte}`
    : "";
  let voteCountLte = req.body.voteCountLte
    ? `vote_count.lte=${req.body.voteCountLte}`
    : "";
  let cast = req.body.cast ? `with_cast=${req.body.cast}` : "";
  let crew = req.body.crew ? `with_crew=${req.body.crew}` : "";
  let genre = req.body.genre ? `with_genres=${req.body.genre}` : "";
  let noGenre = req.body.noGenre ? `without_genres=${req.body.noGenre}` : "";

  let query = [
    language,
    releaseGte,
    releaseLte,
    sortBy,
    voteAverageGte,
    voteAverageLte,
    voteCountGte,
    voteCountLte,
    cast,
    crew,
    genre,
    noGenre,
  ]
    .filter((i) => i.length)
    .join("&");
  query = query.length > 0 ? query + "&" : query;
  try {
    const movie = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?${query}language=en-US&include_video=false&include_adult=false&api_key=${TMDB_KEY}&page=${req.query.page}`,
    );
    return res.status(200).json(movie.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/user-ratings", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  let where = { userId: user.id };
  if (req.query.title) {
    where = {
      ...where,
      title: { [Op.iLike]: `%${req.query.title.split("+").join(" ")}%` },
    };
  }

  let pagination = {};
  if (req.query.pagination) {
    const [offset, limit] = req.query.pagination.split(",");
    pagination = { offset, limit };
  }

  let order = [];
  if (req.query.order) {
    const [field, criterium] = req.query.order.split(",");
    order = [
      [field, criterium],
      ["id", "ASC"],
    ];
  }

  try {
    const ratings = await Movie.findAll({
      where,
      ...pagination,
      order,
    });
    return res.status(200).json(ratings);
  } catch (error) {
    next(error);
  }
});

router.get("/trending", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  let page = req.query.page;

  try {
    const trending = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${TMDB_KEY}&include_adult=false&page=${page}`,
    );
    return res.status(200).json(trending.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/theaters", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  let page = req.query.page;

  try {
    const theaters = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_KEY}&include_adult=false?language=en-US&region=US&page=${page}`,
    );
    return res.status(200).json(theaters.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/popular", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  let page = req.query.page;

  try {
    const popular = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_KEY}&include_adult=false?language=en-US&page=${page}`,
    );
    return res.status(200).json(popular.data.results);
  } catch (error) {
    next(error);
  }
});

router.get("/top-rated", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  let page = req.query.page;

  try {
    const top = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${TMDB_KEY}&include_adult=false?language=en-US&page=${page}`,
    );
    return res.status(200).json(top.data.results);
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
    const movie = await Movie.create({ ...req.body });
    const tmdbQuery = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${TMDB_KEY}&include_adult=false&append_to_response=credits`,
    );
    const tmdb = tmdbQuery.data;

    const directors = tmdb.credits.crew.filter((c) => c.job === "Director");

    for (const d of directors) {
      const director = await Director.findOne({ where: { tmdbId: d.id } });
      if (!director) {
        await Director.create({
          tmdbId: d.id,
          name: d.name,
          count: req.body.rating > 6 ? 1 : req.body.rating < 5 ? -1 : 0,
          userId: user.id,
        });
      } else {
        if (req.body.rating > 6) {
          await director.increment("count");
        } else if (req.body.rating < 5) {
          await director.decrement("count");
        }
      }
    }

    const genres = tmdb.genres;

    for (const g of genres) {
      const genre = await Genre.findOne({ where: { tmdbId: g.id } });
      if (!genre) {
        await Genre.create({
          tmdbId: g.id,
          name: g.name,
          count: req.body.rating > 6 ? 1 : req.body.rating < 5 ? -1 : 0,
          userId: user.id,
        });
      } else {
        if (req.body.rating > 6) {
          await genre.increment("count");
        } else if (req.body.rating < 5) {
          await genre.decrement("count");
        }
      }
    }

    const actors = tmdb.credits.cast.slice(0, 5);

    for (const a of actors) {
      const actor = await Actor.findOne({ where: { tmdbId: a.id } });
      if (!actor) {
        await Actor.create({
          tmdbId: a.id,
          name: a.name,
          count: req.body.rating > 6 ? 1 : req.body.rating < 5 ? -1 : 0,
          userId: user.id,
        });
      } else {
        if (req.body.rating > 6) {
          await actor.increment("count");
        } else if (req.body.rating < 5) {
          await actor.decrement("count");
        }
      }
    }

    return res.status(200).json(movie);
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
    const movie = await Movie.findOne({ where: { tmdbId: req.params.id } });

    const tmdbQuery = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${TMDB_KEY}&include_adult=false&append_to_response=credits`,
    );
    const tmdb = tmdbQuery.data;

    let change = 0;

    if (movie.rating > 6) {
      if (req.body.rating < 5) {
        change -= 2;
      } else if (req.body.rating <= 6) {
        change--;
      }
    } else if (movie.rating < 5) {
      if (req.body.rating > 6) {
        change += 2;
      } else if (req.body.rating >= 5) {
        change++;
      }
    } else {
      if (req.body.rating > 6) {
        change++;
      } else if (req.body.rating < 5) {
        change--;
      }
    }

    if (movie.rating !== req.body.rating) {
      await Director.increment("count", {
        by: change,
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.credits.crew
              .filter((c) => c.job === "Director")
              .map((d) => d.id),
          },
        },
      });

      await Genre.increment("count", {
        by: change,
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.genres.map((g) => g.id),
          },
        },
      });

      await Actor.increment("count", {
        by: change,
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.credits.cast.slice(0, 5).map((a) => a.id),
          },
        },
      });
    }

    movie.set({ ...req.body });
    await movie.save();
    return res.status(200).json(movie);
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
    const movie = await Movie.findByPk(req.params.id);
    const tmdbQuery = await axios.get(
      `https://api.themoviedb.org/3/movie/${movie.tmdbId}?api_key=${TMDB_KEY}&include_adult=false&append_to_response=credits`,
    );
    const tmdb = tmdbQuery.data;

    if (movie.rating > 6) {
      await Director.decrement("count", {
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.credits.crew
              .filter((c) => c.job === "Director")
              .map((d) => d.id),
          },
        },
      });
    } else if (movie.rating < 5) {
      await Director.increment("count", {
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.credits.crew
              .filter((c) => c.job === "Director")
              .map((d) => d.id),
          },
        },
      });
    }

    if (movie.rating > 6) {
      await Genre.decrement("count", {
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.genres.map((g) => g.id),
          },
        },
      });
    } else if (movie.rating < 5) {
      await Genre.increment("count", {
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.genres.map((g) => g.id),
          },
        },
      });
    }

    if (movie.rating > 6) {
      await Actor.decrement("count", {
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.credits.cast.slice(0, 5).map((a) => a.id),
          },
        },
      });
    } else if (movie.rating < 5) {
      await Actor.increment("count", {
        where: {
          userId: user.id,
          tmdbId: {
            [Op.in]: tmdb.credits.cast.slice(0, 5).map((a) => a.id),
          },
        },
      });
    }

    await movie.destroy();
    return res.status(200).send(req.params.id);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
