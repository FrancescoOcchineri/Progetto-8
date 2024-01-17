import React, { useState, useEffect } from 'react';
import MainSearchComponent from '../components/MainSearchComponent';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBRow,
} from "mdb-react-ui-kit";

export default function HomePage() {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleClick = () => {
        navigate(`/weather/${city}`);
    }

    const successCallback = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        localStorage.setItem('userPosition', JSON.stringify({ latitude, longitude }));

        getWeatherForecast(latitude, longitude);
    }

    const errorCallback = (error) => {
        console.error("Error getting location:", error);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }, []);

    function getWeatherForecast(latitude, longitude) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=42ab23d59cd1509c5f58806b2e08bb07`)
            .then(response => {
                console.log(response.data);
                setWeather(response.data);
            })
            .catch(error => {
                console.error('Errore nella chiamata API (condizioni attuali):', error);
                console.log(error.response);
                setWeather({});
            });

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=42ab23d59cd1509c5f58806b2e08bb07`)
            .then(response => {
                console.log(response.data);
                setForecast(response.data.list);
            })
            .catch(error => {
                console.error('Errore nella chiamata API (previsioni future):', error);
                console.log(error.response);
                setForecast([]);
            });
    }

    const kelvinToCelsius = (kelvin) => {
        return Math.floor(kelvin - 273.15);
    }

    return (
        <>
            <MainSearchComponent handleChange={handleChange} handleClick={handleClick} />
            {weather && forecast && weather.main && (
                <>
                    <section>
                        <MDBContainer style={{ marginTop: "8rem" }}>
                            <MDBRow
                                className="justify-content-center align-items-center h-100"
                                style={{ color: "#282828" }}
                            >
                                <MDBCol md="9" lg="7" xl="5">
                                    <MDBCard
                                        className="mb-4 gradient-custom"
                                        style={{ borderRadius: "25px" }}
                                    >
                                        <MDBCardBody className="p-4">
                                            <div className="d-flex justify-content-between pb-2">
                                                <div>
                                                    <h2 className="display-2">
                                                        <strong>{kelvinToCelsius(weather.main.temp).toFixed(0)} °C</strong>
                                                    </h2>
                                                    <p className="text-muted mb-0">{weather.name}, {weather.sys.country}</p>
                                                </div>
                                                <div>
                                                    <p className="mb-0">Min: {kelvinToCelsius(weather.main.temp_min).toFixed(0)} °C</p>
                                                    <p className="mb-0">Max: {kelvinToCelsius(weather.main.temp_max).toFixed(0)} °C</p>
                                                    <br />
                                                    <p>Humidity: {weather.main.humidity}%</p>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
                                        <MDBCardBody className="p-4">
                                            <div className="d-flex justify-content-around text-center pb-3 pt-2">
                                                {forecast.slice(0, 6).map((f, index) => (
                                                    <div key={index} className="flex-column">
                                                        <p className="small">
                                                            <strong>{kelvinToCelsius(f.main.temp).toFixed(0)}°C</strong>
                                                        </p>
                                                        <MDBIcon
                                                            fas
                                                            icon="sun"
                                                            size="2x"
                                                            className="mb-3"
                                                            style={{ color: "#ddd" }}
                                                        />
                                                        <p
                                                            className="mb-0 fw-bold"
                                                            style={{ fontSize: ".65rem" }}
                                                        >
                                                            {f.dt_txt}
                                                        </p>
                                                    </div>
                                                ))}
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
                                        <MDBCardBody className="p-4">
                                            <div className="d-flex justify-content-around text-center pb-3 pt-2">
                                                <div className="flex-column">
                                                    <p className="small">
                                                        <strong>{kelvinToCelsius(forecast[2].main.temp).toFixed(0)}°C</strong>
                                                    </p>
                                                    <MDBIcon
                                                        fas
                                                        icon="sun"
                                                        size="2x"
                                                        className="mb-3"
                                                        style={{ color: "#ddd" }}
                                                    />
                                                    <p className="mb-0">
                                                        <strong>Mon</strong>
                                                    </p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small">
                                                        <strong></strong>
                                                    </p>
                                                    <MDBIcon
                                                        fas
                                                        icon="sun"
                                                        size="2x"
                                                        className="mb-3"
                                                        style={{ color: "#ddd" }}
                                                    />
                                                    <p className="mb-0">
                                                        <strong>Tue</strong>
                                                    </p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small">
                                                        <strong>16°C</strong>
                                                    </p>
                                                    <MDBIcon
                                                        fas
                                                        icon="cloud"
                                                        size="2x"
                                                        className="mb-3"
                                                        style={{ color: "#ddd" }}
                                                    />
                                                    <p className="mb-0">
                                                        <strong>Wed</strong>
                                                    </p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small">
                                                        <strong>17°C</strong>
                                                    </p>
                                                    <MDBIcon
                                                        fas
                                                        icon="cloud"
                                                        size="2x"
                                                        className="mb-3"
                                                        style={{ color: "#ddd" }}
                                                    />
                                                    <p className="mb-0">
                                                        <strong>Thu</strong>
                                                    </p>
                                                </div>
                                                <div className="flex-column">
                                                    <p className="small">
                                                        <strong>18°C</strong>
                                                    </p>
                                                    <MDBIcon
                                                        fas
                                                        icon="cloud-showers-heavy"
                                                        size="2x"
                                                        className="mb-3"
                                                        style={{ color: "#ddd" }}
                                                    />
                                                    <p className="mb-0">
                                                        <strong>Fri</strong>
                                                    </p>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                </>
            )}
        </>
    )
}


