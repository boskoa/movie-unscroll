const express = require("express");
const cors = require("cors");
const path = require("path");
const testRouter = require("./controllers/test");
const randomRouter = require("./controllers/random");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const avatarsRouter = require("./controllers/avatars");
const moviesRouter = require("./controllers/movies");
const { errorHandler } = require("./utils/errorHandler");

const app = express();

process.on("uncaughtException", function (err) {
  console.log(err);
});

app.use(express.json());
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.static("dist"));

//routers
app.use("/api/test", testRouter);
app.use("/api/random", randomRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);
app.use("/api/avatars", avatarsRouter);
app.use("/api/movies", moviesRouter);

app.all("/*", (_req, res) => {
  res.sendFile(path.join(__dirname, "dist", "index.html"));
});

app.use(errorHandler);

module.exports = app;
