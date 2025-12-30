import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { ImSpinner3 } from 'react-icons/im';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './habilidad.css';

export const Habilidad = () => {

    const fetchData = async () => {
        try {
            // Hardcoded soft skills data
            const hardcodedSoftSkills = [
                {
                    id: 1,
                    description: 'Comunicación Efectiva',
                },
                {
                    id: 2,
                    description: 'Trabajo en Equipo',
                },
                {
                    id: 3,
                    description: 'Resolución de Problemas',
                },
                {
                    id: 4,
                    description: 'Pensamiento Crítico',
                },
                {
                    id: 5,
                    description: 'Adaptabilidad',
                },
                {
                    id: 6,
                    description: 'Liderazgo',
                },
                {
                    id: 7,
                    description: 'Gestión del Tiempo',
                },
                {
                    id: 8,
                    description: 'Creatividad',
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
            <h1 style={{ color: '#61dafb', textShadow: '2px 2px 4px #000000' }}>Habilidades Blandas</h1>
            <br />
            {
                loading ?
                    <div className='spinner'><ImSpinner3/></div> :
                    <Table striped bordered hover style={{ backgroundColor: '#f2f2f2', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)' }}>
                        <thead style={{ backgroundColor: '#282c34', color: 'white' }}>
                            <tr>
                                <th>#</th>
                                <th>Habilidad Blanda</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            softSkills.map((skill) => {
                                return (<tr key={skill.id} style={{ transition: 'all 0.3s ease-in-out' }}>
                                    <td>{skill.id}</td>
                                    <td>{skill.description}</td>
                                </tr>);
                            })
                        }
                        </tbody>
                    </Table>
            }
        </>
    );
}