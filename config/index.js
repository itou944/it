// config/index.js

require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  apiBaseUrl: process.env.API_BASE_URL || 'http://localhost:3000',
};

module.exports = config;
