// src/services/api.js
/*
const API_BASE_URL = 'http://localhost:3000';

// src/services/api.js
// src/services/api.js

export async function fetchNotes() {
  const response = await fetch('/notes');
  const notes = await response.json();
  return notes;
}

export async function createNote(note) {
  const response = await fetch('/notes', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return response.json();
}

export async function updateNote(id, note) {
  await fetch(`/notes/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
}

export async function deleteNote(id) {
  await fetch(`/notes/${id}`, { method: 'DELETE' });
}

// Add this function to support search functionality
export async function searchNotes(query) {
  const response = await fetch(`/search?q=${encodeURIComponent(query)}`);
  const results = await response.json();
  return results;
}

*/

// src/services/api.js

const BASE_URL = 'http://localhost:3001';

export async function fetchNotes() {
  const response = await fetch(`${BASE_URL}/notes`);
  return response.json();
}

export async function createNote(note) {
  const response = await fetch(`${BASE_URL}/notes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(note),
  });
  return response.json();
}
