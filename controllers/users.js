const router = require("express").Router();
const bcrypt = require("bcrypt");
const { User } = require("../models");

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

module.exports = router;
