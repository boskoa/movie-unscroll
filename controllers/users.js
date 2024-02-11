const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User, Movie, Genre, Director, Actor } = require("../models");
const { tokenExtractor } = require("../utils/tokenExtractor");

router.get("/:id", tokenExtractor, async (req, res, next) => {
  const sender = await User.findByPk(req.decodedToken.id);

  if (Number(req.params.id) !== req.decodedToken.id && !sender?.admin) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ["passwordHash"] },
      include: [
        { model: Actor, order: [["count", "DESC"]], limit: 5 },
        { model: Director, order: [["count", "DESC"]], limit: 5 },
        { model: Genre, order: [["count", "DESC"]], limit: 5 },
      ],
    });
    return res.status(200).json(user);
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  if (
    !req.body.username ||
    !req.body.name ||
    !req.body.email ||
    !req.body.password
  ) {
    return res.status(401).json({ error: "Missing required data" });
  }

  if (req.body.password.length < 6) {
    return res.status(401).json({ error: "Password is too short" });
  }

  try {
    const passwordHash = await bcrypt.hash(req.body.password, 10);
    const userData = { ...req.body, passwordHash };
    delete userData.password;
    if (userData.admin) delete userData.admin;
    await User.create({ ...userData });
    const newUser = await User.findOne({
      where: { username: userData.username },
      attributes: { exclude: ["passwordHash"] },
    });
    return res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
});

router.patch("/:id", tokenExtractor, async (req, res, next) => {
  const changer = await User.findByPk(req.decodedToken.id);

  if (Number(req.params.id) !== req.decodedToken.id && !changer?.admin) {
    return res.status(401).json({ error: "Not authorized" });
  }

  if (!req.body) {
    return res.status(200).send("Nothing to change");
  }

  try {
    const userToChange = await User.findByPk(req.params.id);
    let newData = { ...req.body };
    if (newData.password) {
      const passwordHash = await bcrypt.hash(newData.password, 10);
      newData.passwordHash = passwordHash;
      delete newData.password;
    }
    userToChange.set(newData);
    await userToChange.save();
    const changedUser = await User.findByPk(req.params.id, {
      attributes: { exclude: ["passwordHash"] },
    });
    return res.status(200).json(changedUser);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", tokenExtractor, async (req, res, next) => {
  const changer = User.findByP(req.decodedToken.id);

  if (!changer?.admin || changer.id !== req.params.id) {
    return res.status(401).json({ error: "Not authorized" });
  }

  try {
    await Movie.destroy({ where: { userId: req.params.id } });
    await Genre.destroy({ where: { userId: req.params.id } });
    await Director.destroy({ where: { userId: req.params.id } });
    await Actor.destroy({ where: { userId: req.params.id } });
    return res.status(200).send("User deleted");
  } catch (error) {
    next(error);
  }
});

module.exports = router;
