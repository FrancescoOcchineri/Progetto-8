import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBRipple
} from 'mdb-react-ui-kit';

export default function FooterComponent() {
    return (
        <div style={{ position: 'relative', minHeight: '80vh' }}>
            <MDBFooter
                className='text-center text-white'
                style={{
                    background: 'linear-gradient(0deg, rgba(23, 76, 156, 1) 39%, rgba(16, 84, 162, 1) 86%)',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                }}
            >
                <MDBContainer className='p-4'>
                    <section>
                        <MDBRow>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://hips.hearstapps.com/hmg-prod/images/torino-with-mole-antonelliana-and-the-alps-royalty-free-image-1643015862.jpg' className='w-100' />
                                    <div>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </div>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://static2-viaggi.corriereobjects.it/wp-content/uploads/2015/06/sydney.jpg?v=1436201340' className='w-100' />
                                    <div>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </div>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://images.pexels.com/photos/2614818/pexels-photo-2614818.jpeg?cs=srgb&dl=pexels-nick-kwan-2614818.jpg&fm=jpg' className='w-100' />
                                    <div>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </div>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://www.tiqets.com/blog/wp-content/uploads/2017/08/24-hours-in-new-york-1.jpg' className='w-100' />
                                    <div>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </div>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://a.cdn-hotels.com/gdcs/production163/d345/47e14d8a-051b-4932-85d1-8f5c0363fde7.jpg?impolicy=fcrop&w=800&h=533&q=medium' className='w-100' />
                                    <div>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </div>
                                </MDBRipple>
                            </MDBCol>
                            <MDBCol lg='2' md='12' className='mb-4 mb-md-0'>
                                <MDBRipple
                                    rippleColor='light'
                                    className='bg-image hover-overlay shadow-1-strong rounded'
                                >
                                    <img src='https://images.ctfassets.net/ynnxiqcetcwf/7r2meKco9R5QGP1E2eQxSe/220b71fc159a15fc0248e9ed28727cf8/Roma_colosseo.jpg?w=899&h=600&fl=progressive&q=50&fm=jpg&fit=fill' className='w-100' />
                                    <div>
                                        <div
                                            className='mask'
                                            style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}
                                        ></div>
                                    </div>
                                </MDBRipple>
                            </MDBCol>
                        </MDBRow>
                    </section>
                </MDBContainer>

                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    © 2024 Copyright: Francesco Occhineri
                </div>
            </MDBFooter>
        </div>
    )
}
