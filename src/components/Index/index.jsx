import React from 'react';
import { FaDatabase, FaReact, FaServer } from 'react-icons/fa';
import './index.css';

export const Index = () => {
    return (
        <div className="index-container">
            <h1 className="title">¿Qué es Portafolio?</h1>
            <h2 className="subtitle">Una aplicación para gestionar tus CVs</h2>
            
            <div className="text-container">
                <p>
                    Esta aplicación te permite administrar de forma sencilla y centralizada todos tus currículums. 
                    Olvídate de tener múltiples versiones de tu CV en diferentes archivos. Con esta herramienta, puedes 
                    crear, editar y consultar tus perfiles profesionales desde un único lugar.
                </p>
                <p>
                    La aplicación está construida con React para el frontend, lo que garantiza una interfaz de usuario 
                    rápida y moderna. Para el backend, utilizamos un servidor que se conecta a una base de datos, 
                    asegurando que tu información esté siempre segura y accesible.
                </p>
            </div>

            <div className="icon-container">
                <div className="icon-wrapper">
                    <FaReact className="icon" />
                    <p>Frontend Moderno</p>
                </div>
                <div className="icon-wrapper">
                    <FaServer className="icon" />
                    <p>Backend Robusto</p>
                </div>
                <div className="icon-wrapper">
                    <FaDatabase className="icon" />
                    <p>Base de Datos Segura</p>
                </div>
            </div>
        </div>
    );
}