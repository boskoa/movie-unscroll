const app = require("./app");
const { PORT } = require("./utils/config");

function start() {
  app.listen(PORT, function () {
    console.log("Server is running on port", PORT);
  });
}

start();
