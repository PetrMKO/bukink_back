import React from 'react';
import svg from './NotFound.svg'

const NotFound = (props) => {
    return (
            <img
                src={svg}
                alt='Страница не найдена'
                style={{height: "inherit"}}
            />
    );
};

export default NotFound;