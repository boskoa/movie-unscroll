const jwt = require("jsonwebtoken");
const { User } = require("../models");
const bcrypt = require("bcrypt");
const { SECRET } = require("../utils/config");
const router = require("express").Router();

router.post("/", async (req, res, next) => {
  if (!req.body.username || !req.body.password) {
    return res.status(401).json({ error: "Missing credentials" });
  }

  const user = await User.findOne({ where: { username: req.body.username } });
  if (!user) {
    return res.status(401).json({ error: "No such user" });
  }

  try {
    const passwordCorrect = await bcrypt.compare(
      req.body.password,
      user.passwordHash,
    );

    if (!passwordCorrect) {
      return res.status(401).json({ error: "Incorrect password" });
    }

    const userForToken = {
      id: user.id,
      username: user.username,
    };

    const token = jwt.sign(userForToken, SECRET);

    return res.status(200).json({
      ...userForToken,
      token,
      name: user.name,
      email: user.email,
      admin: user.admin,
    });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
