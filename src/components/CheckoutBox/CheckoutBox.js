import React from 'react';
import './CheckoutBox.css';

let CheckoutBox = (props) => {
    const { containerClassName, wrapperClassName='', buttonClassName='', amountClassName='', titleClassName='', amount, title, buttonTitle, onButtonClick, children } = props;

    return (
        <div className={`checkoutbox-container ${containerClassName}`}>
            <div className={`checkoutbox-top-wrapper ${wrapperClassName}`}>
                <div className={`checkoutbox-top-title ${titleClassName}`}>
                    {title}
                </div>
                <div className={`checkoutbox-top-amount ${amountClassName}`}>
                    $ {amount}
                </div>
                {children}
            </div>
            <button onClick={onButtonClick} className={`checkoutbox-button ${buttonClassName}`}>
                {buttonTitle}
            </button>
        </div>
    );
}

export default CheckoutBox;
