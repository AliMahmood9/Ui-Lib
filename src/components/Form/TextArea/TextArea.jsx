import React from "react";
import PropTypes from "prop-types";

const Textarea = ({ label, value, onChange, placeholder, disabled, error }) => {
  return (
    <div className="form-group">
      {label && <label className="form-label">{label}</label>}
      <textarea
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

Textarea.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

Textarea.defaultProps = {
  label: "",
  placeholder: "",
  value: "",
  disabled: false,
  error: "",
};

export default Textarea;
