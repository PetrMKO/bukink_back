import React, {useState} from 'react';
import classes from './ClueBlock.module.css';
import {useDispatch, useSelector} from "react-redux";

const ClueBlock = ({city,set, ...props}) => {
    const [cityObj, setCityObj] = useState({})

    const dispatch = useDispatch()
    const cityValue = useSelector(state => state)

    return (
        <div className={classes.clueWrapper}
            onClick={event => {
                dispatch({type: "SET_CITY", payload: {
                        id:city.id,
                        name: city.name
                    }})
                set(false);
                console.log(cityValue)

            }}
        >
            <div className={classes.city}>{city.name}</div>
            <div className={classes.country}>{city.country}</div>
        </div>
    );
};

export default ClueBlock;