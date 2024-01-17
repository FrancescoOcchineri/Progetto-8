import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom';
import { MDBCard, MDBCardBody, MDBCol, MDBContainer, MDBIcon, MDBRow, MDBSpinner } from "mdb-react-ui-kit";

export default function Weather() {

    const [weather, setWeather] = useState({});
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(true);
    let { city } = useParams();

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=42ab23d59cd1509c5f58806b2e08bb07`)
            .then(response => {
                console.log(response.data);
                setWeather(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Errore nella chiamata API:', error);
                console.log(error.response);
                setWeather({});
                setLoading(false);
            });

        axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=42ab23d59cd1509c5f58806b2e08bb07`)
            .then((response) => {
                console.log(response.data);
                setForecast(response.data.list);
            })
            .catch((error) => {
                console.error('Errore nella chiamata API:', error);
                console.log(error.response);
                setForecast([]);
                setLoading(false);
            });
    }, [city])

    const kelvinToCelsius = (kelvin) => {
        return Math.floor(kelvin - 273.15);
    }

    return (
        <>
            <div>
                {weather && forecast && weather.main ? (
                    <section>
                        <MDBContainer style={{ marginTop: "3rem" }}>
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
                ) : (
                    <p className='d-flex justify-content-center mt-5'> <MDBSpinner grow style={{ width: '3rem', height: '3rem' }}>
                        <span className='visually-hidden'>Loading...</span>
                    </MDBSpinner></p>
                )}
            </div>
        </>
    )
}
