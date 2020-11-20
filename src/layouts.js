import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/demo-user-app">Demo Users</Navbar.Brand>
                <Nav.Link />
                <Nav className="justify-content-center">
                    <Nav.Link href="/demo-user-app">Home</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    )
}

export function Footer() {
    return (
        <footer style={ style.footer } className="position-fixed d-flex justify-content-center align-items-center">
            <div style={ style.footer_text }>2020@QuanMuiTo</div>
        </footer>
    )
}

const style = {
    footer: {
        bottom: 0,
        width: '100%',
        height: '5vh',
        marginTop: '2rem',
        backgroundColor: '#343a40'
    },
    footer_text: {
        color: 'white'
    }
};
