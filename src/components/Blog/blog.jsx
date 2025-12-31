
import React, { useEffect, useState } from 'react';
import { ImSpinner3 } from 'react-icons/im';
import { useNavigate } from 'react-router-dom';

import './blog.css';

const Blog = () => {
  const [loading, setLoading] = useState(true);
  const [blogs, setBlogs] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Simulating API call
    const hardcodedBlogs = [
      { id: 1, title: 'Explorando el Universo React', description: 'Un viaje profundo a través de los hooks, el estado y los componentes que hacen de React una librería tan poderosa.', urlImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&q=80', author: 'Juan Perez' },
      { id: 2, title: 'CSS Moderno: Más allá de Flexbox', description: 'Descubre el poder de CSS Grid y otras técnicas avanzadas para crear layouts complejos y responsivos con facilidad.', urlImage: 'https://images.unsplash.com/photo-1507721999472-8ed4421b436d?w=500&q=80', author: 'Maria Gonzalez' },
      { id: 3, title: 'El Arte de la Visualización de Datos', description: 'Aprende a contar historias con datos utilizando librerías como D3.js y Chart.js para crear visualizaciones impactantes.', urlImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80', author: 'Pedro Ramirez' },
      { id: 4, title: 'Introducción a TypeScript', description: 'Fortalece tu código JavaScript con tipos estáticos. Una guía para principiantes para empezar a usar TypeScript en tus proyectos.', urlImage: 'https://images.unsplash.com/photo-1618335422477-6d602885aa59?w=500&q=80', author: 'Luisa Martinez' }
    ];
    setBlogs(hardcodedBlogs);
    setLoading(false);
  }, []);

  // Search logic is now more effective with a clearer layout
  const filteredBlogs = blogs.filter(blog =>
    blog.title.toLowerCase().includes(query.toLowerCase()) ||
    blog.description.toLowerCase().includes(query.toLowerCase()) ||
    blog.author.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="blog-container">
      <h1 className="blog-title">Nuestro Blog</h1>
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Buscar por título, contenido o autor..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {loading ? (
        <div className="loader">
          <ImSpinner3 className="spinner-icon" />
        </div>
      ) : (
        <div className="blog-list">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <div key={blog.id} className="blog-card" onClick={() => navigate(`/modificar-blog/${blog.id}`)}>
                <div className="blog-card-image-container">
                  <img src={blog.urlImage} alt={blog.title} className="blog-card-image" />
                </div>
                <div className="blog-card-info">
                  <h2 className="blog-card-title">{blog.title}</h2>
                  <p className="blog-card-author">Por {blog.author}</p>
                  <p className="blog-card-description">{blog.description}</p>
                  <span className="blog-card-read-more">Leer más...</span>
                </div>
              </div>
            ))
          ) : (
            <p>No se encontraron resultados para tu búsqueda.</p>
          )}
        </div>
      )}
    </div>
  );
};

export { Blog };
