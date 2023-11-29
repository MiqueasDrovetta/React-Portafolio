import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectComponent = () => {
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({ image: '', title: '', description: '', link: '' });

  useEffect(() => {
    // Realizar una solicitud GET cuando el componente se monta
    axios.get('https://localhost:7043/Project')
      .then(response => setProjects(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // El segundo parámetro [] indica que se ejecuta solo una vez al montarse el componente

  const handleInputChange = (e) => {
    setNewProject({
      ...newProject,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddProject = () => {
    // Realizar una solicitud POST para agregar un nuevo proyecto
    axios.post('https://localhost:7043/Project', newProject)
      .then(response => {
        setProjects([...projects, response.data]);
        setNewProject({ image: '', title: '', description: '', link: '' });
      })
      .catch(error => console.error('Error adding project:', error));
  };

  const handleDeleteProject = (projectId) => {
    // Realizar una solicitud DELETE para eliminar un proyecto
    axios.delete(`https://localhost:7043/Project/${projectId}`)
      .then(() => setProjects(projects.filter(project => project.id !== projectId)))
      .catch(error => console.error('Error deleting project:', error));
  };

  return (
    <div>
      <h1>Proyectos</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            {project.title} - {project.description}
            <button onClick={() => handleDeleteProject(project.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Agregar Nuevo Proyecto</h2>
        <input
          type="text"
          placeholder="Imagen (directorio)"
          name="image"
          value={newProject.image}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Título"
          name="title"
          value={newProject.title}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Descripción"
          name="description"
          value={newProject.description}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="Enlace"
          name="link"
          value={newProject.link}
          onChange={handleInputChange}
        />
        <button onClick={handleAddProject}>Agregar</button>
      </div>
    </div>
  );
};

export default ProjectComponent;