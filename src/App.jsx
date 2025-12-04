// src/App.jsx

import { useState } from "react";
import NoteForm from "./components/NoteForm";

const App = () => {
  // Global state for notes
  const [notes, setNotes] = useState([]);

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">📝 Notes App</h2>

      {/* Pass global state */}
      <NoteForm notes={notes} setNotes={setNotes} />

      {/* Debug output */}
      <pre className="mt-6 bg-white p-4 rounded-lg text-sm border">
        {JSON.stringify(notes, null, 2)}
      </pre>
    </div>
  );
};

export default App;
