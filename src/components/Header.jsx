/* eslint-disable react/prop-types */
function Header({notes,onSort,sortBy}) {
  return (
    <div className="header">
      <h3>My Notes({notes.length})</h3>
      <select value={sortBy} onChange={(e)=>onSort(e.target.value)}>
        <option value="latest">latest</option>
        <option value="oldest">oldest</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
}
export default Header;
