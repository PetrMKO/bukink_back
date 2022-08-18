import React from 'react';
import classes from "./HotelCard.module.css";
import CityImg from "../../../img/CityImg";
const HotelCard = ({item,...props}) => {
    return (
        <div className={classes.hotelCard}>
            <div className={classes.hotelIcon}>
                {/*<CityImg className={classes.cityImg}/>
                    Это должно было быть дефолтное изображение, но у меня не получилось его подключить
                */}
                <img src={item.image} alt="HotelIcon" className={classes.cityImg}/>
            </div>

            <div className={classes.hotelInfo}>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                {item.name}
                            </td>

                        </tr>
                        <tr>
                            <td>
                                {item.address.replace('Россия, Москва, ', '')}
                            </td>
                        </tr>
                        <tr>
                            <td>
                                {item.location}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div className={classes.hotelRating}>
                <table>
                    <tbody>
                    <tr>
                        <td>
                            Рейтинг {item.rating}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Цена {item.price}
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default HotelCard;