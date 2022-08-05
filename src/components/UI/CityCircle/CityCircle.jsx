import React from 'react';
import classes from "./CityCircle.module.css";

const CityCircle = ({src, name, ...props}) => {
    return (
        <div className={classes.imgWrapper}>
            <div className={classes.imgSecondWrapper}>
                <img
                    src={src}
                    alt={name}
                    className={classes.cityIcon}
                />
            </div>

        </div>
    );
};

export default CityCircle;