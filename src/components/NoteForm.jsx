// src/components/NoteForm.jsx

import { useState } from "react";

// Reusable Inputs
import TextInput from "./inputs/TextInput";
import SelectInput from "./inputs/SelectInput";
import TextareaInput from "./inputs/TextareaInput";

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
          <TextInput
            label="Title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          {/* Category */}
          <SelectInput
            label="Category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={[
              { value: "Work", label: "📂 Work" },
              { value: "Personal", label: "🏠 Personal" },
              { value: "Ideas", label: "💡 Ideas" },
            ]}
          />

          {/* Priority */}
          <SelectInput
            label="Priority"
            name="priority"
            value={formData.priority}
            onChange={handleChange}
            options={[
              { value: "High", label: "🔴 High" },
              { value: "Medium", label: "🟠 Medium" },
              { value: "Low", label: "🟢 Low" },
            ]}
          />

          {/* Description */}
          <TextareaInput
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />

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
