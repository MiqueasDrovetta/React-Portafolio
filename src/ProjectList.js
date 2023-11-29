import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const userId = 1; // Reemplaza con el ID de usuario deseado

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://localhost:7043/Project/user/${userId}`);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, [userId]); // La dependencia userId asegura que la solicitud se realice cuando el ID de usuario cambie

  return (
    <div>
      <h1>Proyectos del Usuario</h1>
      <ul>
        {projects.map(project => (
          <li key={project.id}>
            <strong>{project.title}</strong> - {project.description} - Enlace: {project.enlace}
            <br />
            <img src={project.urlImage} alt="Project" />
            <br />
            Technologies:
            <ul>
              {project.technologies.map(technology => (
                <li key={technology.id}>{technology.description}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
