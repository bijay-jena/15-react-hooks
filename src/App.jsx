import { NotesContext } from "./context/NotesContext";
import useLocalStorage from "./hooks/useLocalStorage";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import "./styles/NotesApp.css";
import PreviousValueExample from "./components/PreviusValueExample";

export default function App() {
  const [notes, setNotes] = useLocalStorage("notes", []);

  return (
    <NotesContext.Provider value={{ notes, setNotes }}>
      <h1>Notes App</h1>
      <NoteForm />
      <NoteList />
    </NotesContext.Provider>
  );
}
