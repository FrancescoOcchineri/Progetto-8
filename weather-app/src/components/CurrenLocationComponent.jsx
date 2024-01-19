import React, { useState, useEffect } from 'react'
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import { Alert, Container } from 'react-bootstrap'
import axios from 'axios';


export default function CurrenLocationComponent() {

    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const successCall = (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        getWeatherForecast(latitude, longitude);
    }

    const errorCall = (error) => {
        console.error("Error getting location:", error);
        setError(true);
        setLoading(false);
    }

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(successCall, errorCall);
        } else {
            console.error("Geolocation is not supported by this browser.");
            setLoading(false);
            setError("Geolocation is not supported by this browser.");
        }
    }, []);

    function getWeatherForecast(latitude, longitude) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=42ab23d59cd1509c5f58806b2e08bb07`)
            .then(response => {
                console.log(response.data);
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nella chiamata API (condizioni attuali):', error);
                console.log(error.response);
                setWeather({});
                setLoading(false);
            });

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=42ab23d59cd1509c5f58806b2e08bb07`)
            .then(response => {
                console.log(response.data);
                setForecast(response.data.list);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nella chiamata API (previsioni future):', error);
                console.log(error.response);
                setForecast([]);
                setLoading(false);
            });
    }

    const kelvinToCelsius = (kelvin) => {
        return Math.floor(kelvin - 273.15);
    }

    return (
        <>
            <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
                {!loading && !error && weather && forecast && weather.main && (
                    <section>
                        <MDBContainer style={{ marginTop: "4rem", marginBottom: "4rem" }}>
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
                                                    <p className="text-muted">{weather.name}, {weather.sys.country}</p>
                                                </div>
                                                <div>
                                                    <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon"></img>
                                                </div>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="mb-4" style={{ borderRadius: "25px" }}>
                                        <MDBCardBody className="p-4">
                                            <h4 className='text-muted'>Current day</h4>
                                            <div className="d-flex justify-content-around text-center pb-3 pt-2">
                                                {forecast.slice(0, 6).map((f, index) => (
                                                    <div key={index} className="flex-column">
                                                        <p className="small">
                                                            <strong>{kelvinToCelsius(f.main.temp).toFixed(0)}°C</strong>
                                                        </p>
                                                        <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" style={{ width: '3rem' }}></img>
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
                                            <h4 className='text-muted'>Next day</h4>
                                            <div className="d-flex justify-content-around text-center pb-3 pt-2">
                                                {forecast.slice(6, 12).map((f, index) => (
                                                    <div key={index} className="flex-column">
                                                        <p className="small">
                                                            <strong>{kelvinToCelsius(f.main.temp).toFixed(0)}°C</strong>
                                                        </p>
                                                        <img src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} alt="Weather Icon" style={{ width: '3rem' }}></img>
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
                                                {forecast.slice(19, 25).map((f, index) => (
                                                    <div key={index} className="flex-column">
                                                        <p className="small">
                                                            <strong>{kelvinToCelsius(f.main.temp).toFixed(0)}°C</strong>
                                                        </p>
                                                        <img src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} alt="Weather Icon" style={{ width: '3rem' }}></img>
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
                                                {forecast.slice(25, 31).map((f, index) => (
                                                    <div key={index} className="flex-column">
                                                        <p className="small">
                                                            <strong>{kelvinToCelsius(f.main.temp).toFixed(0)}°C</strong>
                                                        </p>
                                                        <img src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} alt="Weather Icon" style={{ width: '3rem' }}></img>
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
                                                {forecast.slice(31, 37).map((f, index) => (
                                                    <div key={index} className="flex-column">
                                                        <p className="small">
                                                            <strong>{kelvinToCelsius(f.main.temp).toFixed(0)}°C</strong>
                                                        </p>
                                                        <img src={`https://openweathermap.org/img/wn/${f.weather[0].icon}@2x.png`} alt="Weather Icon" style={{ width: '3rem' }}></img>
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

                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                )}
                {loading && (
                    <p className='d-flex justify-content-center mt-5'>
                        <MDBSpinner grow style={{ width: '3rem', height: '3rem' }}>
                            <span className='visually-hidden'>Loading...</span>
                        </MDBSpinner>
                    </p>
                )}
                {!loading && error && (
                    <Container className='mt-5'>
                        <Alert variant="danger" dismissible>
                            <Alert.Heading>Error getting location!</Alert.Heading>
                            <p>
                                please try again or check that you have allowed access to the location, if you want to see the weather in your city.
                            </p>
                        </Alert>
                    </Container>
                )}
            </div>
        </>
    )
}
