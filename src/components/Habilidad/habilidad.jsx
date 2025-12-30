import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ImSpinner3 } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './habilidad.css';
import { Link } from 'react-router-dom';


export const Habilidad = () => {

    const fetchData = async () => {
        try {
            // Hardcoded skills and technologies data
            const hardcodedSoftSkills = [
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

            setSoftSkills(hardcodedSoftSkills);

        } catch (e) {

        } finally {
            setLoading(false);
        }
    }

    const [loading, setLoading] = useState(true)
    const [softSkills, setSoftSkills] = useState([]);

    useEffect(() => {
        setLoading(true);
        fetchData()
    }, [])

    return (
        <>
            <h1 style={{ color: '#61dafb', textShadow: '2px 2px 4px #000000' }}>Habilidades y Tecnologías</h1>
            <br />
            {
                loading ?
                    <div className='spinner'><ImSpinner3/></div> :
                    <Table striped bordered hover style={{ backgroundColor: '#f2f2f2', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                        <thead style={{ backgroundColor: '#282c34', color: 'white' }}>
                            <tr>
                                <th>#</th>
                                <th>Descripción Habilidad</th>
                                <th>Imagen</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            softSkills.map((softSkills) => {
                                return (<tr key={softSkills.id} style={{ transition: 'all 0.3s ease-in-out' }}>
                                    <td>{softSkills.id}</td>
                                    <td>{softSkills.description}</td>
                                    <td><img src={softSkills.urlImage} alt={softSkills.description} style={{ width: '50px', height: '50px' }} /></td>
                                    {/* <td>{softSkills.description}</td> */}
                                    <td>
                                        <Link to="" className="btn btn-primary">Modificar</Link>
                                        <Link to="" className="btn btn-secondary">Eliminar</Link>
                                    </td>
                                </tr>);
                            })
                        }
                        </tbody>
                    </Table>
            }
            
            
        </>
    );
}