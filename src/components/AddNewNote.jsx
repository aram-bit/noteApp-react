/* eslint-disable react/prop-types */
import { useState } from "react";

function AddNewNote() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return null;
    const newNote = {
      title,
      desc,
      id: new Date().getTime(),
      createdAt: new Date().toISOString(),
      completed: false,
    };
    setTitle("");
    setDesc("");
    setNotes((prevNotes) => [...prevNotes, newNote]);
  };
  return (
    <form className="add_note" onSubmit={handleSubmit}>
      <h3>Add New Note</h3>
      <input
        type="text"
        placeholder="note title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="note description..."
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add New Note</button>
    </form>
  );
}
export default AddNewNote;
