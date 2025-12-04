// src/components/inputs/TextAreaInput.jsx

const TextareaInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold">{label}:</label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
        required={required}
      ></textarea>
    </div>
  );
};

export default TextareaInput;
