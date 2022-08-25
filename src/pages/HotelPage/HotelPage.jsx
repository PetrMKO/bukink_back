import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import getService from "../../API/GetService";
import classes from "./HotelPage.module.css";
import ImagesField from "../../components/UI/ImagesField/ImagesField";
import {useSelector} from "react-redux";

const HotelPage = () => {
    
    const params = useParams()
    const [hotel, setHotel] = useState({})

    const [images, setImages] = useState([]);

    const ratingColors = [
        {maxRating: 0, backgroundColor:'#f84d64'},
        {maxRating: 2, backgroundColor:'#dca241'},
        {maxRating: 4, backgroundColor:'#32ba43'},
        {maxRating: 5, backgroundColor:'#32ba43'}
    ]

    const [ratingColor, setColor] = useState(null)


    useEffect(() => {
        async function get() {
            return await getService.getHotelById(params.id)
        }
        get().then(data => {
            setHotel(data.data[0])

            setImages([{src: data.data[0].image}, {src: data.data[0].image}, {src: data.data[0].image}, {src: data.data[0].image}, {src: data.data[0].image}])

            const color = ratingColors.reduce((color, currentValue) => {

                if (+hotel.rating < currentValue.maxRating)
                    return currentValue.color
                return color
            })

            console.log(color);
            setColor({backgroundColor: color})

        }).then(() => {
            console.log(ratingColor);
        })
    }, [])

    return (
        <div className={classes.page}>
            <div className={classes.title}>
                <div className={classes.leftColumn}>
                    <h2 className={classes.hotelName}>
                        {hotel.name}
                    </h2>
                    <div className={classes.hotelAddress}>
                        {hotel.address}
                    </div>
                </div>
                <div className={classes.rightColumn}>
                    <div className={classes.ratingWrapper}>
                        <div className={classes.rating} style={ratingColor}>
                            {hotel.rating}
                        </div>
                        <span>
                            Отзывов – {hotel.totalTextReviewCount}
                        </span>
                    </div>
                </div>
            </div>

            {images.length > 0 ?
                <ImagesField imagesArray={images}/>
                : <div></div>
            }

        </div>
    );
};

export default HotelPage;