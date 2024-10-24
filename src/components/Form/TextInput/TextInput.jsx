import React from "react";
import PropTypes from "prop-types";

import "./TextInput.css";

const TextInput = ({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
}) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input
        type="text"
        className={`form-input ${error ? "input-error" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      {error && <small className="form-error">{error}</small>}
    </div>
  );
};

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

TextInput.defaultProps = {
  label: "",
  placeholder: "",
  value: "",
  disabled: false,
  error: "",
};

export default TextInput;
