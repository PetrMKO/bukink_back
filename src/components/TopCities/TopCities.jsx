import React, {useState} from 'react';
import classes from "./TopCities.module.css";
import CityCircle from "../UI/CityCircle/CityCircle";
const TopCities = () => {
    const [cities, setCities] = useState(
        [{src:'https://avatars.mds.yandex.net/get-travel-hotels/2456341/region_image_213_0/offer-travel-desktop', name: 'Москва', key: 'i1'},
            {src:'https://avatars.mds.yandex.net/get-travel-hotels/2456341/region_image_2_0/offer-travel-desktop', name: 'Санкт-Петербург', key: 'i2'},
            {src:'https://avatars.mds.yandex.net/get-travel-hotels/2000187/region_image_43_0/offer-travel-desktop', name:'Казань', key:'i3'},
            {src: 'https://avatars.mds.yandex.net/get-travel-hotels/2409838/region_image_39_0/offer-travel-desktop', name:'Ростов на дону', key: 'i4'},
            {src: 'https://avatars.mds.yandex.net/get-travel-hotels/2409838/region_image_47_0/offer-travel-desktop', name: 'Нижний новгород', key:'i5'},
            {src: 'https://avatars.mds.yandex.net/get-travel-hotels/2409838/region_image_239_1/offer-travel-desktop', name: 'Сочи', key:'i6'},
            {src: 'https://avatars.mds.yandex.net/get-travel-hotels/2000187/region_image_193_0/offer-travel-desktop', name: 'Воронеж', key:'i7'},
            {src: 'https://avatars.mds.yandex.net/get-travel-hotels/2409838/region_image_16_0/offer-travel-desktop', name: 'Ярославль', key:'i8'}])


    return (
        <div className={classes.topCitiesWrapper}>
            <div className={classes.cities}>
                {cities.map(value =>
                    <CityCircle src={value.src}/>
                )}
            </div>
        </div>
    );
};

export default TopCities;