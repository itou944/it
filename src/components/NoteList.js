// src/components/NoteList.js

import React from 'react';

const NoteList = ({ notes, onEdit, onDelete }) => (
  <div>
    {notes.map(note => (
      <div key={note.title}>
        <h2>{note.title}</h2>
        <p>{note.content}</p>
        <small>Tags: {note.tags.join(', ')}</small>
        <button onClick={() => onEdit(note)}>Edit</button>
        <button onClick={() => onDelete(note.title)}>Delete</button>
      </div>
    ))}
  </div>
);

export default NoteList;
