const router = require("express").Router();
const axios = require("axios");
const { tokenExtractor } = require("../utils/tokenExtractor");
const { User } = require("../models");
const { Bookmark } = require("../models/bookmark");

router.get("/", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  try {
    const bookmarks = await Bookmark.findAll({ where: { userId: user.id } });
    return res.status(200).json(bookmarks);
  } catch (error) {
    next(error);
  }
});

router.post("/", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  const existingBookmark = await Bookmark.findOne({
    where: { name: req.body.name },
  });
  if (!user) {
    return res.status(404).send("Not logged in");
  }
  if (existingBookmark) {
    return res.status(400).send("Already bookmarked");
  }

  try {
    const bookmark = await Bookmark.create({
      tmdbId: req.body.tmdbId,
      name: req.body.name,
      userId: user.id,
    });
    return res.status(200).json(bookmark);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", tokenExtractor, async (req, res, next) => {
  const user = await User.findByPk(req.decodedToken.id);
  const bookmark = await Bookmark.findByPk(req.params.id);
  const tmdbId = bookmark.tmdbId + "";
  if (!user) {
    return res.status(404).send("Not logged in");
  }

  if (!bookmark) {
    return res.status(404).send("No such bookmark");
  }

  try {
    await bookmark.destroy();
    return res.status(200).send(tmdbId);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
