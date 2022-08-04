import React from 'react';
import classes from "./CityCircle.module.css";

const CityCircle = ({src, name, ...props}) => {
    return (
        <div className={classes.imgWrapper}>
            <img
                src={src}
                alt={name}
                className={classes.cityIcon}
            />
        </div>
    );
};

export default CityCircle;