// src/components/inputs/TextInput.jsx

const TextInput = ({ label, name, value, onChange, required = false }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold">{label}:</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
        required={required}
      />
    </div>
  );
};

export default TextInput;
