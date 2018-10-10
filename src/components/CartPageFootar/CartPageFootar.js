import React from 'react';
import { Button, CheckoutBox } from "../";
import './CartPageFootar.css';

let CartPageFootar = (props) => {
    const { onEmptyCart, onSaveCart, onCheckout, amount  } = props;

    return (
        <div className={`cart-footar-wrapper`}>
            <div>
                <Button onClick={onEmptyCart} label={"Empty Cart"} />
                <Button onClick={onSaveCart} label={"Save Cart"} />
            </div>
            <div>
                <CheckoutBox onButtonClick={onCheckout} title={"CART TOTAL"} amount={amount} buttonTitle={"Checkout"} />
            </div>
        </div>
    );
}

export default CartPageFootar;
