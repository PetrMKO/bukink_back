import React, {useMemo, useState} from 'react';
import MainSearch from "../../components/MainSearch/MainSearch";
import TopCities from "../../components/TopCities/TopCities";
import StartContent from "./StartContent/StartContent";
import getService from "../../API/GetService";
import {useDispatch, useSelector} from "react-redux";
import HotelsResultList from "../../components/HotelsResultList/HotelsResultList";
import {useSortedAndFilteredHotels} from "../../hooks/useHotels";
import hotelCard from "../../components/HotelsResultList/HotelCard/HotelCard";
const SearchPage = () => {

    const dispatch = useDispatch()
    const searchValue = useSelector(state => state)
    const [hotels, setHotels] = useState([])
    const [filter, setFilter] = useState({sort: "", priceStart: 0, priceEnd: 0, rating: 0})
    const [filterRange, setFilterRange] = useState({priceStart: 0, priceEnd: 0, rating: 0})
    const filteredHotels = useSortedAndFilteredHotels(hotels, filter)
    console.log(filter)
    console.log('filtered')
    console.log(filteredHotels)


    const  searchHotels = async () => {
        let resultMassive = await getService.getHotels(searchValue)
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


    return (
        <div>
            <MainSearch onClick={searchHotels}/>
            {hotels.length === 0
                ? <StartContent/>
                : <HotelsResultList
                    list={filteredHotels}
                    setList={setHotels}
                    filter={filter}
                    setFilter={setFilter}
                    range={filterRange}
                  />
            }
        </div>
    );
};

export default SearchPage;