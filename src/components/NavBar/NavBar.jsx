import React from 'react';
import {guestRoutes} from "../../router/routes";
import {NavLink} from "react-router-dom";
import classes from "./NavBar.module.css";
import {mergeClasses} from "../../utils/classes";

const NavBar = () => {
    return (
        <div className={classes.navBar}>
            {guestRoutes.map(item => {
                if (item.name) {
                    return <NavLink
                        to={'/' + item.path}
                        className={classes.navLink}>
                        {item.name}
                    </NavLink>
                }
            })}
        </div>
    );
};

export default NavBar;