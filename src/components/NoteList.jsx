// src/components/NoteList.jsx

const NoteList = ({ notes }) => {
  return (
    <div className="space-y-4 mt-6">
      {/* No Notes Message */}
      {notes.length === 0 && (
        <p className="text-center text-gray-500">No notes yet!</p>
      )}

      {/* Notes */}
      {notes.map((note) => (
        <div
          key={note.id}
          className="p-4 bg-white rounded-lg shadow-md border-l-4 border-purple-500"
        >
          <h3 className="text-lg font-bold">{note.title}</h3>

          <p className="text-sm text-gray-600">
            <strong>Category:</strong> {note.category}
          </p>

          <p className="text-sm text-gray-600">
            <strong>Priority:</strong> {note.priority}
          </p>

          <p className="mt-2 text-gray-800">{note.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
