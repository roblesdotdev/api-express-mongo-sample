const path = require("path");
const dotenv = require("dotenv");

const configPath = path.join(__dirname, "config.env");

dotenv.config({ path: configPath });

function getEnv(key) {
  if (!process.env[key]) throw new Error(`Environment ${key} must be set`);
  return process.env[key];
}

module.exports = {
  PORT: getEnv("PORT"),
  NODE_ENV: getEnv("NODE_ENV"),
};
