function AddNewNote() {
  return (
    <div className="add_note">
      <h3>Add New Note</h3>
      <input type="text" placeholder="note title..." />
      <input type="text" placeholder="note description..." />
      <button>Add New Note</button>
    </div>
  );
}
export default AddNewNote;
