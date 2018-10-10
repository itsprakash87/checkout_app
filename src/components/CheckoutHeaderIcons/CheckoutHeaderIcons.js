import React, { Component } from 'react';
import { CheckoutIcon } from "../";
import './CheckoutHeaderIcons.css';

const CART_ICON = "https://www.lynchcreekwreaths.com/_themes/lcf/images/Icon-Cart-White-p-500x500.png?version=0.3.14";
const SHIPPING_ICON = "https://www.lynchcreekwreaths.com/_themes/lcf/images/Icon-Truck-White-p-500x500.png?version=0.3.14";
const PAYMENT_ICON = "https://www.lynchcreekwreaths.com/_themes/lcf/images/Icon-Card-White-p-500x500.png?version=0.3.14";

class CheckoutHeaderIcons extends Component {

    render() {
        const { className, onClickCart, onClickShip, onClickPayment, cartIconProps, paymentIconProps, ...others } = this.props;

        return (
            <div className={`checkout-header-wrapper`}>
                <CheckoutIcon title={"My Cart"} onClick={onClickCart} imageSrc={CART_ICON} {...cartIconProps} />
                <CheckoutIcon title={"Shipping"} onClick={onClickShip} imageSrc={SHIPPING_ICON} />
                <CheckoutIcon title={"Payment"} onClick={onClickPayment} imageSrc={PAYMENT_ICON} {...paymentIconProps} />
            </div>
        );
    }
}

export default CheckoutHeaderIcons;
