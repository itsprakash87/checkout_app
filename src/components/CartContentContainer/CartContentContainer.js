import React from "react";
import "./CartContentContainer.css";

let CartContentContainer = props => {
  const { wrapperClassName = "", itemsClassName = "", children } = props;

  return (
    <div className={`cart-content-wrapper ${wrapperClassName}`}>
        <div className={`cart-content-items ${itemsClassName}`}>
            {children}
        </div>
    </div>
  );
};

export default CartContentContainer;
