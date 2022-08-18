import React from 'react';
import svg from './NotFound.svg'

const NotFound = (props) => {
    return (
        <div >
            <img
                src={svg}
                alt='Страница не найдена'
                style={{width: '50%', height: '50%'}}
            />
        </div>
    );
};

export default NotFound;