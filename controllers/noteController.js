// backend/controllers/noteController.js

const fs = require('fs');
const path = require('path');

const NOTES_DIR = path.join(__dirname, '../data/notes');

// Ensure the notes directory exists
if (!fs.existsSync(NOTES_DIR)) {
  fs.mkdirSync(NOTES_DIR, { recursive: true });
}

// Save note to a file
function saveNote(note) {
  const fileName = `${note.title.replace(/\s+/g, '_').toLowerCase()}.js`;
  const filePath = path.join(NOTES_DIR, fileName);
  const fileContent = `
    module.exports = {
      title: "${note.title}",
      content: "${note.content}",
      tags: ${JSON.stringify(note.tags)},
      dateCreated: "${new Date().toISOString()}"
    };
  `;

  fs.writeFileSync(filePath, fileContent, 'utf8');
}

// Retrieve all notes
function getAllNotes() {
  const files = fs.readdirSync(NOTES_DIR);
  return files.map((file) => {
    const filePath = path.join(NOTES_DIR, file);
    const note = require(filePath); // Import each note file
    return note;
  });
}

module.exports = { saveNote, getAllNotes };
