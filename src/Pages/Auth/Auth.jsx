import React, {useState} from 'react';
import classes from "./Auth.module.css";
import MyInput from "../../components/UI/MyInput/MyInput";
const Auth = () => {

    const [blockState, changeBlockState] = useState(true)

    return (
        <div className={classes.contentWrapper}>
            <div className={classes.blockWrapper}>
                <div className={classes.auth_registration}>
                    <div className={classes.auth}>
                        <div className={classes.header}>
                            Вход
                        </div>
                        <form className={classes.content}>
                            <MyInput type="text" placeholder="Почта"/>
                            <MyInput type="password" placeholder="Пароль"/>
                            <button>Вход</button>
                        </form>
                    </div>
                    <div className={classes.registration}>
                        <div className={classes.header}>
                            Регистрация
                        </div>
                        <form className={classes.content}>
                            <MyInput type="text" placeholder="Почта"/>
                            <MyInput type="password" placeholder="Пароль"/>
                            <MyInput type="password" placeholder="Повторите пароль"/>
                            <button>Регистрация</button>
                        </form>
                    </div>
                </div>
                <div className={blockState ? `${classes.buttonBlock} ${classes.blockLeft}` : `${classes.buttonBlock} ${classes.blockRight}`}>
                    <button
                        className={classes.changeButton}
                        onClick={() => changeBlockState(!blockState)}>
                        {blockState ? "Вход" : "Регистрация"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Auth;