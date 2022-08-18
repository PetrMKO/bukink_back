import React, {useEffect, useState} from 'react';
import classes from "./MainSearch.module.css"
import "react-datepicker/dist/react-datepicker.css";
import DateInput from "../UI/DateInput/DateInput";
import DatePicker from "react-datepicker";
import SearchButton from "../UI/SearchButton/SearchButton";
import ClueSearch from "../UI/ClueSearch/ClueSearch";
import getService from "../../API/GetService";
import {useFetching} from "../../hooks/useFetching";
import {useDispatch, useSelector} from "react-redux";
import {setCityAction} from "../../store/searchFieldsReducer";

const MainSearch = ({onClick, ...props}) => {

    const [startDate, setStartDate] = useState()
    const [endDate, setEndDate] = useState()

    const [city, setCityObj] = useState({})

    const [clueCities, setClueCities] = useState([
        {id: "123", name: "HHHH"}
    ])

    const dispatch = useDispatch()
    const searchValue = useSelector(state => state)


    const [fetchClue, isLoading, error] = useFetching(async (part) => {
        // console.log(part);
        const response = await getService.getCLueCities(part);
        setClueCities(response.data)
    })
    useEffect(()=> {
        // console.log(searchValue.city.name)
        fetchClue(searchValue.city.name)
    }, [searchValue])



    const setCityWithID = (city) => {
        dispatch(setCityAction(city))
    }

    const setCityWithoutID = (e) =>{
        const city = {
            id: "",
            name: e.target.value
        }
        dispatch(setCityAction(city))
    }


    return (
        <div className={classes.searchWrapper}>
            <div className={classes.searchForm}>
                <ClueSearch
                    value={city}
                    onBoxClick={setCityWithID}
                    onInputChange={setCityWithoutID}
                    list={clueCities}
                />
                <div className={classes.datePickerWrapper}>
                    <DatePicker
                        dateFormat ={"dd.MM.yyyy"}
                        isClearable={!!startDate}
                        selected={startDate}
                        onChange={(date) => {
                            setStartDate(date)
                            dispatch({type:"SET_CHECKIN", payload: date})
                        }}
                        selectsStart
                        startDate={startDate}
                        endDate={endDate}
                        name={"Заезд"}
                        customInput={<DateInput/>}
                    />
                </div>

                <div className={classes.datePickerWrapper}>
                    <DatePicker
                        dateFormat ={"dd.MM.yyyy"}
                        isClearable={!!endDate}
                        selected={endDate}
                        onChange={(date)=>{
                            setEndDate(date)
                            dispatch({type:"SET_CHECKOUT", payload: date})
                        }}
                        selectsEnd
                        startDate={startDate}
                        endDate={endDate}
                        minDate={startDate}
                        name={"Выезд"}
                        customInput={<DateInput/>}
                    />
                </div>
                <SearchButton onClick={onClick}>
                    Поехали
                </SearchButton>
            </div>
        </div>
    );
};

export default MainSearch;