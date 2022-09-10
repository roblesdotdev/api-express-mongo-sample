const express = require("express");
const router = express.Router();

router.get("/", (_req, res) => res.send({ data: "All bootcamps" }));

router.post("/", (_req, res) => res.send({ data: "Create bootcamp" }));

router.get("/:id", (req, res) =>
  res.send({ data: `Bootcamp with id ${req.params.id}` })
);

router.put("/:id", (req, res) =>
  res.send({ data: `Update bootcamp with id ${req.params.id}` })
);

router.delete("/:id", (req, res) =>
  res.send({ data: `Delete bootcamp with id ${req.params.id}` })
);

module.exports = router;
