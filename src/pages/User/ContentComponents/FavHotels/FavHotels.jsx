import React, {useEffect, useState} from 'react';
import classes from './FavHotels.css'
import HotelsResultList from "../../../../components/HotelsResultList/HotelsResultList";
import {useSelector} from "react-redux";
import {useSortedAndFilteredHotels} from "../../../../hooks/useHotels";
import getService from "../../../../API/GetService";

const FavHotels = () => {
    const searchValue = useSelector(state => state)
    const [hotels, setHotels] = useState([])
    const [filter, setFilter] = useState({sort: "", priceStart: 0, priceEnd: 0, rating: 0})
    const [filterRange, setFilterRange] = useState({priceStart: 0, priceEnd: 0, rating: 0})
    const filteredHotels = useSortedAndFilteredHotels(hotels, filter)


    useEffect(() => {
        const  searchHotels = async () => {
            let resultMassive = await getService.getNumberOfHotels(5)

            setHotels(resultMassive.data)

            if(resultMassive.data.length > 0){
                let minPrice = resultMassive.data[0].price
                let maxPrice = resultMassive.data[0].price
                let minRating = resultMassive.data[0].rating
                console.log(minRating)
                resultMassive.data.forEach((item) => {
                    if (minPrice > item.price) minPrice = item.price
                    if (maxPrice < item.price) maxPrice = item.price
                    if (minRating > item.rating) minRating = item.rating
                })
                setFilterRange({priceStart: minPrice, priceEnd: maxPrice, rating: minRating})
                setFilter({...filter, priceStart: minPrice, priceEnd: maxPrice, rating: minRating})

            }
        }
        searchHotels()
    }, [])


    return (
        <div className={classes.tripComponent}>
            <HotelsResultList
                list={filteredHotels}
                setList={setHotels}
                filter={filter}
                setFilter={setFilter}
                range={filterRange}
            />
        </div>
    );
};

export default FavHotels;