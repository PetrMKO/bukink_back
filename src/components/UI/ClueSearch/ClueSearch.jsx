import React, {useCallback, useEffect, useState} from 'react';
import classes from "./ClueSearch.module.css";
import ClueList from "./ClueList/ClueList";


const ClueSearch = ({inputValue, setInputValue, list, onBoxClick, className, ...props}) => {

    const [isActive, setIsActive] = useState(true)


    useEffect(() => {
        if(inputValue === ""){
            setIsActive(false)
        }

        if(inputValue !== ""){
            setIsActive(true)
        }
    },[inputValue])

    return (
        <div className={className ? className : classes.cityInputWrapper}>
            <input
                type="text"
                className={classes.cityInput}
                value={inputValue}
                placeholder={"Куда желаете поѣхать"}
                onChange={(e) => {
                    setInputValue(e.target.value)
                }}
            />
            <ClueList
                list={list}
                active={isActive}
                setIsActive={setIsActive}
                onBoxClick = {onBoxClick}
            />
        </div>
    );
};

export default ClueSearch;