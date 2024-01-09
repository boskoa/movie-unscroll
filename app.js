const express = require("express");
const cors = require("cors");
const testRouter = require("./controllers/test");
const randomRouter = require("./controllers/random");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");
const { errorHandler } = require("./utils/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());

//routers
app.use("/api/test", testRouter);
app.use("/api/random", randomRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

app.use(errorHandler);

module.exports = app;
