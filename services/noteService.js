// services/noteService.js

const fs = require('fs');
const path = require('path');
const noteTemplate = require('../models/noteModel');

exports.createNote = async (noteData) => {
  const newNote = { ...noteTemplate, ...noteData, createdAt: new Date(), updatedAt: new Date() };
  const filePath = path.join(__dirname, '../notes', `${newNote.title.replace(/\s+/g, '_')}.js`);

  const fileContent = `module.exports = ${JSON.stringify(newNote, null, 2)};`;
  await fs.promises.writeFile(filePath, fileContent, 'utf8');
};

// Additional methods for getNoteById, updateNote, deleteNote...
