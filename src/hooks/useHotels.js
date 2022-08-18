import {useMemo} from "react";

export const useSortedAndFilteredHotels = (list, filter) => {

    return useMemo(() => {

        let sortedAndFilteredHotels = [...list].filter(item => filterFunction(item, filter))

        switch (filter.sort) {
            case 'ratingAsc':
                return sortedAndFilteredHotels.sort((a, b) => a.rating - b.rating)
            case 'ratingDesc':
                return sortedAndFilteredHotels.sort((a, b) => b.rating - a.rating)
            case 'priceAsc':
                return sortedAndFilteredHotels.sort((a, b) => a.price - b.price)
            case 'priceDesc':
                return sortedAndFilteredHotels.sort((a, b) => b.price - a.price)
            case 'noSort':
                return sortedAndFilteredHotels
            default :
                return sortedAndFilteredHotels
        }

    }, [list, filter])
}


export const filterFunction = (item, filter) => {

    const ratingFilter = +item.rating >= +filter.rating
    const minPriceRating = +item.price >= +filter.priceStart
    const maxPriceRating = +item.price <= +filter.priceEnd

    return ratingFilter && minPriceRating && maxPriceRating
}


// {value: 'ratingAsc', name: 'По возрастанию рейтинга'},
// {value: 'ratingDesc', name: 'По убыванию рейтинга'},
// {value: 'priceAsc', name: 'По возрастанию цены'},
// {value: 'priceDesc', name: 'По убыванию цены'},