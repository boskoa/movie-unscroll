const express = require("express");
const cors = require("cors");
const testRouter = require("./controllers/test");
const randomRouter = require("./controllers/random");
const { errorHandler } = require("./utils/errorHandler");

const app = express();

app.use(express.json());
app.use(cors());

//routers
app.use("/api/test", testRouter);
app.use("/api/random", randomRouter);

app.use(errorHandler);

module.exports = app;
