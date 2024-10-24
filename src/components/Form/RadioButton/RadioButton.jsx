import React from "react";
import PropTypes from "prop-types";
import "./RadioButton.css"; // Importing the CSS file

const RadioButton = ({ label, value, onChange, name, id, disabled, error }) => {
  return (
    <>
      <div className={`form-group ${error ? "has-error" : ""}`}>
        <input
          type="radio"
          id={id}
          disabled={disabled}
          onChange={onChange}
          name={name}
          value={value}
          className="form-radio"
        />
        {label && (
          <label htmlFor={id} className="form-label">
            {label}
          </label>
        )}
      </div>
      {/* {error && <small className="form-error">{error}</small>} */}
    </>
  );
};

RadioButton.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
};

RadioButton.defaultProps = {
  label: "",
  disabled: false,
  error: "",
};

export default RadioButton;
