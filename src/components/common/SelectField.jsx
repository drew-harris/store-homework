export function SelectField({ options, value, onChange }) {
  return (
    <select
      className="form-select me-2 flex-grow-1"
      value={value}
      onChange={onChange}
      type="text"
      name="rating"
    >
      {options.map((option) => (
        <option key={option.value} label={option.label} value={option.value} />
      ))}
    </select>
  );
}
