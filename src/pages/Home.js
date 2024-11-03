// src/pages/Home.js

import React, { useState, useEffect } from 'react';
import NoteForm from '../components/NoteForm';
import NoteList from '../components/NoteList';
import { fetchNotes, createNote, updateNote, deleteNote } from '../services/api';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    fetchNotes().then(setNotes);
  }, []);

  const handleSave = async (note) => {
    if (editingNote) {
      await updateNote(editingNote.id, note);
    } else {
      await createNote(note);
    }
    setEditingNote(null);
    fetchNotes().then(setNotes);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    fetchNotes().then(setNotes);
  };

  return (
    <div>
      <h1>My Notes</h1>
      <NoteForm onSave={handleSave} note={editingNote} />
      <NoteList notes={notes} onEdit={setEditingNote} onDelete={handleDelete} />
    </div>
  );
};

export default Home;
