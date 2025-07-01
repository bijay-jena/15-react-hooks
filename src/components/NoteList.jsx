import { useNotes } from "../context/NotesContext";
import { useMemo } from "react";

export default function NoteList() {
  const { notes } = useNotes();

  const filteredNotes = useMemo(() => {
    return notes.filter((note) => note.length > 0);
  }, [notes]);

  const colors = [
    "#f28b82",
    "#fbbc04",
    "#fff475",
    "#ccff90",
    "#a7ffeb",
    "#cbf0f8",
    "#aecbfa",
    "#d7aefb",
  ];

  return (
    <div className="notes-grid">
      {filteredNotes.map((note, idx) => (
        <div
          key={idx}
          className="note-card"
          style={{ backgroundColor: colors[idx % colors.length] }}
        >
          {note}
        </div>
      ))}
    </div>
  );
}
