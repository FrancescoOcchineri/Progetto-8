import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MainSearchComponent from '../components/MainSearchComponent';
import CurrenLocationComponent from '../components/CurrenLocationComponent';

export default function HomePage() {

    const navigate = useNavigate();
    const [city, setCity] = useState('');

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    const handleClick = () => {
        navigate(`/weather/${city}`);
    }

    return (
        <>
            <MainSearchComponent handleChange={handleChange} handleClick={handleClick} />
            <CurrenLocationComponent />
        </>
    )
}


