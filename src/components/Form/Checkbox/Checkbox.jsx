import React from "react";
import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = ({ label, checked, onChange, name, id, disabled, error }) => {
  return (
    <div className={`form-group ${error ? "has-error" : ""}`}>
      <input
        type="checkbox"
        id={id}
        disabled={disabled}
        onChange={onChange}
        name={name}
        checked={checked}
        className="form-checkbox"
      />
      {label && (
        <label htmlFor={id} className="form-label">
          {label}
        </label>
      )}
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

Checkbox.defaultProps = {
  label: "",
  disabled: false,
  error: "",
};

export default Checkbox;
