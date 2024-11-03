// controllers/searchController.js

const indexUtils = require('../utils/indexUtils');

exports.searchNotes = async (req, res) => {
  try {
    const query = req.query.q.toLowerCase().split(/\s+/);
    const results = indexUtils.search(query);  // Assuming this function exists in indexUtils.js
    res.json(results);
  } catch (error) {
    res.status(500).send(error.message);
  }
};
