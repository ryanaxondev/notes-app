// src/components/NoteForm.jsx

import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  // Update local form data
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const newNote = {
      id: Date.now(),
      ...formData,
    };

    // Add new note to global state (immutable)
    setNotes([newNote, ...notes]);

    // Reset form
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      {/* Title */}
      <div className="mb-4">
        <label className="block font-semibold">Title</label>
        <input
          name="title"
          type="text"
          className="w-full p-2 border rounded-lg"
          value={formData.title}
          onChange={handleChange}
        />
      </div>

      {/* Priority */}
      <div className="mb-4">
        <label className="block font-semibold">Priority</label>
        <select
          name="priority"
          className="w-full p-2 border rounded-lg"
          value={formData.priority}
          onChange={handleChange}
        >
          <option value="High">🔴 High</option>
          <option value="Medium">🟠 Medium</option>
          <option value="Low">🟢 Low</option>
        </select>
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="block font-semibold">Category</label>
        <select
          name="category"
          className="w-full p-2 border rounded-lg"
          value={formData.category}
          onChange={handleChange}
        >
          <option value="Work">📂 Work</option>
          <option value="Personal">🏠 Personal</option>
          <option value="Ideas">💡 Ideas</option>
        </select>
      </div>

      {/* Description */}
      <div className="mb-4">
        <label className="block font-semibold">Description</label>
        <textarea
          name="description"
          className="w-full p-2 border rounded-lg"
          value={formData.description}
          onChange={handleChange}
        ></textarea>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full bg-purple-500 text-white cursor-pointer py-2 rounded-lg hover:bg-purple-600 transition"
      >
        Add Note
      </button>
    </form>
  );
};

export default NoteForm;
