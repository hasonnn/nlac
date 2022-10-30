import React from "react";
import './Navbar.css';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

const Navigation = () => {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" id="navbar">
                <Container id="nav-container">
                    <Navbar.Brand href="/" id="nlac" ><img id="alliance-logo" src="../../.././alliance-logo.svg" alt="alliance logo" />New Life Alliance Church</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" /> 
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="navlink" href="/online">Church Online</Nav.Link>
                            <Nav.Link className="navlink" href="/about-us">About Us</Nav.Link>
                            <Nav.Link className="navlink" href="/staff">Staff</Nav.Link>
                            <NavDropdown title="Ministries" className="navlink-drop">
                                <NavDropdown.Item className="navlink-dropitem" href="/ministry/prayer">Prayer</NavDropdown.Item>
                                <NavDropdown.Item className="navlink-dropitem" href="/ministry/life-group">Life Groups</NavDropdown.Item>
                                <NavDropdown.Item className="navlink-dropitem" href="/ministry/missions">Missions</NavDropdown.Item>
                                <NavDropdown.Item className="navlink-dropitem" href="/ministry/project-hope">Project Hope</NavDropdown.Item>
                                <NavDropdown.Item className="navlink-dropitem" href="/ministry/community-connections">Community Connections</NavDropdown.Item>
                                <NavDropdown.Item className="navlink-dropitem" href="/ministry/paw-mmm">PAW & MMM</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navlink" href="/giving">Giving</Nav.Link>
                            <NavDropdown title="More" className="navlink-drop">
                                <NavDropdown.Item className="navlink-dropitem" href="/connect">Connect</NavDropdown.Item>
                                <NavDropdown.Item className="navlink-dropitem" href="https://www.dropbox.com/sh/ox4hckiogvnclrt/AABMP_fj9WNhdw30m7vu5vH5a?dl=0&fbclid=IwAR3ePPuFHEMhfX1OaFKjoJm_BRphWiAX5vID3Qx3B_F1VWMlLlO_xOh5SEE" target="_blank" rel="noreferrer">Community Board</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link className="navlink" href="/https://www.cmacan.org/report-sexual-misconduct/ ">Report Sexual Misconduct</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Navigation;