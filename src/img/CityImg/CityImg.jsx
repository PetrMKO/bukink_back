import React from 'react';

const CityImg = ({className, ...props}) => {
    return (
        <div>
            <img src="../img.png" alt="city" className={className}/>
        </div>

    );
};

export default CityImg;