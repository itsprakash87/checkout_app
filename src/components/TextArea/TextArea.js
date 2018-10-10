import React, { Component } from 'react';
import './TextArea.css';

let TextArea = (props) => {
    const { className, ...others } = props;

    return (
        <textarea className={`text-area ${className}`} {...others}></textarea>
    );
}

export default TextArea;
