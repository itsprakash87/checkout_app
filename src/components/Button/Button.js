import React from "react";
import "./Button.css";

let Button = props => {
  const { buttonClassName = "", label = "", ...others } = props;

  return (
    <button className={`checkout-button ${buttonClassName}`} {...others}>
      {label}
    </button>
  );
};

export default Button;
