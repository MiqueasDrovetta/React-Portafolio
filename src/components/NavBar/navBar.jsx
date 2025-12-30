import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './navBar.css';
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export const NavBar = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary navbar-dark bg-dark">
            <Container>
                <Navbar.Brand as={Link} to="/" style={{ color: '#61dafb', fontWeight: 'bold' }}>PORTFOLIO</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/index">¿Que es Portafolio?</Nav.Link>
                        <NavDropdown title="Opciones" id="basic-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/">Home</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/sobreMi">Sobre mì</NavDropdown.Item>
                            {/* <NavDropdown.Item as={Link} to="/card">Card</NavDropdown.Item> */}
                            <NavDropdown.Item as={Link} to="/habilidad">Habilidad</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/tecnologia">Tecnologìa</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/blog">Blog</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/usuario">Usuario</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}