import React from "react";

//import Wrapper from '../assets/wrappers/RegisterPage'
const FormRow = ({ type, inputName, labelText, handleChange, value }) => {
  return (
    <div className="form-row">
      <label htmlFor={inputName} className="form-label">
        {labelText || inputName}
      </label>
      <input
        type={type}
        className="form-input"
        name={inputName}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default FormRow;
