import React from "react";
import PropTypes from "prop-types";

import "./Select.css";

const Select = ({ label, value, options, onChange, disabled, error }) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <select
        className={`form-select ${error ? "input-error" : ""}`}
        value={value}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <small className="form-error">{error}</small>}
    </div>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

Select.defaultProps = {
  label: "",
  disabled: false,
  error: "",
};

export default Select;
