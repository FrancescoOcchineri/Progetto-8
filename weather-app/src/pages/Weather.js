import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';

export default function Weather() {

    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    let { city } = useParams();

    useEffect(() => {
        axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&APPID=42ab23d59cd1509c5f58806b2e08bb07')
            .then(response => {
                console.log(response.data);
                setWeather(response.data);
            })
            .catch(error => {
                console.error('Errore nella chiamata API:', error);
                console.log(error.response);
                setWeather({});
            });

        axios
            .get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=42ab23d59cd1509c5f58806b2e08bb07`)
            .then((response) => {
                console.log(response.data);
                setForecast(response.data.list);
            })
            .catch((error) => {
                console.error('Errore nella chiamata API:', error);
                console.log(error.response);
                setForecast([]);
            });
    }, [city])

    return (
        <h1>{weather.name}</h1>
    )
}
