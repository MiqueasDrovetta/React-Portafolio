import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './navBar.css';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
    return (

        <Navbar expand="lg" className="bg-body-tertiary navbar-dark bg-dark">
            <Container>
                <Navbar.Brand href="#home" style={{ color: '#61dafb', fontWeight: 'bold' }}>PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/index">¿Que es Portafolio?</Nav.Link>
                        <NavDropdown title="Opciones" id="basic-nav-dropdown">
                            <NavDropdown.Item href="/">Home</NavDropdown.Item>
                            <NavDropdown.Item href="/sobreMi">Sobre mì</NavDropdown.Item>
                            {/* <NavDropdown.Item href="/card">Card</NavDropdown.Item> */}
                            <NavDropdown.Item href="/habilidad">Habilidad</NavDropdown.Item>
                            <NavDropdown.Item href="/tecnologia">Tecnologìa</NavDropdown.Item>
                            <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                            <NavDropdown.Item href="/usuario">Usuario</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}