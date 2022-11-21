export function TextAreaField({ value, onChange, label }) {
  return (
    <>
      <label className="form-label" htmlFor="area">
        {label}
      </label>
      <textarea
        className="form-control"
        rows={3}
        type="text"
        value={value}
        onChange={onChange}
        name="area"
      />
    </>
  );
}
