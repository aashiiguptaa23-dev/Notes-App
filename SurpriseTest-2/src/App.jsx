import { useState } from "react";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [input, setInput] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleAdd = () => {
    if (!input) return;
    editIndex !== null
      ? setNotes(notes.map((n, i) => (i === editIndex ? input : n)))
      : setNotes([...notes, input]);

    setInput("");
    setEditIndex(null);
  };

  const handleDelete = (i) => {
    setNotes(notes.filter((_, index) => index !== i));
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Notes App 📝</h1>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter note"
      />

      <button onClick={handleAdd}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <ul>
        {notes.map((note, i) => (
          <li key={i}>
            {note}
            <button onClick={() => { setEditIndex(i); setInput(note); }}>
              Edit
            </button>
            <button onClick={() => handleDelete(i)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}