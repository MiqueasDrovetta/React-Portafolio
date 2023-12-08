import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EliminarUsuario = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const direccion_api = 'https://localhost:7043';

  const handleEliminar = async () => {
    try {
      const response = await fetch(`${direccion_api}/User/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
        console.log('Usuario eliminado con éxito');
        navigate(`/usuario`);
      } else {
        
        console.error('Error al eliminar el Usuario', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar el Usuario:', error);
    }
  };

  const handleCancelar = () => {
    navigate(`/usuario`);
  };

  return (
    <div>    
          
      <h2>Eliminar Usuario</h2>
      <p>¿Estás seguro de que deseas eliminar este usuario?</p>
      <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
      <button className="btn btn-success" onClick={handleCancelar}>Cancelar</button>
    </div>
  );
};

export default EliminarUsuario;