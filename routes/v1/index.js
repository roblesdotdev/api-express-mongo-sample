const express = require("express");
const bootcampsRouter = require("./bootcamps");

const router = express.Router();

router.use("/bootcamps", bootcampsRouter);

module.exports = router;
