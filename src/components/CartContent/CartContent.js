import React from "react";
import { CartItem, CartContentContainer } from "../";
import "./CartContent.css";

let CardContent = props => {
  const {
    addresses,
    handleQuantityChange,
    onMessageChange,
    onAddressChange,
    onItemRemove,
    cartContent = []
  } = props;

  return (
    <CartContentContainer>
      {cartContent.map((itm, ind) => {
        return (
          <CartItem
            key={`${itm.itemName}-${ind}`}
            itemName={itm.itemName}
            quantity={itm.quantity}
            addresses={addresses}
            imageSource={itm.imageSource}
            price={itm.price}
            message={itm.message}
            address={itm.address}
            totalPrice={itm.totalPrice}
            onAddressChange={onAddressChange && onAddressChange.bind(this, ind)}
            onMessageChange={onMessageChange && onMessageChange.bind(this, ind)}
            onItemRemove={onItemRemove && onItemRemove.bind(this, ind)}
            onQuantityChange={
              handleQuantityChange && handleQuantityChange.bind(this, ind)
            }
          />
        );
      })}
      {cartContent.length === 0 && <div className={`cart-content-empty-text`} >Your cart is empty.</div>}
    </CartContentContainer>
  );
};

export default CardContent;
