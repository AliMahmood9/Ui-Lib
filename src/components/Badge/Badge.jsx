import React from "react";
import PropTypes from "prop-types";

import "./Badge.css";

const Badge = ({ text, color = "gray", type = "square" }) => {
  const classNames = `badge--${type}`;
  return (
    <div className={["badge", `badge--${type}`, color].join(" ")}>
      <span>{text}</span>
    </div>
  );
};

Badge.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default Badge;
