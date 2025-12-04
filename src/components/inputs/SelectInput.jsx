// src/components/inputs/SelectInput.jsx

const SelectInput = ({ label, name, value, onChange, options }) => {
  return (
    <div className="mb-4">
      <label className="block font-semibold">{label}:</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="w-full p-2 border rounded-lg"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
