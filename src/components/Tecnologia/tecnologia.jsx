import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ImSpinner3 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import ModificarTecnologia from './modificarTecnologia';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './tecnologia.css';

const url = 'https://localhost:7043';

export const Tecnologia = () => {
  const [page,setPage] = useState(1);

  const nextPage = () =>{
    setPage(page + 1);
  }
  const prevPage = () =>{
    setPage(page - 1);
  }

  const find = (evt) =>{
    const { value } = evt.target;
    setQuery(value)
  }

  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      let response = await fetch(`${url}/Tecnology/type/1?page=${page}&pageSize=4&query=${query}`);
      let json = await response.json();

      setTecnologias(json.list);

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
  }, [page,query]);

  return (
    <>
      <input type="text" value={query} onChange={find}/> 
      {    
        loading ? (
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
        <a className='btn btn-secondary' onClick={prevPage}>Pagina Anterior</a>
        <p>{page}</p>
        <a className='btn btn-secondary' onClick={nextPage}>Pagina Siguiente</a>
    </>
  );
};
