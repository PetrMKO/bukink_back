import React from 'react';
import classes from "./MyButton.module.css"
const MyButton = ({className, children, ...props}) => {
    return (
        <button {...props} className={className ? className : classes.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;