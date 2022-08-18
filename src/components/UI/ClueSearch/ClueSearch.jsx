import React, {useCallback, useEffect, useState} from 'react';
import classes from "./ClueSearch.module.css";
import ClueList from "./ClueList/ClueList";
import {useDispatch, useSelector} from "react-redux";
import {setCityAction} from "../../../store/searchFieldsReducer";

const ClueSearch = ({value, setValue, list, onChange, className, onBoxClick, onInputChange, ...props}) => {

    const dispatch = useDispatch()
    const city = useSelector(state => state.city.name)

    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        if(city === ''){
            setIsActive(false)
            setCityAction({
                id: '',
                name:''
            })
        }
        if(city !== ''){
            setIsActive(true)
        }
    }, [city])

    return (
        <div className={className ? className : classes.cityInputWrapper}>
            <input
                type="text"
                className={classes.cityInput}
                value={city}
                placeholder={"Куда желаете поѣхать"}
                onChange={(e) => {
                    onInputChange(e)
                }}
            />
            <ClueList
                value={value}
                list={list}
                active={isActive}
                setActive={setIsActive}
                onBoxClick = {onBoxClick}
            />
        </div>
    );
};

export default ClueSearch;