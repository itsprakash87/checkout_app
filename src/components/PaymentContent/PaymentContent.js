import React, { Component } from 'react';
import { InputField, SelectField, CheckoutBox } from '../';
import './PaymentContent.css';

class PaymentContent extends Component {

    render() {
        const { paymentDetail, addresses, onCardNumberChange, onCardExpiryChange, onCardCvcChange, onAddressChange, onOrderPlace } = this.props;
        const { cardNumber, cardExpiry, cardCvc, billingAddress, totalAmount, subTotal, shippingCharges, tax} = paymentDetail;
    
        return (
            <div className={`payment-content-wrapper`}>
                <div className={`payment-method-wrapper`}>
                    <div className={`payment-content-title`}>Select a payment method</div>
                    <h5>Your credit and debit card details</h5>
                    <h5>Add a new card</h5>
                    <div className={`payment-card-detail`}>
                        <InputField onChange={onCardNumberChange} value={cardNumber} className={`payment-card-input-field payment-card-input-field--big`} placeholder={"Card number"} />
                        <InputField onChange={onCardExpiryChange} value={cardExpiry} className={`payment-card-input-field payment-card-input-field--sml`} placeholder={"MM/YY"} />
                        <InputField onChange={onCardCvcChange} value={cardCvc} className={`payment-card-input-field payment-card-input-field--sml`} placeholder={"CVC"} />
                    </div>
                    <h5>Billing Address For This Card:</h5>
                    <SelectField value={billingAddress} onChange={onAddressChange} selectFieldClassName={`payment-address-select-field`}>
                        {addresses.map((ad, ind) => {
                            return (
                                <option key={ind} value={ad}>{ad}</option>
                            );
                        })}
                    </SelectField>
                </div>
                <div className={`payment-order-detail-wrapper`}>
                    <CheckoutBox onButtonClick={onOrderPlace} containerClassName={`payment-checkout-box`} amount={totalAmount} title={'Total'} buttonTitle={'Place Your Order'}>
                        <div className={`payment-order-detail-table`}>
                            <div className={`payment-order-detail-row`}>
                                <div className={`payment-order-detail-cell`}>
                                    Subtotal
                                </div>
                                <div className={`payment-order-detail-cell`}>
                                    $ {subTotal}
                                </div>
                            </div>
                            <div className={`payment-order-detail-row`}>
                                <div className={`payment-order-detail-cell`}>
                                    Shipping
                                </div>
                                <div className={`payment-order-detail-cell`}>
                                    $ {shippingCharges}
                                </div>
                            </div>
                            <div className={`payment-order-detail-row`}>
                                <div className={`payment-order-detail-cell`}>
                                    Tax
                                </div>
                                <div className={`payment-order-detail-cell`}>
                                    $ {tax}
                                </div>
                            </div>
                        </div>
                    </CheckoutBox>
                </div>
            </div>
        );
    }
}

export default PaymentContent;
