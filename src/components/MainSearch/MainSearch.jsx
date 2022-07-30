import React, {forwardRef, useState} from 'react';
import classes from "./MainSearch.module.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import PropTypes from 'prop-types';
import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";

const MainSearch = () => {
    const [startDate, setStartDate] = useState(new Date())
    const ExampleCustomInput = forwardRef(({ value, onClick }, ref) => (
        <button className={classes.datePickerInput} onClick={onClick} ref={ref}>
            {value}
        </button>
    ));

    return (
        <div className={classes.searchWrapper}>
            <form action="#" className={classes.searchForm}>
                <MyInput/>
                <DatePicker
                    className={classes.datePickerWrapper}
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    customInput={<ExampleCustomInput/>}
                />
            </form>
        </div>
    );
};

export default MainSearch;