import React from "react";
import PropTypes from "prop-types";

import CheckCircle from "../../stories/assets/Check-circle.svg";
import ExclamationImg from "../../stories/assets/Exclamation.png";
import XCircleImg from "../../stories/assets/X-circle.png";
import InfoImg from "../../stories/assets/Icon.png";

import "./Banner.css";

const Banner = ({
  text,
  variant = "neutral",
  label,
  multiline = true,
  ...props
}) => {
  const renderIcon = () => {
    let imgSrc = InfoImg;
    if (variant === "success") {
      imgSrc = CheckCircle;
    }
    if (variant === "error") {
      imgSrc = XCircleImg;
    }
    if (variant === "warning") {
      imgSrc = ExclamationImg;
    }
    return <img src={imgSrc} alt="icon" />;
  };

  return (
    <div className={`banner-container ${variant}`} {...props}>
      {renderIcon()}
      {multiline && (
        <div className="banner-wrapper">
          <b className="label">{label}</b>
          <p className="text">{text}</p>
        </div>
      )}
    </div>
  );
};

Banner.propTypes = {
  variant: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

export default Banner;
