import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { ImSpinner3 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './usuario.css';

const url = 'https://localhost:7043';

export const Usuario = () => {
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
      // Hardcoded user data
      const hardcodedUsers = [
        {
          id: 1,
          nombre: 'Juan',
          apellido: 'Perez',
          profesion: 'Desarrollador de Software',
          gmail: 'juan.perez@example.com',
          urlImage: 'https://i.pravatar.cc/150?u=juan-perez'
        },
        {
          id: 2,
          nombre: 'Maria',
          apellido: 'Gonzalez',
          profesion: 'Diseñadora UX/UI',
          gmail: 'maria.gonzalez@example.com',
          urlImage: 'https://i.pravatar.cc/150?u=maria-gonzalez'
        },
        {
          id: 3,
          nombre: 'Pedro',
          apellido: 'Ramirez',
          profesion: 'Ingeniero de Datos',
          gmail: 'pedro.ramirez@example.com',
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
      <h1 style={{ color: '#61dafb', textShadow: '2px 2px 4px #000000' }}>Usuarios</h1>
      <br />
      <button className="btn btn-success" onClick={() => navigate('/usuario/nuevo')}>Agregar Usuario</button>
      <br />
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
              <th>Profesion</th>
              <th>Correo</th>
              <th>UrlImagen</th>
              <th>Imagen</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <tr key={usuario.id} style={{ backgroundColor: '#f2f2f2' }}>
                <td>{usuario.id}</td>
                <td>{usuario.nombre}</td>
                <td>{usuario.apellido}</td>
                <td>{usuario.profesion}</td>
                <td>{usuario.gmail}</td>
                <td>{usuario.urlImage}</td>
                <td><img src={usuario.urlImage} alt="imagen" style={{ borderRadius: '50%', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }} /></td>
                <td>
                  <button className="btn btn-success" onClick={() => navigate(`/modificar-usuario/${usuario.id}`)}>Modificar</button>
                  <button className="btn btn-danger" onClick={() => navigate(`/eliminar-usuario/${usuario.id}`)}>Eliminar</button>
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
