import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

export function Header() {
    return (
        <header>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">Demo Users</Navbar.Brand>
                <Nav.Link />
                <Nav className="justify-content-center">
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    )
}

export function Footer() {
    return (
        <footer>
            
        </footer>
    )
}
