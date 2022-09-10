const express = require("express");
const getBootcampRoutes = require("./bootcamps");

function getV1Routes() {
  const router = express.Router();

  router.use("/bootcamps", getBootcampRoutes());

  return router;
}

module.exports = getV1Routes;
