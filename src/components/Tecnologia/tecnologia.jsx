
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImSpinner3 } from 'react-icons/im';

import './tecnologia.css';

const Tecnologia = () => {
  const [loading, setLoading] = useState(true);
  const [tecnologias, setTecnologias] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const hardcodedTecnologias = [
        { id: 1, description: 'React', urlImage: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
        { id: 2, description: 'JavaScript', urlImage: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
        { id: 3, description: 'HTML5', urlImage: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
        { id: 4, description: 'CSS3', urlImage: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
        { id: 5, description: 'Node.js', urlImage: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
        { id: 6, description: 'Python', urlImage: 'https://cdn.worldvectorlogo.com/logos/python-5.svg' },
        { id: 7, description: 'Django', urlImage: 'https://cdn.worldvectorlogo.com/logos/django.svg' },
        { id: 8, description: 'PostgreSQL', urlImage: 'https://cdn.worldvectorlogo.com/logos/postgresql.svg' },
        { id: 9, description: 'Docker', urlImage: 'https://cdn.worldvectorlogo.com/logos/docker.svg' },
        { id: 10, description: 'AWS', urlImage: 'https://cdn.worldvectorlogo.com/logos/aws-2.svg' }
    ];
    setTecnologias(hardcodedTecnologias);
    setLoading(false);
  }, []);

  const filteredTecnologias = tecnologias.filter(tech =>
    tech.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="tecnologia-container">
      <h1 className="tecnologia-title">Mis Tecnologías</h1>
      <div className="tecnologia-controls">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar tecnología..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn-add" onClick={() => navigate('/tecnologia/nueva')}>
          Agregar Nueva
        </button>
      </div>

      {loading ? (
        <div className="loader"><ImSpinner3 className="spinner-icon" /></div>
      ) : (
        <div className="tecnologia-grid">
          {filteredTecnologias.length > 0 ? (
            filteredTecnologias.map((tech) => (
              <div key={tech.id} className="tecnologia-card">
                <img src={tech.urlImage} alt={tech.description} className="tecnologia-logo" />
                <h3 className="tecnologia-name">{tech.description}</h3>
                <div className="tecnologia-actions">
                    <button className="btn-edit" onClick={() => navigate(`/modificar-tecnologia/${tech.id}`)}>Modificar</button>
                    <button className="btn-delete" onClick={() => navigate(`/eliminar-tecnologia/${tech.id}`)}>Eliminar</button>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron tecnologías que coincidan con la búsqueda.</p>
          )}
        </div>
      )}
    </div>
  );
};

export { Tecnologia };
