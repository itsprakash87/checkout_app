import React, { Component } from 'react';
import './CheckoutIcon.css';

class CheckoutIcon extends Component {

    getCircleActiveClassName = () => {
        const { active, circleActiveClassName='' } = this.props;

        return active ? `checkout-icon-circle-active ${circleActiveClassName}` : ``;
    }

    getTitleActiveClassName = () => {
        const { active, titleActiveClassName='' } = this.props;

        return active ? `checkout-icon-title-active ${titleActiveClassName}` : ``;
    }

    render() {
        const { wrapperClassName='', circleClassName='', imageClassName='', titleClassName='', imageSrc, title, active, onClick } = this.props;

        return (
            <div onClick={onClick} className={`checkout-icon-wrapper ${wrapperClassName}`}>
                <div className={`checkout-icon-circle ${this.getCircleActiveClassName()} ${circleClassName}`}>
                    <div className={`checkout-icon-dotted-line`}>
                        <img className={`checkout-icon-image ${imageClassName}`}
                            src={imageSrc}
                        />
                    </div>
                </div>
                <div className={`checkout-icon-title ${this.getTitleActiveClassName()} ${titleClassName}`}>
                    {title}
                </div>
            </div>
        );
    }
}

export default CheckoutIcon;
