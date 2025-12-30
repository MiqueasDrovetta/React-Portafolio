import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ImSpinner3 } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './sobreMi.css';

const url = 'https://localhost:7043';

export const SobreMi = () => {
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const nextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };
  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const find = (evt) => {
    const { value } = evt.target;
    setQuery(value);
  };

  const [query, setQuery] = useState("");

  const fetchData = async () => {
    try {
      // Hardcoded about me data
      const hardcodedUsers = [
        {
          id: 1,
          nombre: 'Juan',
          apellido: 'Perez',
          description: 'Apasionado por la tecnología y el desarrollo de software. Me encanta crear soluciones innovadoras y eficientes.',
          urlImage: 'https://i.pravatar.cc/150?u=juan-perez'
        },
        {
          id: 2,
          nombre: 'Maria',
          apellido: 'Gonzalez',
          description: 'Diseñadora UX/UI con un ojo para la estética y la usabilidad. Mi objetivo es crear experiencias de usuario memorables.',
          urlImage: 'https://i.pravatar.cc/150?u=maria-gonzalez'
        },
        {
          id: 3,
          nombre: 'Pedro',
          apellido: 'Ramirez',
          description: 'Ingeniero de datos con experiencia en la construcción de pipelines de datos robustos y escalables.',
          urlImage: 'https://i.pravatar.cc/150?u=pedro-ramirez'
        }
      ];

      setTotalPages(1);
      setUsuarios(hardcodedUsers);
    } catch (e) {
      // Manejar errores
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    fetchData();
  }, [page, query, totalPages]);

  return (
    <>
      <h1 style={{ color: '#61dafb', textShadow: '2px 2px 4px #000000' }}>Sobre Mi</h1>
      <br />
      <input className="form-control" type="text" value={query} onChange={find} />

      {loading ? (
        <div className="loader">
          <ImSpinner3 />
        </div>
      ) : (
        <Table striped bordered hover>
          <thead style={{ backgroundColor: '#282c34', color: 'white' }}>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Apellido</th>
              <th>Sobre Mi</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id} style={{ backgroundColor: '#f2f2f2', transition: 'all 0.3s ease-in-out' }}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.description}</td>
                <td><img src={usuario.urlImage} alt="imagen" style={{ borderRadius: '50%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }} /></td>
                <td>
                  <button className="btn btn-success" onClick={() => navigate(`/modificar-usuario/${usuario.id}`)}>Modificar</button>
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
