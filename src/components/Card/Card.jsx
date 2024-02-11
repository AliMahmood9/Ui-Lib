import React from "react";
import PropTypes from "prop-types";

import BrandIcon from "../../stories/assets/Brand-icon.png";

import "./Card.css";

const Card = ({ title, description, ...props }) => {
  return (
    <div className="card-container" {...props}>
      <img src={BrandIcon} alt="brand-icon" />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
