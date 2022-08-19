import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import getService from "../../API/GetService";
import classes from "./HotelPage.module.css";
import MyButton from "../../components/UI/MyButton/MyButton";
import image from "../../components/UI/Image/Image";
import ImagesField from "../../components/UI/ImagesField/ImagesField";

const HotelPage = () => {
    const params = useParams()
    const [hotel, setHotel] = useState({})

    const ratingColors = [
        {maxRating: 0, color:'#f84d64'},
        {maxRating: 3, color:'#dca241'},
        {maxRating: 4, color:'#32ba43'},
        {maxRating: 5, color:'#32ba43'}
    ]

    const [ratingColor, setColor] = useState({})


    useEffect(() => {
        async function get() {
            return await getService.getHotelById(params.id)
        }
        get().then(data => {
            setHotel(data.data[0])

            const color = ratingColors.reduce((color, currentValue) => {

                if (+hotel.rating > currentValue.maxRating)
                    return currentValue.color
                return color
            })

            setColor(color)

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
                        <div className={classes.rating} style={{backgroundColor: ratingColor}}>
                            {hotel.rating}
                        </div>
                        <span>
                            Отзывов – {hotel.totalTextReviewCount}
                        </span>
                    </div>
                </div>
            </div>

            <ImagesField imagesArray={[
                {
                    "src": "https://avatars.mds.yandex.net/get-altay/4824927/2a00000180b7cf56ef3af4ee71c861c09cb7/XL",
                    "alt": "img"
                },
                {
                    "src": "https://avatars.mds.yandex.net/get-altay/4824927/2a00000180b7cf56ef3af4ee71c861c09cb7/XL",
                    "alt": "img"
                },
                {
                    "src": "https://avatars.mds.yandex.net/get-altay/4824927/2a00000180b7cf56ef3af4ee71c861c09cb7/XL",
                    "alt": "img"
                },
                {
                    "src": "https://avatars.mds.yandex.net/get-altay/4824927/2a00000180b7cf56ef3af4ee71c861c09cb7/XL",
                    "alt": "img"
                },
                {
                    "src": "https://avatars.mds.yandex.net/get-altay/4824927/2a00000180b7cf56ef3af4ee71c861c09cb7/XL",
                    "alt": "img"
                }
            ]}/>
        </div>
    );
};

export default HotelPage;