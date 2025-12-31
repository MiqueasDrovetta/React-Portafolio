import React, { useEffect, useState } from 'react';
import { FaList, FaTh } from 'react-icons/fa';
import { ImSpinner3 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './usuario.css';

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
    },
    {
        id: 4,
        nombre: 'Ana',
        apellido: 'García',
        profesion: 'Especialista en marketing digital',
        gmail: 'ana.garcia@example.com',
        urlImage: 'https://i.pravatar.cc/150?u=ana-garcia'
    },
    {
        id: 5,
        nombre: 'Carlos',
        apellido: 'Martínez',
        profesion: 'Desarrollador full-stack',
        gmail: 'carlos.martinez@example.com',
        urlImage: 'https://i.pravatar.cc/150?u=carlos-martinez'
    },
    {
        id: 6,
        nombre: 'Laura',
        apellido: 'López',
        profesion: 'Gerente de proyectos ágil',
        gmail: 'laura.lopez@example.com',
        urlImage: 'https://i.pravatar.cc/150?u=laura-lopez'
    },
    {
        id: 7,
        nombre: 'Sergio',
        apellido: 'Hernández',
        profesion: 'Ingeniero de DevOps',
        gmail: 'sergio.hernandez@example.com',
        urlImage: 'https://i.pravatar.cc/150?u=sergio-hernandez'
    },
    {
        id: 8,
        nombre: 'Elena',
        apellido: 'Gomez',
        profesion: 'Científica de datos',
        gmail: 'elena.gomez@example.com',
        urlImage: 'https://i.pravatar.cc/150?u=elena-gomez'
    },
    {
        id: 9,
        nombre: 'David',
        apellido: 'Díaz',
        profesion: 'Desarrollador móvil',
        gmail: 'david.diaz@example.com',
        urlImage: 'https://i.pravatar.cc/150?u=david-diaz'
    }
];

export const Usuario = () => {
    const [loading, setLoading] = useState(true);
    const [usuarios, setUsuarios] = useState([]);
    const [query, setQuery] = useState("");
    const [view, setView] = useState('list'); // 'list' or 'grid'
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);
        // Simulate fetching data
        setTimeout(() => {
            setUsuarios(hardcodedUsers);
            setLoading(false);
        }, 500);
    }, []);

    const filteredUsuarios = usuarios.filter(usuario =>
        usuario.nombre.toLowerCase().includes(query.toLowerCase()) ||
        usuario.apellido.toLowerCase().includes(query.toLowerCase()) ||
        usuario.profesion.toLowerCase().includes(query.toLowerCase()) ||
        usuario.gmail.toLowerCase().includes(query.toLowerCase())
    );

    const renderListView = () => (
        <table className="table table-striped table-bordered table-hover">
            <thead style={{ backgroundColor: '#282c34', color: 'white' }}>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Profesion</th>
                    <th>Correo</th>
                    <th>Imagen</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {filteredUsuarios.map((usuario) => (
                    <tr key={usuario.id} style={{ backgroundColor: '#f2f2f2' }}>
                        <td>{usuario.id}</td>
                        <td>{usuario.nombre}</td>
                        <td>{usuario.apellido}</td>
                        <td>{usuario.profesion}</td>
                        <td>{usuario.gmail}</td>
                        <td><img src={usuario.urlImage} alt="imagen" style={{ width: '50px', borderRadius: '50%' }} /></td>
                        <td>
                            <button className="btn btn-success btn-sm" onClick={() => navigate(`/modificar-usuario/${usuario.id}`)}>Modificar</button>
                            <button className="btn btn-danger btn-sm" onClick={() => navigate(`/eliminar-usuario/${usuario.id}`)}>Eliminar</button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const renderGridView = () => (
        <div className="usuario-grid">
            {filteredUsuarios.map(usuario => (
                <div key={usuario.id} className="usuario-card">
                    <img src={usuario.urlImage} alt={`${usuario.nombre} ${usuario.apellido}`} className="usuario-image" />
                    <div className="usuario-info">
                        <h5 className="usuario-name">{`${usuario.nombre} ${usuario.apellido}`}</h5>
                        <p className="usuario-profession">{usuario.profesion}</p>
                        <p className="usuario-email">{usuario.gmail}</p>
                        <div className="usuario-actions">
                            <button className="btn btn-success btn-sm" onClick={() => navigate(`/modificar-usuario/${usuario.id}`)}>Modificar</button>
                            <button className="btn btn-danger btn-sm" onClick={() => navigate(`/eliminar-usuario/${usuario.id}`)}>Eliminar</button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className="usuario-container">
            <h1 style={{ color: '#61dafb', textShadow: '2px 2px 4px #000000' }}>Usuarios</h1>
            <div className="toolbar">
                <button className="btn btn-success" onClick={() => navigate('/usuario/nuevo')}>Agregar Usuario</button>
                <div className="search-container">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Buscar usuarios..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                </div>
                <div className="view-toggle">
                    <button className={`btn ${view === 'list' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setView('list')}><FaList /></button>
                    <button className={`btn ${view === 'grid' ? 'btn-primary' : 'btn-secondary'}`} onClick={() => setView('grid')}><FaTh /></button>
                </div>
            </div>

            {loading ? (
                <div className="loader">
                    <ImSpinner3 />
                </div>
            ) : (
                view === 'list' ? renderListView() : renderGridView()
            )}
        </div>
    );
};
