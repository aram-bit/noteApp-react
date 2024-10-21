/* eslint-disable react/prop-types */
import { H2Icon, TrashIcon } from "@heroicons/react/24/outline";
function NotesCenter({ notes, onDeleteNote, onCompleteNote, sortBy }) {
  return (
    <div className="notes_center">
      <NotesCategory notes={notes} />
      <NotesList
        sortBy={sortBy}
        notes={notes}
        onDeleteNote={onDeleteNote}
        onCompleteNote={onCompleteNote}
      />
    </div>
  );
}
export default NotesCenter;
function NotesCategory({ notes }) {
  const completedNotes = notes.filter((note) => note.completed);
  const unCompletedNotes = notes.filter((note) => !note.completed);
  if (!notes.length) return <h2>There is not any note yet.</h2>;
  return (
    <div className="notes_category">
      <button>
        <p>All</p>
        <span className="notes_quantity">{notes.length}</span>
      </button>
      <button>
        <p>Completed</p>
        <span className="notes_quantity">{completedNotes.length}</span>
      </button>
      <button>
        <p>Uncompleted</p>
        <span className="notes_quantity">{unCompletedNotes.length}</span>
      </button>
    </div>
  );
}
function NotesList({ notes, onDeleteNote, onCompleteNote, sortBy }) {
  let sortedNotes = notes;
  if (sortBy === "oldest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  if (sortBy === "latest") {
    sortedNotes = [...notes].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );
  }
  if (sortBy === "completed") {
    sortedNotes = [...notes].sort(
      (a, b) => Number(a.completed) - Number(b.completed)
    );
  }
  return (
    <div className="notes_list">
      {sortedNotes.map((note) => {
        return (
          <NoteItem
            key={note.id}
            note={note}
            onDeleteNote={onDeleteNote}
            onCompleteNote={onCompleteNote}
          />
        );
      })}
    </div>
  );
}
function NoteItem({ note, onDeleteNote, onCompleteNote }) {
  return (
    <div className={`note_single ${note.completed ? "checked" : ""}`}>
      <div className="note_detail">
        <h4>{note.title}</h4>
        <p>{note.desc}</p>
        <p>
          {new Date(note.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
      <div className="note_control">
        <TrashIcon
          style={{ width: "1.5rem", cursor: "pointer" }}
          onClick={() => onDeleteNote(note.id)}
        />
        <input type="checkbox" onChange={() => onCompleteNote(note.id)} />
      </div>
    </div>
  );
}
