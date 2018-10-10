import React, { Component } from 'react';
import { InputField, Button } from '../';
import './PaymentFootar.css';

let PaymentFootar = (props) => {
    const { wrapperClassName='', buttonClassName='', amountClassName='', titleClassName='', amount, title, buttonTitle, onButtonClick, children } = props;

    return (
        <div className={`payment-footar-wrapper ${wrapperClassName}`}>
            <div className={`payment-footar-title`}>Use a Promo Code</div>
            <h5>Promo Code</h5>
            <div className={`payment-footar-promo-form-wrapper`}>
                <InputField disabled />
                <Button buttonClassName={`payment-footar-promo-form-wrapper--button`} label={"Apply Code"} />
            </div>
        </div>
    );
}

export default PaymentFootar;
