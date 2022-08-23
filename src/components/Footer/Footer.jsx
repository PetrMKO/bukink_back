import React from 'react';
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={classes.container}>
                <div className={classes.info}>
                    <table>
                        <thead>
                            <tr>
                                <th>Заголовок 1 столбца</th>
                                <th>Заголовок 2 столбца</th>
                                <th>Заголовок 3 столбца</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    <li>Пункт 1</li>
                                    <li>Пункт 2</li>
                                    <li>Пункт 3</li>
                                    <li>Пункт 4</li>
                                </td>
                                <td>
                                    <li>Пункт 1</li>
                                    <li>Пункт 2</li>
                                    <li>Пункт 3</li>
                                    <li>Пункт 4</li>
                                </td>
                                <td>
                                    <li>Пункт 1</li>
                                    <li>Пункт 2</li>
                                    <li>Пункт 3</li>
                                    <li>Пункт 4</li>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={classes.subContainer}>
                Данный сайт является учебным проектом <br/>
                <ul>Ссылки на Github:</ul>
                <li>
                    <a href="https://github.com/PetrMKO/bukink_front" target="_blank">
                        Frontend
                    </a>
                </li>

                <li>
                    <a href="https://github.com/semwett0301/bukink_back" target="_blank">
                        Backend
                    </a>
                </li>
            </div>
        </footer>
    );
};

export default Footer;