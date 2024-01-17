import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

export default function NotFoundPage() {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/')
    }

    return (
        <>
            <div className='d-flex flex-column align-items-center'>
                <div className='d-flex justify-content-center'>
                    <h1 className='text-black' style={{ fontSize: '15rem' }}>404</h1>
                </div>
                <p className='d-flex justify-content-center text-black' style={{ fontSize: '3rem' }}>Page not found</p>
                <Button
                    variant='light'
                    className='fs-6'
                    onClick={handleClick}
                >
                    Go Home
                </Button>
            </div>
        </>
    )
}
