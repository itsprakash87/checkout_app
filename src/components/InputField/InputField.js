import React from 'react';
import './InputField.css';

let InputField = (props) => {
    const { className, ...others } = props;

    return (
        <input className={`input-field ${className}`} {...others} />
    );
}

export default InputField;
