import React from "react";
import PropTypes from "prop-types";

import Image from "../../stories/assets/Image.png";
import MobImage from "../../stories/assets/Image-mob.png";
import QuoteMark from "../../stories/assets/quoteMark.svg";

import useMobile from "../../hooks/useMobile";

import "./Testinomial.css";

const Testinomial = ({ text, name, designation, ...props }) => {
  const { isMobile } = useMobile();
  return (
    <div className="testinomial-container" {...props}>
      <div className="testinomial-wrapper">
        <img src={isMobile ? MobImage : Image} alt="image" />

        <div className="testinomial-text-wrapper">
          <div className="quote-mark quote-left">
            <img src={QuoteMark} alt="quote-mark" />
          </div>
          <quote>
            <q>{text}</q>
          </quote>
          <b>{name}</b>
          <p>{designation}</p>
        </div>
      </div>
    </div>
  );
};

Testinomial.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
};

export default Testinomial;
