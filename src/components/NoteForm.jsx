import { useState, useRef } from 'react';
import { useNotes } from '../context/NotesContext';

export default function NoteForm() {
  const [input, setInput] = useState('');
  const { notes, setNotes } = useNotes();
  const inputRef = useRef();

  const handleAdd = () => {
    if (input.trim() === '') return;
    setNotes([...notes, input]);
    setInput('');
    inputRef.current.focus(); // using useRef to focus input
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a note"
      />
      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
}