const express = require("express");
const cors = require("cors");
const testRouter = require("./controllers/test");

const app = express();

app.use(express.json());
app.use(cors());

//routers
app.use("/api/test", testRouter);

module.exports = app;
