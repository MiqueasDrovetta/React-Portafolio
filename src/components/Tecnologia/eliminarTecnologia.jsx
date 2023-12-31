import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EliminarTecnologia = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const direccion_api = 'https://localhost:7043';

  const handleEliminar = async () => {
    try {
      const response = await fetch(`${direccion_api}/Tecnology/${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        
        console.log('Tecnología eliminada con éxito');
        navigate(`/tecnologia`);
      } else {
        
        console.error('Error al eliminar la tecnología', response.statusText);
      }
    } catch (error) {
      console.error('Error al eliminar la tecnología:', error);
    }
  };

  const handleCancelar = () => {
    // Redirigir a tecnologia para realizar otras acciones
    navigate(`/tecnologia`);
  };

  return (
    <div>    
          
      <h2>Eliminar Tecnología</h2>
      <p>¿Estás seguro de que deseas eliminar esta tecnología?</p>
      <button className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
      <button className="btn btn-success" onClick={handleCancelar}>Cancelar</button>
    </div>
  );
};

export default EliminarTecnologia;