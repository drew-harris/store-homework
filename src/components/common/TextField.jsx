import React from "react";

function TextField({ value, onChange, label }) {
  return (
    <>
      <label className="form-label" htmlFor="input">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        className="form-control"
        type="text"
        name="input"
      />
    </>
  );
}

export default TextField;
