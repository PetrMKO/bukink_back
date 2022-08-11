import React, {useState} from 'react';
import classes from "./Auth.module.css";
import MyInput from "../../components/UI/MyInput/MyInput";
import MyButton from "../../components/UI/MyButton/MyButton";
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
                            <MyButton>Вход</MyButton>
                        </form>
                    </div>
                    <div className={classes.registration}>
                        <div className={classes.header} onClick={() => console.log("hjh")}>
                            Регистрация
                        </div>
                        <form className={classes.content}>
                            <MyInput type="text" placeholder="Почта"/>
                            <MyInput type="password" placeholder="Пароль"/>
                            <MyInput type="password" placeholder="Повторите пароль"/>
                            <MyButton>Регистрация</MyButton>
                        </form>
                    </div>
                </div>
                <div className={blockState ? `${classes.buttonBlock} ${classes.blockLeft}` : `${classes.buttonBlock} ${classes.blockRight}`}>
                    <MyButton
                        className={classes.changeButton}
                        onClick={() => changeBlockState(!blockState)}>
                        {blockState ? "Вход" : "Регистрация"}
                    </MyButton>
                </div>
            </div>
        </div>
    );
};

export default Auth;