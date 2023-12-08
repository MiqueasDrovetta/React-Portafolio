import React, { useState } from 'react';

const CrearProyecto = () => {
  const [descripcion, setDescripcion] = useState('');
  const [enlace, setEnlace] = useState('');
  const [imagen, setImagen] = useState(null); // Para manejar archivos, como la imagen del proyecto
  const [titulo, setTitulo] = useState('');
  const [tecnologiaId, setTecnologiaId] = useState('');
  const [userId, setUserId] = useState('');

  const handleCrearProyecto = async () => {
    try {
      if (!imagen) {
        console.error('Selecciona un archivo de imagen.');
        return;
      }

      const formData = new FormData();
      formData.append('Description', descripcion);
      formData.append('Enlace', enlace);
      formData.append('Imagen', imagen);
      formData.append('Title', titulo);
      formData.append('TechnologyId', tecnologiaId);
      formData.append('UserId', userId);

      const response = await fetch('https://localhost:7043/Proyecto', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Proyecto creado con éxito');
        // Realizar acciones adicionales después de crear el proyecto
      } else {
        console.error('Error al crear el proyecto', response.statusText);
      }
    } catch (error) {
      console.error('Error al crear el proyecto:', error);
    }
  };

  return (
    <div>
      <h2>Crear Proyecto</h2>
      
      <label htmlFor="titulo">Título:</label>
      <input
        className="form-control"
        type="text"
        id="titulo"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />

      <label htmlFor="descripcion">Descripción:</label>
      <input
        className="form-control"
        type="text"
        id="descripcion"
        value={descripcion}
        onChange={(e) => setDescripcion(e.target.value)}
      />

      <label htmlFor="enlace">Enlace:</label>
      <input
        className="form-control"
        type="text"
        id="enlace"
        value={enlace}
        onChange={(e) => setEnlace(e.target.value)}
      />

      <label htmlFor="imagen">Imagen:</label>
      <input
        className="form-control"
        type="file"
        id="imagen"
        accept="image/*"
        onChange={(e) => setImagen(e.target.files[0])}
      />

      <label htmlFor="tecnologiaId">ID de Tecnología:</label>
      <input
        className="form-control"
        type="text"
        id="tecnologiaId"
        value={tecnologiaId}
        onChange={(e) => setTecnologiaId(e.target.value)}
      />

      <label htmlFor="userId">ID de Usuario:</label>
      <input
        className="form-control"
        type="text"
        id="userId"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
      />

      <button className="btn btn-success" onClick={handleCrearProyecto}>
        Crear Proyecto
      </button>
    </div>
  );
};

export default CrearProyecto;