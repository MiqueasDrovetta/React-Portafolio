
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const direccion_api = 'https://localhost:7043';

const CrearTecnologia = () => {
  const [description, setDescription] = useState('');
  const [imagen, setImagen] = useState(null);
  const [userId, setUserId] = useState(null); 

  const navigate = useNavigate();

  const handleCrearTecnologia = async () => {
    try {
      const formData = new FormData();
      formData.append('Description', description);
      formData.append('Image', imagen);
      formData.append('UserId', userId); 

      const response = await fetch(`${direccion_api}/Tecnology`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Tecnología creada con éxito');
        navigate('/tecnologia');
      } else {
        console.error('Error al crear la tecnología', response.statusText);
        alert(`Error al crear la tecnología: \nCompruebe los campos y que el ID pertenezca a un usuario. ${response.statusText}`);
      }
    } catch (error) {
      console.error('Error al crear la tecnología:', error);
      alert(`Error al crear la tecnología:${error}`);
    }
  };

  const handleCancelar = () => {
    navigate('/tecnologia');
  };

  return (
    <div>
      <h2>Crear Tecnología</h2>
      <label htmlFor="description">Descripción:</label>
      <input className="form-control" type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="imagen">Imagen:</label>
      <input className="form-control" type="file" id="imagen" onChange={(e) => setImagen(e.target.files[0])} />

      <label htmlFor="userId">ID de Usuario:</label>
      <input className="form-control" type="text" id="userId" value={userId} onChange={(e) => setUserId(e.target.value)} />

      <button className="btn btn-success" onClick={handleCrearTecnologia}>
        Crear Tecnología
      </button>
      <button className="btn btn-danger" onClick={handleCancelar}>Cancelar</button>
    </div>
  );
};

export default CrearTecnologia;
