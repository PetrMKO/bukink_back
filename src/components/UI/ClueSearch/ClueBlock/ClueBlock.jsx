import React, {useState} from 'react';
import classes from './ClueBlock.module.css';
import {useDispatch, useSelector} from "react-redux";

const ClueBlock = ({city,set, onBoxClick, ...props}) => {


    return (
        <div className={classes.clueWrapper}
            onClick={() => {
                onBoxClick(city)
                set(false)
            }}
        >
            <div className={classes.city}>{city.name}</div>
            <div className={classes.country}>{city.id}</div>
        </div>
    );
};

export default ClueBlock;