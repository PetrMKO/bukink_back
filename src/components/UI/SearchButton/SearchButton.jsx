import React from 'react';
import classes from "./SearchButton.module.css";

const SearchButton = ({wrapperClass, children, onClick, ...props}) => {
    return (
        <div className={wrapperClass ? wrapperClass : classes.btnWrapper}>
            <button className={classes.btn} onClick={onClick}>
                {children}
            </button>
        </div>
    );
};

export default SearchButton;