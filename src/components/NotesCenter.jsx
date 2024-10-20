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
        <span className="notes_quantity">8</span>
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
          <h4>note one</h4>
          <p>
            note description Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, hic?
          </p>
          <p>2024/02/03</p>
        </div>
        <div className="note_control">
          <TrashIcon style={{ width: "1.5rem", cursor: "pointer" }} />
          <input type="checkbox" />
        </div>
      </div>
      <div className="note_single">
        <div className="note_detail">
          <h4>note one</h4>
          <p>note description Lorem, ipsum dolor sit amet</p>
          <p>2024/02/03</p>
        </div>
        <div className="note_control">
          <TrashIcon style={{ width: "1.5rem", cursor: "pointer" }} />
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
}
