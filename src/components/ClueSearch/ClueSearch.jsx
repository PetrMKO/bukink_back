import React, {useState} from 'react';
import classes from "./ClueSearch.module.css";
import ClueList from "./ClueList/ClueList";
import {useDispatch, useSelector} from "react-redux";

const ClueSearch = ({value, setValue, list, onChange,...props}) => {
    console.log(list)

    const dispatch = useDispatch()
    const city = useSelector(state => state.city.name)
    const [isActive, setIsActive] = useState(true)
    return (
        <div className={classes.cityInputWrapper}>
            <input
                type="text"
                className={classes.cityInput}
                value={city}
                placeholder={"Куда желаете поѣхать"}
                onChange={(e)=>{
                    dispatch({type:"SET_CITY", payload: {id:"", name: e.target.value}})
                    setIsActive(true)
                }}
            />
            <ClueList
                value={value}
                list={list}
                active={isActive}
                setActive={setIsActive}
            />
        </div>
    );
};

export default ClueSearch;