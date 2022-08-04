import React, {forwardRef, useState} from 'react';
import classes from './DateInput.module.css'
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.module.css"
import DatePicker from "react-datepicker";
import DateImg from "../../../img/dateImg";


    const ExampleCustomInput = forwardRef((props, ref) => (
        <div className={classes.datePickerInputWrapper}
             ref={ref}
             onClick={props.onClick}
        >
                {/*<input*/}
                {/*    */}
                {/*    type="text"*/}
                {/*    value={props.value}*/}
                {/*    placeholder={props.name}*/}
                {/*    onChange={props.onChange}*/}
                {/*/>*/}
            <div className={classes.datePickerInput}>
                {props.value ? props.value : props.placeholder}
            </div>
            <div>
                {props.value ? <DateImg white={true}/> : <DateImg white={false}/>}
            </div>
        </div>
    ));

export default ExampleCustomInput;