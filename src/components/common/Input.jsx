import React from "react";

const Input = ({ name, label, value, onChange, type, error }) => {
  return (
    <div className="mb-3 col-6">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        name={name}
        type={type}
        className="form-control"
        id={name}
      />
      {error && <div className="text-danger mt-1">{error}</div>}
    </div>
  );
};

export default Input;
