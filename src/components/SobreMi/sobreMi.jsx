
import React, { useEffect, useState } from 'react';
import { ImSpinner3 } from 'react-icons/im';
import { FaLinkedin, FaLink } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

import './sobreMi.css';

const SobreMi = () => {
  const [loading, setLoading] = useState(true);
  const [usuarios, setUsuarios] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const hardcodedUsers = [
      {
        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        description: 'Apasionado por la tecnología y el desarrollo de software. Me encanta crear soluciones innovadoras y eficientes.',
        urlImage: 'https://i.pravatar.cc/300?u=juan-perez',
        linkedinUrl: 'https://linkedin.com/in/juan-perez',
        otherSocialUrl: 'https://github.com/juan-perez'
      },
      {
        id: 2,
        nombre: 'Maria',
        apellido: 'Gonzalez',
        description: 'Diseñadora UX/UI con un ojo para la estética y la usabilidad. Mi objetivo es crear experiencias de usuario memorables.',
        urlImage: 'https://i.pravatar.cc/300?u=maria-gonzalez',
        linkedinUrl: 'https://linkedin.com/in/maria-gonzalez',
        otherSocialUrl: 'https://dribbble.com/maria-gonzalez'
      },
      {
        id: 3,
        nombre: 'Pedro',
        apellido: 'Ramirez',
        description: 'Ingeniero de datos con experiencia en la construcción de pipelines de datos robustos y escalables.',
        urlImage: 'https://i.pravatar.cc/300?u=pedro-ramirez',
        linkedinUrl: 'https://linkedin.com/in/pedro-ramirez',
        otherSocialUrl: 'https://twitter.com/pedro-ramirez'
      },
      {
        id: 4,
        nombre: 'Ana',
        apellido: 'García',
        description: 'Especialista en marketing digital enfocada en SEO y creación de contenido. Transformo datos en estrategias exitosas.',
        urlImage: 'https://i.pravatar.cc/300?u=ana-garcia',
        linkedinUrl: 'https://linkedin.com/in/ana-garcia',
        otherSocialUrl: 'https://behance.net/ana-garcia'
      },
      {
        id: 5,
        nombre: 'Carlos',
        apellido: 'Martínez',
        description: 'Desarrollador full-stack con experiencia en aplicaciones web escalables. Experto en el ecosistema de JavaScript.',
        urlImage: 'https://i.pravatar.cc/300?u=carlos-martinez',
        linkedinUrl: 'https://linkedin.com/in/carlos-martinez',
        otherSocialUrl: 'https://github.com/carlos-martinez'
      },
      {
        id: 6,
        nombre: 'Laura',
        apellido: 'López',
        description: 'Gerente de proyectos ágil, certificada en Scrum. Me dedico a facilitar la comunicación y a entregar valor de forma continua.',
        urlImage: 'https://i.pravatar.cc/300?u=laura-lopez',
        linkedinUrl: 'https://linkedin.com/in/laura-lopez',
        otherSocialUrl: 'https://twitter.com/laura-lopez'
      },
      {
        id: 7,
        nombre: 'Sergio',
        apellido: 'Hernández',
        description: 'Ingeniero de DevOps apasionado por la automatización y la infraestructura como código. Siempre buscando optimizar los flujos de trabajo.',
        urlImage: 'https://i.pravatar.cc/300?u=sergio-hernandez',
        linkedinUrl: 'https://linkedin.com/in/sergio-hernandez',
        otherSocialUrl: 'https://gitlab.com/sergio-hernandez'
      },
      {
        id: 8,
        nombre: 'Elena',
        apellido: 'Gomez',
        description: 'Científica de datos con habilidad para encontrar patrones y contar historias con datos. Experiencia en Python, R y SQL.',
        urlImage: 'https://i.pravatar.cc/300?u=elena-gomez',
        linkedinUrl: 'https://linkedin.com/in/elena-gomez',
        otherSocialUrl: 'https://kaggle.com/elena-gomez'
      },
      {
        id: 9,
        nombre: 'David',
        apellido: 'Díaz',
        description: 'Desarrollador móvil especializado en crear aplicaciones nativas para iOS y Android. Enfocado en el rendimiento y la experiencia de usuario.',
        urlImage: 'https://i.pravatar.cc/300?u=david-diaz',
        linkedinUrl: 'https://linkedin.com/in/david-diaz',
        otherSocialUrl: 'https://github.com/david-diaz'
      }
    ];
    setUsuarios(hardcodedUsers);
    setLoading(false);
  }, []);

  const filteredUsuarios = usuarios.filter(usuario =>
    usuario.nombre.toLowerCase().includes(query.toLowerCase()) ||
    usuario.apellido.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="sobre-mi-container">
      <h1 className="sobre-mi-title">Nuestro Equipo</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar miembros del equipo..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loader">
          <ImSpinner3 className="spinner-icon" />
        </div>
      ) : (
        <div className="usuarios-grid">
          {filteredUsuarios.map((usuario) => (
            <div key={usuario.id} className="usuario-card">
              <img src={usuario.urlImage} alt={`${usuario.nombre} ${usuario.apellido}`} className="usuario-image" />
              <div className="usuario-info">
                <h2 className="usuario-name">{`${usuario.nombre} ${usuario.apellido}`}</h2>
                <p className="usuario-description">{usuario.description}</p>
                <div className="social-links">
                  <a href={usuario.linkedinUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLinkedin />
                  </a>
                  <a href={usuario.otherSocialUrl} target="_blank" rel="noopener noreferrer" className="social-link">
                    <FaLink />
                  </a>
                </div>
                <button className="btn btn-primary modify-btn" onClick={() => navigate(`/modificar-usuario/${usuario.id}`)}>
                  Modificar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export { SobreMi };
