import React, {forwardRef, useState} from 'react';
import classes from './DateInput.module.css'
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.module.css"
import DatePicker from "react-datepicker";
import DateImg from "../../../img/DateImg/dateImg";


    const DateInput = forwardRef((props, ref) => (
        <div className={classes.datePickerInputWrapper}
             ref={ref}
             onClick={props.onClick}
        >
            <div className={classes.datePickerInput}>
                {props.value ? props.value : props.name}
            </div>
            <div>
                {props.value ? <DateImg white={true}/> : <DateImg white={false}/>}
            </div>
        </div>
    ));

export default DateInput;