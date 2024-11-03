// src/components/NoteForm.js

import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSave, note }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setContent(note.content);
      setTags(note.tags ? note.tags.join(', ') : '');
    }
  }, [note]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare data with formatted tags array
    const formattedTags = tags.split(',')
      .map(tag => tag.trim())
      .filter(tag => tag); // Remove empty tags

    onSave({ title, content, tags: formattedTags });
    
    // Clear form fields after save
    setTitle('');
    setContent('');
    setTags('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Tags (comma-separated)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />
      <button type="submit">Save Note</button>
    </form>
  );
};

export default NoteForm;
