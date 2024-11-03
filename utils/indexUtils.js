// utils/indexUtils.js

let invertedIndex = {};

function buildIndex(note) {
  const keywords = note.title.toLowerCase().split(/\s+/).concat(note.tags.map(tag => tag.toLowerCase()));
  keywords.forEach(keyword => {
    if (!invertedIndex[keyword]) {
      invertedIndex[keyword] = [];
    }
    invertedIndex[keyword].push(note.title.replace(/\s+/g, '_'));
  });
}

function rebuildIndex() {
  invertedIndex = {};
  const notes = fs.readdirSync(path.join(__dirname, '../notes'));
  notes.forEach(noteFile => {
    const note = require(`../notes/${noteFile}`);
    buildIndex(note);
  });
}

module.exports = { buildIndex, rebuildIndex };
