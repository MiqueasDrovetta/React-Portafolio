
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

export const Home = () => {
    const navigate = useNavigate();

    const handleProjectsClick = () => {
        window.open('https://github.com/MiqueasDrovetta', '_blank');
    };

    const handleContactClick = () => {
        window.location.href = 'mailto:miqueasdrovetta@outlook.com';
    };

    return (
        <div className="hero-container">
            <div className="hero-content">
                <h1 className="hero-title">Hola, Soy Miqueas Drovetta Un Desarrollador Creativo e Inventivo</h1>
                <p className="hero-subtitle">
                    Me especializo en la creación de experiencias web modernas y dinámicas. Este proyecto es una simulacion de un gestor de CV, para que este ande correctamente debe conectarse a mi backend hecho en .NET + EF. Mi pasión es combinar código limpio con un diseño intuitivo para construir aplicaciones que a la gente le encante usar.
                </p>
                <div className="hero-actions">
                    <button className="btn-primary" onClick={handleProjectsClick}>
                        Explora Mis Proyectos
                    </button>
                    <button className="btn-secondary" onClick={handleContactClick}>
                        Conectemos
                    </button>
                </div>
            </div>
            {/* Opcional: Podrías agregar una imagen o ilustración aquí */}
            {/* <div className='hero-image-container'>
                <img src='your-image.svg' alt='Creative Developer' />
            </div> */}
        </div>
    );
}
