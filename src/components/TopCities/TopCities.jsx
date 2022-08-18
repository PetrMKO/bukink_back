import React, {useState} from 'react';
import classes from "./TopCities.module.css";
import CityCircle from "../UI/CityCircle/CityCircle";
const TopCities = ({cities, setCities, ...props}) => {


    return (
        <div className={classes.topCitiesWrapper}>
            <div className={classes.cities}>
                {cities.map(value =>
                    <CityCircle src={value.src} key={value.key}/>
                )}
            </div>
        </div>
    );
};

export default TopCities;