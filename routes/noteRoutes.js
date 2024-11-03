// backend/routes/noteRoutes.js

const express = require('express');
const { saveNote, getAllNotes } = require('../controllers/noteController');
const router = express.Router();

// POST route to create a new note
router.post('/notes', (req, res) => {
  const note = req.body;
  try {
    saveNote(note);  // Assume saveNote function saves the note to a file
    res.status(201).json({ message: 'Note created successfully' });
  } catch (error) {
    console.error('Error saving note:', error);
    res.status(500).json({ error: 'Error saving note' });
  }
});

// GET route to retrieve all notes
router.get('/notes', (req, res) => {
  try {
    const notes = getAllNotes();  // Function that retrieves notes
    res.status(200).json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    res.status(500).json({ error: 'Error fetching notes' });
  }
});

module.exports = router;














/*
// routes/noteRoutes.js

const express = require('express');
const noteController = require('../controllers/noteController');

const router = express.Router();

// CRUD routes
router.get('/', noteController.getAllNotes);
router.post('/', noteController.createNote);
router.get('/:id', noteController.getNote);
router.put('/:id', noteController.updateNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;
*/