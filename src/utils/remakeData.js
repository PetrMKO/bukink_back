import axios from "axios";

export default async function remakeHotels(number) {

    const response = await axios.get('http://localhost:3030/hotels').then(data => {

        const hotels = data.data.map((item, index) => {

            const newItem = {
                id: `h${index}`,
                address: item.hotel.address,
                image: item.hotel.images[0].urlTemplate.replace('%s', 'XL'),
                location: item.hotel.location,
                name: item.hotel.name,
                totalTextReviewCount: item.hotel.totalTextReviewCount,
                rating: item.hotel.rating,
                price: item.offers[0].price.value
            }
            return newItem;
        })


        axios({
            method: 'post',
            url: 'http://localhost:3030/newHotels',
            data: {
                hotels: hotels
            }
        })
    })

    // console.log(data.js);
    return response;
}