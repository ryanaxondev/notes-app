// src/App.jsx

import { useState } from "react";
import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";

const App = () => {
  const [notes, setNotes] = useState([]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">📝 Notes App</h2>

      <NoteForm notes={notes} setNotes={setNotes} />

      <NoteList notes={notes} />
    </div>
  );
};

export default App;
