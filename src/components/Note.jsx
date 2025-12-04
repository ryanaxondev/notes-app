// src/components/Note.jsx

const Note = ({ note, deleteNote }) => {
  const priorityColors = {
    High: "red",
    Medium: "orange",
    Low: "green",
  };

  return (
    <div
      className="p-4 bg-white rounded-lg shadow-md border-l-4"
      style={{ borderLeftColor: priorityColors[note.priority] }}
    >
      <h3 className="text-lg font-bold">{note.title}</h3>

      <p className="text-sm text-gray-600">
        <strong>Category:</strong> {note.category}
      </p>

      <p className="text-sm text-gray-600">
        <strong>Priority:</strong> {note.priority}
      </p>

      <p className="mt-2">{note.description}</p>

      <button
        className="mt-3 text-red-500 hover:text-red-700 cursor-pointer transition"
        onClick={() => deleteNote(note.id)}
      >
        🗑 Delete
      </button>
    </div>
  );
};

export default Note;
