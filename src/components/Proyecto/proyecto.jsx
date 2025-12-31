
import React, { useState, useEffect } from 'react';
import { ImSpinner3 } from 'react-icons/im';
import './proyecto.css';

const Proyecto = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Hardcoded project data as API is not accessible
    const hardcodedProjects = [
      {
        id: 1,
        title: "Portafolio Personal",
        description: "Mi espacio personal para mostrar mis proyectos, habilidades y experiencia. Construido con React y diseñado para ser completamente responsivo.",
        enlace: "#", // Placeholder URL
        sourceCode: "#" // Placeholder URL
      },
      {
        id: 2,
        title: "Plataforma de E-commerce",
        description: "Una tienda online completa con carrito de compras, pasarela de pago y panel de administración de productos. Desarrollado con el stack MERN (MongoDB, Express, React, Node.js).",
        enlace: "#",
        sourceCode: "#"
      },
      {
        id: 3,
        title: "Aplicación del Clima",
        description: "Una aplicación simple y elegante que muestra el pronóstico del tiempo actual y futuro para cualquier ciudad, utilizando la API de OpenWeatherMap.",
        enlace: "#",
        sourceCode: "#"
      },
      {
        id: 4,
        title: "Blog de Tecnología",
        description: "Un blog con todas las funciones, con autenticación de usuarios, creación y edición de posts, y comentarios. Hecho con Django y una API REST.",
        enlace: "#",
        sourceCode: "#"
      }
    ];
    setProjects(hardcodedProjects);
    setLoading(false);
  }, []);

  const filteredProjects = projects.filter(proj =>
    proj.title.toLowerCase().includes(query.toLowerCase()) ||
    proj.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="project-container">
      <h1 className="project-title">Mis Proyectos</h1>
      <div className="project-search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar proyecto..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loader"><ImSpinner3 className="spinner-icon" /></div>
      ) : (
        <div className="project-grid">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <div key={project.id} className="project-card">
                <h2 className="project-card-title">{project.title}</h2>
                <p className="project-card-description">{project.description}</p>
                <div className="project-card-actions">
                  <a href={project.enlace} target="_blank" rel="noopener noreferrer" className="btn-project btn-view">Ver Proyecto</a>
                  <a href={project.sourceCode} target="_blank" rel="noopener noreferrer" className="btn-project btn-code">Código Fuente</a>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron proyectos que coincidan con la búsqueda.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Proyecto;
