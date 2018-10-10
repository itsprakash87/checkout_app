import React, { Component } from "react";
import { InputField } from "../";
import "./AmountCounter.css";

let AmountCounter = props => {
  const {
    wrapperClassName = "",
    price,
    totalPrice,
    inputFieldClassName,
    quantity,
    onQuantityChange
  } = props;

  return (
    <div className={`amount-counter-wrapper ${wrapperClassName}`}>
      <InputField
        className={`${inputFieldClassName}`}
        min={"1"}
        type="number"
        value={quantity}
        onChange={onQuantityChange}
      />
      <div className={`amount-counter-price`}>${price}</div>
      <div className={`amount-counter-price`}>${totalPrice}</div>
    </div>
  );
};

export default AmountCounter;
