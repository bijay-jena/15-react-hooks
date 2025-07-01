// components/NoteList.jsx
import { useNotes } from '../context/NotesContext';
import { useMemo } from 'react';

export default function NoteList() {
  const { notes } = useNotes();

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => note.length > 0);
  }, [notes]);

  return (
    <ul>
      {filteredNotes.map((note, idx) => (
        <li key={idx}>{note}</li>
      ))}
    </ul>
  );
}