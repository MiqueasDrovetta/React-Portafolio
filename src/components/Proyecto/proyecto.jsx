import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup } from 'reactstrap';

const BASE_URL = 'http://localhost:7043';

const Project = () => {
  const [data, setData] = useState([]);
  const [modalActualizar, setModalActualizar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const [form, setForm] = useState({
    id: "",
    title: "",
    description: "",
    enlace: "",
  });

  const fetchdata = async () => {
    try {
      let response = await fetch(`${BASE_URL}/project`);  // Asegúrate de que la ruta sea correcta
      let json = await response.json();
      setData(json);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchdata();
  }, []);

  const mostrarModalActualizar = (dato) => {
    setForm(dato);
    setModalActualizar(true);
  };

  const cerrarModalActualizar = () => {
    setModalActualizar(false);
  };

  const mostrarModalInsertar = () => {
    setModalInsertar(true);
  };

  const cerrarModalInsertar = () => {
    setModalInsertar(false);
  };

  const editar = (dato) => {
    // Lógica para editar en la API
    setModalActualizar(false);
  };

  const eliminar = async (dato) => {
    const opcion = window.confirm(`Estás seguro que deseas Eliminar el elemento ${dato.id}`);
    if (opcion) {
      try {
        await fetch(`${BASE_URL}/project/${dato.id}`, { method: 'DELETE' });
        fetchdata();
      } catch (error) {
        console.error('Error deleting project:', error);
      }
    }
  };

  const insertar = async () => {
    try {
      const response = await fetch(`${BASE_URL}/project`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        fetchdata();
      } else {
        console.error('Error inserting project:', response.statusText);
      }
    } catch (error) {
      console.error('Error inserting project:', error);
    } finally {
      setModalInsertar(false);
    }
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container>
        {/* Resto del código sigue igual */}
      </Container>
    </>
  );
};

export default Project;
