import React, {useState} from 'react';
import classes from "./ClueList.module.css";
import {mergeClasses} from "../../../utils/classes";
import ClueBlock from "../ClueBlock/ClueBlock";

const ClueList = ({value, list, active, setActive, ...props}) => {
    const visibleCLass = mergeClasses([classes.cityInputMenu, classes.visible])
    const hiddenCLass = mergeClasses([classes.cityInputMenu, classes.hidden])



    return (
        <div
            onClick={(event)=> {
                event.stopPropagation()
            }}
            className={value && list.length && active? visibleCLass : hiddenCLass}
        >
            {list.map(value => <ClueBlock city={value} set={setActive}/>)}
        </div>
    );
};

export default ClueList;