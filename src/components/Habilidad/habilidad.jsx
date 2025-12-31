
import React, { useEffect, useState } from 'react';
import { ImSpinner3 } from 'react-icons/im';
import './habilidad.css';

export const Habilidad = () => {
  const [loading, setLoading] = useState(true);
  const [softSkills, setSoftSkills] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const hardcodedSoftSkills = [
      { id: 1, description: 'Comunicación Efectiva' },
      { id: 2, description: 'Trabajo en Equipo' },
      { id: 3, description: 'Resolución de Problemas' },
      { id: 4, description: 'Pensamiento Crítico' },
      { id: 5, description: 'Adaptabilidad' },
      { id: 6, description: 'Liderazgo' },
      { id: 7, description: 'Gestión del Tiempo' },
      { id: 8, description: 'Creatividad' },
    ];
    setSoftSkills(hardcodedSoftSkills);
    setLoading(false);
  }, []);

  const filteredSkills = softSkills.filter(skill =>
    skill.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="habilidad-container">
      <h1 className="habilidad-title">Habilidades Blandas</h1>
      <div className="habilidad-search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar habilidad..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loader"><ImSpinner3 className="spinner-icon" /></div>
      ) : (
        <div className="habilidad-list">
          {filteredSkills.length > 0 ? (
            filteredSkills.map((skill) => (
              <div key={skill.id} className="habilidad-item">
                {skill.description}
              </div>
            ))
          ) : (
            <p>No se encontraron habilidades que coincidan con la búsqueda.</p>
          )}
        </div>
      )}
    </div>
  );
};
