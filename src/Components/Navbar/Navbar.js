import React from "react";
import './Navbar.css';

import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
            <Container>
            <Navbar.Brand href="/" id="nlac" ><img id="alliance-logo" src="../../.././alliance-logo.svg" alt="alliance logo" />New Life Alliance Church</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <br/>
                <Nav.Link className="navlink" href="#features">Features</Nav.Link>
                <Nav.Link className="navlink" href="#pricing">Pricing</Nav.Link>
                <Nav.Link className="navlink" href="#deets">More deets</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default Navigation;