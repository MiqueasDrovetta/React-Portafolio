import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './components/NavBar/navBar';
import { Home } from './components/Home/home';
import { SobreMi } from './components/SobreMi/sobreMi';
import { Habilidad } from './components/Habilidad/habilidad';
import { Tecnologia } from './components/Tecnologia/tecnologia';
import { Blog } from './components/Blog/blog';
import { Usuario } from './components/Usuario/usuario';
import { Index } from './components/Index/index';
import ModificarUsuario from './components/Usuario/modificarUsuario';
import ModificarTecnologia from './components/Tecnologia/modificarTecnologia';
import EliminarTecnologia from './components/Tecnologia/eliminarTecnologia';
import './App.css';

function App() {
  return (
    <Router basename="/React-Portafolio">
      <div className="App">
        <NavBar />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/index" element={<Index />} />
            <Route path="/sobreMi" element={<SobreMi />} />
            <Route path="/habilidad" element={<Habilidad />} />
            <Route path="/tecnologia" element={<Tecnologia />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/usuario" element={<Usuario />} />
            <Route path="/modificar-usuario/:id" element={<ModificarUsuario />} />
            <Route path="/modificar-tecnologia/:id" element={<ModificarTecnologia />} />
            <Route path="/eliminar-tecnologia/:id" element={<EliminarTecnologia />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
