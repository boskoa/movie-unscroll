function errorHandler(error, _req, res, next) {
  console.error("ERROR", error.name, error.message);
  res.status(400).json({ error: error.message });
  next();
}

module.exports = { errorHandler };
