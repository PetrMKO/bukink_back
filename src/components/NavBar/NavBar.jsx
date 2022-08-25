import React from 'react';
import {guestRoutes} from "../../router/routes";
import {NavLink} from "react-router-dom";
import classes from "./NavBar.module.css";
import {mergeClasses} from "../../utils/classes";
import logo from "../../img/Logo/Logo";

const NavBar = () => {
    let activeStyle = {
       border: "1px solid aquamarine"
    };

    return (
        <div className={classes.navBar}>
            {guestRoutes.map(item => {
                if (item.name) {
                    return <NavLink
                        key={item.name}
                        to={'/' + item.path}
                        className={({isActive}) =>
                            isActive ? mergeClasses([classes.navLink, classes.active]) : classes.navLink
                        }>
                        {item.name}
                    </NavLink>
                }
            })}
        </div>
    );
};

export default NavBar;