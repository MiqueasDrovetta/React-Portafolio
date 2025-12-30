import React from 'react';


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './home.css';

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

export const Home = () => {
    return (
        <>
            <div className="container">
                <h1 style={{ color: '#61dafb', textShadow: '2px 2px 4px #000000' }}>Bienvenido a mi portafolio</h1>
                <p>Este es un lugar para mostrar mis proyectos, habilidades y experiencia.</p>
            </div>
        </>
    )
}
