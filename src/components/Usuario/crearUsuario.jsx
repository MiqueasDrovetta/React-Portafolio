import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const direccion_api = 'https://localhost:7043';

const CrearUsuario = () => {
  const [apellido, setApellido] = useState('');
  const [nombre, setNombre] = useState('');
  const [description, setDescription] = useState('');
  const [curriculum, setCurriculum] = useState('');
  const [gmail, setGmail] = useState('');
  const [profesion, setProfesion] = useState('');
  const [imagen, setImagen] = useState(null); // Para manejar archivos, como la imagen del usuario

  const navigate = useNavigate();
  
  const handleCrearUsuario = async () => {
    try {
      const formData = new FormData();
      formData.append('Apellido', apellido);
      formData.append('Nombre', nombre);
      formData.append('Description', description);
      formData.append('Curriculum', curriculum);
      formData.append('Gmail', gmail);
      formData.append('Profesion', profesion);
      formData.append('Image', imagen);

      const response = await fetch(`${direccion_api}/User`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Usuario creado con éxito');
        navigate(`/usuario`);
      } else {
        console.error('Error al crear el usuario', response.statusText);
      }
    } catch (error) {
      console.error('Error al crear el usuario:', error);
    }
  };

  const handleCancelar = () => {
    navigate(`/usuario`);
  };

  return (
    <div>
      <h2>Crear Usuario</h2>
      <label htmlFor="nombre">Nombre:</label>
      <input className="form-control" type="text" id="nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
      
      <label htmlFor="apellido">Apellido:</label>
      <input className="form-control" type="text" id="apellido" value={apellido} onChange={(e) => setApellido(e.target.value)} />
      
      <label htmlFor="description">Descripción:</label>
      <input className="form-control" type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="curriculum">Curriculum:</label>
      <input className="form-control" type="text" id="curriculum" value={curriculum} onChange={(e) => setCurriculum(e.target.value)} />

      <label htmlFor="gmail">Gmail:</label>
      <input className="form-control" type="text" id="gmail" value={gmail} onChange={(e) => setGmail(e.target.value)} />

      <label htmlFor="profesion">Profesión:</label>
      <input className="form-control" type="text" id="profesion" value={profesion} onChange={(e) => setProfesion(e.target.value)} />

      <label htmlFor="imagen">Imagen:</label>
      <input className="form-control" type="file" id="imagen" onChange={(e) => setImagen(e.target.files[0])} />

      <button className="btn btn-success" onClick={handleCrearUsuario}>
        Crear Usuario
      </button>
      <button className="btn btn-danger" onClick={handleCancelar}>Cancelar</button>
    </div>
  );
};

export default CrearUsuario;

