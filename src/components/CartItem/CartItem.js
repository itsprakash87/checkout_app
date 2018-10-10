import React from 'react';
import { SelectField, AmountCounter, TextArea } from "../";
import './CartItem.css';

let CartItem = (props) => {

    const { wrapperClassName='', titleClassName='', imageSource, itemName, addresses = [], address, price, onQuantityChange, onMessageChange, onAddressChange, onItemRemove, quantity, message, totalPrice } = props;

    return (
        <div>
            <div className={`cart-item-title ${titleClassName}`}>
                Ship To {address}
            </div>
            <div className={`cart-item-wrapper ${wrapperClassName}`}>
                <div className={`cart-item-image`}>
                    <img src={imageSource} />
                </div>
                <div className={`cart-item-details`}>
                    <div className={`cart-item-name`}>{itemName}</div>
                    Ship to
                    <SelectField onChange={onAddressChange} selectFieldClassName={`cart-item-address-select`} value={address}>
                        {addresses.map((ad, ind) => {
                            return (
                                <option key={ind} value={ad}>{ad}</option>
                            );
                        })}
                    </ SelectField>
                    <TextArea onChange={onMessageChange} className={`cart-item-message`} placeholder={"Write message"} value={message} rows={"3"} />
                </div>
                <div className={`cart-item-amount-detail`}>
                    <AmountCounter inputFieldClassName={`cart-item-amount-input`} quantity={quantity} totalPrice={totalPrice} onQuantityChange={onQuantityChange} price={price} />
                </div>
                <span onClick={onItemRemove} className={`cart-item-cancel`}>✕</span>
            </div>
        </div>
    );
}

export default CartItem;
