// src/components/NoteList.jsx

const NoteList = ({ notes, deleteNote }) => {
  return (
    <div className="space-y-4">
      {notes.length === 0 && (
        <p className="text-center text-gray-500">No notes yet!</p>
      )}

      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md border-l-4"
        >
          <h3 className="text-lg font-bold">{note.title}</h3>

          <p className="text-sm text-gray-600">
            <strong>Category:</strong> {note.category}
          </p>

          <p className="text-sm text-gray-600">
            <strong>Priority:</strong> {note.priority}
          </p>

          <p className="mt-2">{note.description}</p>

          {/* Delete Button */}
          <button
            className="mt-3 text-red-500 hover:text-red-700 cursor-pointer transition"
            onClick={() => deleteNote(note.id)}
          >
            🗑 Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
