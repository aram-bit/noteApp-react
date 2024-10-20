import "./App.css";
import AddNewNote from "./components/AddNewNote";
import Header from "./components/Header";
import NotesCenter from "./components/NotesCenter";
function App() {
  return (
    <div className="app">
      <Header />
      <div className="main">
        <AddNewNote />
        <NotesCenter />
      </div>
    </div>
  );
}

export default App;
