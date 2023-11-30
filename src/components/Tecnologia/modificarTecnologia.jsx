import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ModificarTecnologia = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tecnologia, setTecnologia] = useState({});
  const direccion_api = 'https://localhost:7043';

  useEffect(() => {
    const buscarTecnologia = async () => {
      try {
        const response = await fetch(`${direccion_api}/Tecnology/user/${id}`);
        const data = await response.json();
        setTecnologia(data);
      } catch (error) {
        console.error('Error al buscar la tecnología:', error);
      }
    };

    buscarTecnologia();
  }, [id]);

  const [formulario, setFormulario] = useState({
    // Asegúrate de que los nombres de los atributos coincidan con la estructura del objeto devuelto por la API
    title: tecnologia.title || '',
    description: tecnologia.description || '',
    enlace: tecnologia.enlace || '',
    // Otros campos del formulario
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormulario({ ...formulario, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${direccion_api}/Tecnology/user/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formulario),
      });

      if (response.ok) {
        // Manejar el éxito de la actualización
        console.log('Tecnología actualizada con éxito');
        navigate(`/tecnologia`);
      } else {
        // Manejar el error
        console.error('Error al actualizar la tecnología', response.statusText);
      }
    } catch (error) {
      console.error('Error al actualizar la tecnología:', error);
    }
  };

  return (
    <div>
      <h2>Modificar Tecnología</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input
            type="text"
            name="title"
            value={formulario.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Descripción:
          <input
            type="text"
            name="description"
            value={formulario.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Enlace:
          <input
            type="text"
            name="enlace"
            value={formulario.enlace}
            onChange={handleInputChange}
          />
        </label>
        {/* Otros campos del formulario */}
        <button type="submit">Guardar Cambios</button>
      </form>
    </div>
  );
};

export default ModificarTecnologia;
