function Header() {
  return (
    <div className="header">
      <h3>My Notes(2)</h3>
      <select>
        <option value="latest">latest</option>
        <option value="oldest">oldest</option>
        <option value="completed">completed</option>
      </select>
    </div>
  );
}
export default Header;
