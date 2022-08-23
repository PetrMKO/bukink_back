import React from 'react';
import classes from './Header.module.css'
import NavBar from "../NavBar/NavBar";
import Logo from "../../img/Logo/Logo";
const Header = () => {
    return (
        <div className={classes.header}>
            <Logo className={classes.logo}/>
            <NavBar/>
        </div>
    );
};

export default Header;