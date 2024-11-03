// routes/searchRoutes.js

const express = require('express');
const searchController = require('../controllers/searchController');

const router = express.Router();

// Search route
router.get('/', searchController.searchNotes);

module.exports = router;
