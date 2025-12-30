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
                <p>Esta es una simulación de una aplicación para administrar CVs de personas ficticias. Para que el proyecto funcione correctamente este debe estar conectado con su backend desarrollado en .NET + Entity Framework para poder acceder a la base de datos que guarda realmente todos los CVs, las tecnologías, habilidades, usuarios, etc.</p>
            </div>
        </>
    )
}
