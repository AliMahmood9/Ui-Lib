import React from "react";
import PropTypes from "prop-types";

import "./PasswordInput.css";

const PasswordInput = ({ label, value, onChange, placeholder, error }) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <input
        type="password"
        className={`form-input ${error ? "input-error" : ""}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {error && <small className="form-error">{error}</small>}
    </div>
  );
};

PasswordInput.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  error: PropTypes.string,
};

PasswordInput.defaultProps = {
  label: "",
  value: "",
  placeholder: "Enter password",
  error: "",
};

export default PasswordInput;
