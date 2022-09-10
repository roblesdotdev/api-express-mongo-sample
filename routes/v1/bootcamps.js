const express = require("express");

function getBootcampRoutes() {
  const router = express.Router();

  router.get("/", getAllBootcamps);
  router.post("/", createBootcamp);
  router.get("/:id", getBootcamp);
  router.put("/:id", updateBootcamp);
  router.delete("/:id", deleteBootcamp);

  return router;
}

/* CONTROLLERS */

function getAllBootcamps(_req, res) {
  res.send({ data: "All bootcamps" });
}

function createBootcamp(_req, res) {
  res.send({ data: "Create bootcamp" });
}

function getBootcamp(req, res) {
  res.send({ data: `Get single bootcamp with id ${req.params.id}` });
}

function updateBootcamp(req, res) {
  res.send({ data: `Update bootcamp with id ${req.params.id}` });
}

function deleteBootcamp(req, res) {
  res.send({ data: `Delete bootcamp with id ${req.params.id}` });
}

module.exports = getBootcampRoutes;
