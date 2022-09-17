import React from "react";

const FormRowSelect = ({
  inputName,
  value,
  labelText,
  handleChange,
  options,
}) => {
  return (
    <div className="form-row">
      <label htmlFor={inputName} className="form-label">
        {labelText || inputName}
      </label>
      <select
        name={inputName}
        value={value}
        onChange={handleChange}
        className="form-select"
      >
        {options.map((jobItem, index) => {
          return (
            <option key={index} value={jobItem}>
              {jobItem}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default FormRowSelect;
