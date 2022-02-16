import React from "react";
import './Navbar.css';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
            <Container className="nav-container">
            <Navbar.Brand href="/" id="nlac" ><img id="alliance-logo" src="../../.././alliance-logo.svg" alt="alliance logo" />New Life Alliance Church</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link className="navlink" href="/online">Church Online</Nav.Link>
                <Nav.Link className="navlink" href="/about-us">About Us</Nav.Link>
                <Nav.Link className="navlink" href="/staff">Staff</Nav.Link>
                <NavDropdown title="Ministries" className="navlink-drop">
                    <NavDropdown.Item className="navlink-dropitem" href="#action/3.1">Prayer</NavDropdown.Item>
                    <NavDropdown.Item className="navlink-dropitem" href="#action/3.2">Life Groups</NavDropdown.Item>
                    <NavDropdown.Item className="navlink-dropitem" href="#action/3.3">Missions</NavDropdown.Item>
                    <NavDropdown.Item className="navlink-dropitem" href="#action/3.4">Project Hope</NavDropdown.Item>
                    <NavDropdown.Item className="navlink-dropitem" href="#action/3.4">Community Connections</NavDropdown.Item>
                    <NavDropdown.Item className="navlink-dropitem" href="#action/3.4">PAW & MMM</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link className="navlink" href="#deets">Giving</Nav.Link>
                <NavDropdown title="More" className="navlink-drop">
                    <NavDropdown.Item className="navlink-dropitem" href="#action/3.1">Connect</NavDropdown.Item>
                    <NavDropdown.Item className="navlink-dropitem" href="#action/3.2">Community</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </>
    )
}

export default Navigation;