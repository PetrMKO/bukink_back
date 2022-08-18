import React from 'react';
import classes from './Header.module.css'
import NavBar from "../NavBar/NavBar";
const Header = () => {
    return (
        <div className={classes.header}>
            <NavBar/>
        </div>
    );
};

export default Header;