import React from 'react';
import {mergeClasses} from "../../../utils/classes";
import classes from './Image.module.css'

const Image = ({className, strictClass = false, imageProps = {src:'', alt:'img'}, ...props}) => {
    if(className)

    return (
        <div
        className={
            className
            ? className
            : classes.imgWrapper
        }>
            <img
                className={classes.image}
                src={imageProps.src}
                alt={imageProps.alt}
            />
        </div>
    );
};

export default Image;