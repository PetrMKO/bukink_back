import React, {useMemo} from 'react';
import classes from './HotelFilter.module.css'
import MyButton from "../../UI/MyButton/MyButton";
import {mergeClasses} from "../../../utils/classes";

const HotelFilter = ({value, onFilterChange, range, options, ...props}) => {

    return (
        <div className={classes.filter}>
            <select
                className={mergeClasses([classes.filterInput, classes.sortQuery])}
                name=""
                id=""
                value={value.sort}
                onChange={(e) => onFilterChange({...value, sort: e.target.value})}
            >
                <option value="">
                    Сортировка
                </option>

                {options.map((item) =>
                    <option
                        key={item.value}
                        value={item.value}>
                        {item.name}
                    </option>
                )}
            </select>
            <br/>
            Диапазон цены
            <div>
                {range.priceStart}
                -
                {range.priceEnd}
            </div>
            <div>
                <input
                    className={mergeClasses([classes.filterInput, classes.priceFilter])}
                    type="text"
                    value={value.priceStart}
                    onChange={event => onFilterChange({...value, priceStart: +event.target.value})}
                />
                -
                <input
                    className={mergeClasses([classes.filterInput, classes.priceFilter])}
                    type="text"
                    value={value.priceEnd}
                    onChange={event => onFilterChange({...value, priceEnd: +event.target.value})}
                />
            </div>
            <br/>
            <div style={{display: 'flex', flexDirection:'row', alignItems: 'center'}}>
                <div>
                    Рейтинг не менее (мимнимум - {range.rating})
                </div>
                <div>
                    <input
                        className={mergeClasses([classes.filterInput, classes.ratingFilter])}
                        type="text"
                        value={value.rating}
                        onChange={event => onFilterChange({...value, rating: +event.target.value})}
                    />
                </div>
            </div>

            <MyButton onClick ={(e) => {
                e.preventDefault();

            }}>
                Применить фиильтр
            </MyButton>
        </div>
    );
};

export default HotelFilter;