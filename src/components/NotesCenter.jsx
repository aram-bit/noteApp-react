/* eslint-disable react/prop-types */
import { TrashIcon } from "@heroicons/react/24/outline";
function NotesCenter() {
  return (
    <div className="notes_center">
      <NotesCategory />
      <NotesList />
    </div>
  );
}
export default NotesCenter;
function NotesCategory() {
  return (
    <div className="notes_category">
      <button>
        <p>All</p>
        <span className="notes_quantity">10</span>
      </button>
      <button>
        <p>Completed</p>
        <span className="notes_quantity">5</span>
      </button>
      <button>
        <p>Uncompleted</p>
        <span className="notes_quantity">3</span>
      </button>
    </div>
  );
}
function NotesList() {
  return (
    <div className="notes_list">
      <div className="note_single">
        <div className="note_detail">
          <h4>note title</h4>
          <p>note description</p>
          <p>2014/02/02</p>
        </div>
        <div className="note_control">
          <TrashIcon style={{ width: "1.5rem", cursor: "pointer" }} />
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
