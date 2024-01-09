const jwt = require("jsonwebtoken");
const { SECRET } = require("./config");

function tokenExtractor(req, res, next) {
  const authorization = req.get("Authorization");

  if (authorization && authorization.toLowerCase().startsWith("bearer")) {
    try {
      const token = authorization.substring(7);
      req.decodedToken = jwt.verify(token, SECRET);
    } catch {
      res.status(401).json({ error: "Invalid token" });
    }
  } else {
    res.status(401).json({ error: "Missing token" });
  }

  next();
}

module.exports = { tokenExtractor };
