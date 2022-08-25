import React from 'react';
import classes from './UserPage.module.css'
import DefaultUserIcon from "../../img/DefaultUserIcon/DefaultUserIcon";
import MyButton from "../../components/UI/MyButton/MyButton";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {navigatorRoutes} from "./navgatorRoutes";
import NestedRouter from "../../components/NestedRouter/NestedRouter";
import {mergeClasses} from "../../utils/classes";

const UserPage = (props) => {
    const navigate = useNavigate()
    const user = {                              //Заглушка инофрмации о пользователе, пока пользователи не внесены в бд
        name: 'Имя пользователя',
        surname: 'Фамилия пользователя',
        email: 'Почтовый адресс',
        phone: '+78005553535'
    }


    return (
        <div className={classes.page}>
            <div className={classes.userInfoWrapper}>
                <div className={classes.iconBlock}>
                    <div className={classes.iconWrapper}>
                        <DefaultUserIcon className={classes.icon}/>
                    </div>
                </div>

                <div className={classes.userInfo}>
                    {Object.keys(user).map(key => <div className={classes.infoItem}>{key}: {user[key]}</div>)}
                </div>
            </div>
            <div className={classes.multiFunctionalBlock}>
                <div className={classes.navigatorWrapper}>
                    <div className={classes.navigator}>
                        {navigatorRoutes.map(item =>
                            <NavLink
                                to={item.path}
                                key={item.path}
                                className={({isActive}) =>
                                    isActive ? mergeClasses([classes.navLink, classes.active]) :classes.navLink}
                            >
                                {item.name}
                            </NavLink>)}
                    </div>
                </div>
                <NestedRouter routes={navigatorRoutes}/>
            </div>
        </div>
    );
};

export default UserPage;