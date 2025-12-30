import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ImSpinner3 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import ModificarTecnologia from './modificarTecnologia';
import { useNavigate} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './tecnologia.css';
import EliminarTecnologia from './eliminarTecnologia';

const url = 'https://localhost:7043';

export const Tecnologia = () => {
  const [page,setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); 

  const nextPage = () =>{
    if (page < totalPages){
      setPage(page + 1);
    }
  }
  const prevPage = () =>{
    if (page > 1){
      setPage(page - 1);      
    }    
  }

  const find = (evt) =>{
    const { value } = evt.target;
    setQuery(value)
  }

  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      // Hardcoded technology data
      const hardcodedTecnologias = [
          {
              id: 1,
              description: 'React',
              urlImage: 'https://cdn.worldvectorlogo.com/logos/react-2.svg'
          },
          {
              id: 2,
              description: 'JavaScript',
              urlImage: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg'
          },
          {
              id: 3,
              description: 'HTML5',
              urlImage: 'https://cdn.worldvectorlogo.com/logos/html-1.svg'
          },
          {
              id: 4,
              description: 'CSS3',
              urlImage: 'https://cdn.worldvectorlogo.com/logos/css-3.svg'
          }
      ];

      setTotalPages(1);
      setTecnologias(hardcodedTecnologias);      

    } catch (e) {
      // Manejar errores
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(true);
  const [tecnologias, setTecnologias] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [page,query,totalPages]);

  return (
    <>
      <h1 style={{ color: '#61dafb', textShadow: '2px 2px 4px #000000' }}>Tecnologias</h1>
      <br />
      <button className="btn btn-success" onClick={() => navigate('/tecnologia/nueva')}>Agregar Tecnologia</button>
      <br />
      <br />
      <input className="form-control" type="text" value={query} onChange={find}/>
      
      {    
        loading ? (
        <div className="loader">
          <ImSpinner3 />
        </div>
      ) : (
        
          <Table striped bordered hover style={{ backgroundColor: '#f2f2f2', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
            <thead style={{ backgroundColor: '#282c34', color: 'white' }}>
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
                <tr key={tecnologia.id} style={{ transition: 'all 0.3s ease-in-out' }}>
                  <td>{tecnologia.id}</td>
                  <td>{tecnologia.description}</td>
                  <td>{tecnologia.urlImage}</td>
                  <td><img src={tecnologia.urlImage} alt={tecnologia.description} style={{ width: '50px', height: '50px' }}/></td>
                  <td>                                     
                    <button className="btn btn-success" onClick={() => navigate(`/modificar-tecnologia/${tecnologia.id}`)}>Modificar</button>                  
                    <button className="btn btn-danger" onClick={() => navigate(`/eliminar-tecnologia/${tecnologia.id}`)}>Eliminar</button>                  
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>                  
              
        )}

        <section className='Paginado'>
          <button className='btn btn-secondary' onClick={prevPage}>Pagina Anterior</button>
          <p>{page}</p>
          <button className='btn btn-secondary' onClick={nextPage}>Pagina Siguiente</button>
        </section>

    </>
  );
};
