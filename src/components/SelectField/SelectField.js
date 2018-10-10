import React, { Component } from 'react';
import './SelectField.css';

let SelectField = (props) => {
    const { selectFieldClassName='', children, ...others } = props;

    return (
        <select className={`select-field-wrapper ${selectFieldClassName}`} {...others}>
            {children}
        </select>
    );
}

export default SelectField;
