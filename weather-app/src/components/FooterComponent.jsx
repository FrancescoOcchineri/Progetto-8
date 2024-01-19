import React from 'react'

import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBRipple
} from 'mdb-react-ui-kit';

export default function FooterComponent() {
    return (
        <div>
            <MDBFooter
                className='text-center text-white'
                style={{
                    background: 'linear-gradient(0deg, rgba(23, 76, 156, 1) 39%, rgba(16, 84, 162, 1) 86%)',
                    width: '100%',
                }}
            >
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright: Francesco Occhineri
                </div>
            </MDBFooter>
        </div>
    )
}
