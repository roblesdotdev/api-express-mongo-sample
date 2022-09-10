const express = require("express");
const http = require("http");
const morgan = require("morgan");
const { PORT } = require("./config");

const app = express();

app.use(morgan("tiny"));

app.get("/", (_req, res) => res.send("Working"));

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening at ${server.address().port}`);
});
