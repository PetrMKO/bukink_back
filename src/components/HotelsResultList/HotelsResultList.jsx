import React, {useState} from 'react';
import classes from './HotelsResultList.module.css'
import HotelCard from "./HotelCard/HotelCard";
import HotelFilter from "./HotelFilter/HotelFilter";

const HotelsResultList = ({list, setList, filter, setFilter, range, ...props}) => {

    // const []

    return (
            <div className={classes.hotelResult}>
                <HotelFilter
                    value={filter}
                    onFilterChange={setFilter}
                    range={range}
                    options={[
                        {value: 'noSort', name: 'Не сортировать'},
                        {value: 'ratingAsc', name: 'По возрастанию рейтинга'},
                        {value: 'ratingDesc', name: 'По убыванию рейтинга'},
                        {value: 'priceAsc', name: 'По возрастанию цены'},
                        {value: 'priceDesc', name: 'По убыванию цены'},
                    ]}
                />
                <div className={classes.hotelList}>
                    {list.map((item, index) => [
                        <HotelCard
                            item={item}
                            key={`${item.id}`}
                        />
                    ])}
                </div>
            </div>
    );
};

export default HotelsResultList;