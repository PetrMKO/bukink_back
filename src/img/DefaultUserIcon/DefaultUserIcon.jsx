import React from 'react';
import img from './UserIcon.png'

const DefaultUserIcon = ({className,...props}) => {
    return (
        <img
            className={className ? className : undefined}
            style={className ? {} : {objectFit: 'cover'}}
            src={img}
            alt="user"
        />
    );
};

export default DefaultUserIcon;