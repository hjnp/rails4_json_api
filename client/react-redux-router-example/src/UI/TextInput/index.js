import React from 'react';

export const TextInput = ({
  name,
  label,
  onChange,
  placeholder,
  value,
  error,
  type = "text"
}) => {
  let wrapperClass = ["form-group"];

  if (error && error.length > 0) {
    wrapperClass.push("has-error");
  }

  return (
    <div className={wrapperClass.join(" ")}>
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <input
          type={type}
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {error && <div className="alert alert-danger">{error}</div>}
      </div>
    </div>
  );
};
