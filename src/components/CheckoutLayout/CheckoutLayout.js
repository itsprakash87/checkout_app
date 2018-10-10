import React, { Component } from 'react';
import './CheckoutLayout.css';

class CheckoutLayout extends Component {

    render() {
        const { header, content, footar } = this.props;

        return (
            <div className={`checkout-layout-wrapper`}>
                {header}
                <div className={`checkout-layout-separator`} />
                {content}
                <div className={`checkout-layout-separator`} />
                {footar}
            </div>
        );
    }
}

export default CheckoutLayout;
