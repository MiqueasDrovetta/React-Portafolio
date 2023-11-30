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
            let response = await fetch("https://localhost:7043/SoftSkill/user/1");
            let json = await response.json();

            setSoftSkills(json);

            console.log(json);

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
            {
                loading ?
                    <div className='spinner'><ImSpinner3/></div> :
                    <Table striped bordered hover>
                        <thead>
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
                                return (<tr>
                                    <td>{softSkills.id}</td>
                                    <td>{softSkills.description}</td>
                                    <td>{softSkills.urlImage}</td>
                                    {/* <td>{softSkills.description}</td> */}
                                    <td>
                                        <Link to="" className="btn btn-primary">Editar</Link>
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