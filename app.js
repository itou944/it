// app.js

const express = require('express');
const bodyParser = require('body-parser');
const noteRoutes = require('./routes/noteRoutes');
const searchRoutes = require('./routes/searchRoutes');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define routes
app.use('/notes', noteRoutes);
app.use('/search', searchRoutes);

module.exports = app;
