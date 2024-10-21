import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NotesCenter from "./components/NotesCenter";
import { useState } from "react";
function App() {
  const [notes, setNotes] = useState([]);
  const handleAddNotes = (newNote) => {
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  const handleDeleteNote = (id) => {
    const filteredNotes = notes.filter((n) => n.id !== id);
    setNotes(filteredNotes);
  };
  return (
    <div className="app">
      <Header />
      <div className="main">
        <AddNewNote onAddNotes={handleAddNotes} />
        <NotesCenter notes={notes} onDeleteNote={handleDeleteNote} />
      </div>
    </div>
  );
}

export default App;
