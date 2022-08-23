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

    const dispatch = useDispatch()
    const searchValue = useSelector(state => state)

    const [clueCities, setClueCities] = useState([])

    const [fetchClue, isLoading, error] = useFetching(async (part) => {
        const response = await getService.getCLueCities(part);
        setClueCities(response.data)
    })

    useEffect(()=> {
        if (searchValue.city.id === null && searchValue.city.name !== ""){
            fetchClue(searchValue.city.name)
        }
        if (searchValue.city.id !== null){
            setClueCities([])
        }
    }, [searchValue.city.name])



    const setCityWithID = (city) => {
        dispatch(setCityAction(city))
    }

    const setCityWithoutID = (value) =>{
        const city = {
            id: null,
            name: value
        }
        dispatch(setCityAction(city))
    }


    return (
        <div className={classes.searchWrapper}>
            <div className={classes.searchForm}>
                <ClueSearch
                    inputValue={searchValue.city.name}
                    onBoxClick={setCityWithID}
                    setInputValue={setCityWithoutID}
                    list={clueCities}
                />
                <div className={classes.datePickerWrapper}>
                    <DatePicker
                        dateFormat ={"dd.MM.yyyy"}
                        isClearable={!!searchValue.checkIn}
                        selected={searchValue.checkIn}
                        onChange={(date) => {
                            dispatch({type:"SET_CHECKIN", payload: date})
                        }}
                        selectsStart
                        startDate={searchValue.checkIn}
                        endDate={searchValue.checkOut}
                        name={"Заезд"}
                        customInput={<DateInput/>}
                    />
                </div>

                <div className={classes.datePickerWrapper}>
                    <DatePicker
                        dateFormat ={"dd.MM.yyyy"}
                        isClearable={!!searchValue.checkOut}
                        selected={searchValue.checkOut}
                        onChange={(date)=>{
                            dispatch({type:"SET_CHECKOUT", payload: date})
                        }}
                        selectsEnd
                        startDate={searchValue.checkIn}
                        endDate={searchValue.checkOut}
                        minDate={searchValue.checkIn}
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