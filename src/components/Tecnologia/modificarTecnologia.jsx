import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ModificarTecnologia = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const direccion_api = 'https://localhost:7043';

  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleModificar = async () => {
    try {
      const formData = new FormData();
      formData.append('Description', description);
      formData.append('Image', image);

      const response = await fetch(`${direccion_api}/Tecnology/${id}`, {
        method: 'PUT',
        body: formData,
      });

      if (response.ok) {
        console.log('Tecnología modificada con éxito');
        navigate(`/tecnologia`);
      } else {
        console.error('Error al modificar la tecnología', response.statusText);
      }
    } catch (error) {
      console.error('Error al modificar la tecnología:', error);
    }
  };

  const handleCancelar = () => {
    // Redirigir a la página de tecnología para realizar otras acciones
    navigate(`/tecnologia`);
  };

  return (
    <div>
      <h2>Modificar Tecnología</h2>
      <label htmlFor="description">Nueva Descripción:</label>
      <br />
      <input
        className="form-control"
        type="text"
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <label htmlFor="image">Nueva Imagen:</label>
      <br />
      <input
        className="form-control"
        type="file"
        id="image"
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
      />
      <br />
      <button className="btn btn-success" onClick={handleModificar}>
        Modificar
      </button>
      <button className="btn btn-danger" onClick={handleCancelar}>
        Cancelar
      </button>
    </div>
  );
};

export default ModificarTecnologia;
