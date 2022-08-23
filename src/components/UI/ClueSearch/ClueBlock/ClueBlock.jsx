import React, {useState} from 'react';
import classes from './ClueBlock.module.css';
import {useDispatch, useSelector} from "react-redux";

const ClueBlock = ({city, setIsActive, onBoxClick, ...props}) => {

    console.log(city);
    return (
        <div className={classes.clueWrapper}
            onClick={() => {
                onBoxClick(city)
                setIsActive(false)
            }}
        >
            <div className={classes.city}>{city.name}</div>
            <div className={classes.country}>{city.country}</div>
        </div>
    );
};

export default ClueBlock;