import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function NavbarComponent() {
    return (
        <Navbar expand="lg" className='color'>
            <Container fluid>
                <Navbar.Brand href="/" className='text-light'>Weather <i className="bi bi-brightness-high text-warning"></i></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link to="/" className='nav-link text-light'>Home</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
