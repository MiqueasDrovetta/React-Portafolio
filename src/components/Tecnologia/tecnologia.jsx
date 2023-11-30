import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ImSpinner3 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ModificarTecnologia from './modificarTecnologia';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './tecnologia.css';

const url = 'https://localhost:7043';

export const Tecnologia = () => {
  const fetchData = async () => {
    try {
      let response = await fetch(`${url}/Tecnology/user/1`);
      let json = await response.json();

      setTecnologias(json);

      console.log(json);
    } catch (e) {
      // Manejar errores
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(true);
  const [tecnologias, setTecnologias] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <div className="loader">
          <ImSpinner3 />
        </div>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Descripción Tecnologia</th>
              <th>Id Imagen</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {tecnologias.map((tecnologia) => (
              <tr key={tecnologia.id}>
                <td>{tecnologia.id}</td>
                <td>{tecnologia.description}</td>
                <td>{tecnologia.urlImage}</td>
                <td><img src='{tecnologia.image}' alt="imagen"/></td>
                <td>
                  <Link  path="${user.id}" element={<ModificarTecnologia />} className="btn btn-primary">
                    Modificar               
                  </Link>
                  <Link to="" className="btn btn-secondary">
                    Eliminar
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
