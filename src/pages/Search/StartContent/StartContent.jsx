import React, {useEffect, useState} from 'react';
import TopCities from "../../../components/TopCities/TopCities";
import getService from "../../../API/GetService";

import classes from "./StartContent.module.css";

const StartContent = () => {

    const [cities, setCities] = useState([])//state городов для TopCities, должен поддтягиваться через запрос

    useEffect( () => {
        async function fetchData(count) {
            const res = await getService.getTopCities(count)
            setCities(res.data)
        }

        fetchData(5)

    }, [])

    return (
        <div>
            <TopCities cities={cities}/>
            <div className={classes.whiteSpace}>
                Какой-то стартовый контент типа статей и тд.
            </div>
        </div>
    );
};

export default StartContent;