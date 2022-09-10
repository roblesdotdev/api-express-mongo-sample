const path = require("path");
const dotenv = require("dotenv");

const configPath = path.join(__dirname, "config.env");

dotenv.config({ path: configPath });

module.exports = {
  PORT: process.env.PORT || 5000,
};
