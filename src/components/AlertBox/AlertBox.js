import React from 'react';
import './AlertBox.css';

let AlertBox = (props) => {
    const { type, text, className } = props;

    return (
        <div className={`alert-box alert-box--${type} ${className}`}>
            {text}
        </div>
    );
}

export default AlertBox;
