import React from 'react';
import classes from "./MuButton.module.css";

const MyButton = ({className, children, ...props}) => {
    return (
        <button {...props} className={className ? className : classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;