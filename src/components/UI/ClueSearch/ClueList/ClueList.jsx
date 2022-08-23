import React, {useState} from 'react';
import classes from "./ClueList.module.css";
import {mergeClasses} from "../../../../utils/classes";
import ClueBlock from "../ClueBlock/ClueBlock";

const ClueList = ({list, active, setIsActive, onBoxClick, ...props}) => {

    const visibleCLass = mergeClasses([classes.cityInputMenu, classes.visible])
    const hiddenCLass = mergeClasses([classes.cityInputMenu, classes.hidden])

    return (
        <div
            className={list.length && active ? visibleCLass : hiddenCLass}
        >
            {list.map(value =>
                <ClueBlock
                    onBoxClick={onBoxClick}
                    city={value}
                    setIsActive={setIsActive}
                />
            )}
        </div>
    );
};

export default ClueList;