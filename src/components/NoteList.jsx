// src/components/NoteList.jsx

import Note from "./Note";

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="space-y-4">
      {notes.length === 0 && (
        <p className="text-center text-gray-500">No notes yet!</p>
      )}

      {notes.map((note) => (
        <Note key={note.id} note={note} deleteNote={deleteNote} />
      ))}
    </div>
  );
};

export default NoteList;
