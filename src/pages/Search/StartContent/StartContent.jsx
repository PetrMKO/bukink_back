import React, {useEffect, useState} from 'react';
import TopCities from "../../../components/TopCities/TopCities";
import getService from "../../../API/GetService";
import {useFetching} from "../../../hooks/useFetching";
import MyButton from "../../../components/UI/MyButton/MyButton";
import NotFoundPage from "../../NotFoundPage/NotFoundPage";

const StartContent = () => {

    const [cities, setCities] = useState([])//state городов для TopCities, должен поддтягиваться через запрос

    useEffect( () => {
        async function fetchData() {
            const res = await getService.getTopCities(5)
            setCities(res.data)
        }

        fetchData()

    }, [])

    return (
        <div>
            <TopCities cities={cities}/>
        </div>
    );
};

export default StartContent;