const express = require("express");
const http = require("http");
const morgan = require("morgan");
const { PORT, NODE_ENV } = require("./config");
const getV1Routes = require("./routes/v1");

const app = express();

if (NODE_ENV !== "production") {
  app.use(morgan("tiny"));
}

app.use("/api/v1", getV1Routes());

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server listening at ${server.address().port}`);
});
