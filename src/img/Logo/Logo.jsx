import React from 'react';
import img from './WhiteLogo.png'
import classes from './Logo.module.css'

const Logo = ({className, ...props}) => {
    return (
        <div className={className}>
            <img
                className={classes.img}
                src={img} alt="logo"/>
        </div>
    );
};

export default Logo;