// src/components/NoteForm.jsx

import { useState } from "react";

const NoteForm = ({ notes, setNotes }) => {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    category: "Work",
    priority: "Medium",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.description) return;

    const newNote = {
      id: Date.now(),
      ...formData,
    };

    setNotes([newNote, ...notes]);

    // Reset form
    setFormData({
      title: "",
      category: "Work",
      priority: "Medium",
      description: "",
    });

    // Hide form after submit
    setIsFormVisible(false);
  };

  return (
    <div className="mb-6">
      {/* Toggle Button */}
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="w-full bg-gray-100 border border-gray-300 text-purple-800 py-2 rounded-lg cursor-pointer hover:bg-purple-200 hover:border-purple-300 transition mb-4"
      >
        {isFormVisible ? "Hide Form ✖️" : "Add New Note ➕"}
      </button>

      {/* Collapsible Form */}
      {isFormVisible && (
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
            className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600 transition"
          >
            Add Note
          </button>
        </form>
      )}
    </div>
  );
};

export default NoteForm;
