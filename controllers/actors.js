const { User, Actor } = require("../models");
const { tokenExtractor } = require("../utils/tokenExtractor");
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

module.exports = router;
