import './App.css';
import { NavBar } from './components/NavBar/navBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import { MyButton } from './components/MyButton/myButton';
import { Home } from './components/Home/home';

// SobreMi
import { SobreMi } from './components/SobreMi/sobreMi';

// HABILIDAD
import { Habilidad } from './components/Habilidad/habilidad';

// BLOG
import { Blog } from './components/Blog/blog';

// TECNOLOGIA
import { Tecnologia } from './components/Tecnologia/tecnologia';
import CrearTecnologia from './components/Tecnologia/crearTecnologia';
import EliminarTecnologia from './components/Tecnologia/eliminarTecnologia';
import ModificarTecnologia from './components/Tecnologia/modificarTecnologia';

// USUARIO
import { Usuario } from './components/Usuario/usuario';
import CrearUsuario from './components/Usuario/crearUsuario';
import EliminarUsuario from './components/Usuario/eliminarUsuario';
import ModificarUsuario from './components/Usuario/modificarUsuario';

function App() {
  return (
    <>
      <BrowserRouter>
      
      <NavBar/>

      <Routes>
        <Route exac path="/" element={<Home/>} />
        <Route exac path="/sobreMi" element={<SobreMi/>} />

        
        <Route exac path="/habilidad" element={<Habilidad/>} />
        <Route exac path="/blog" element={<Blog/>} />      

        {/* TECNOLOGIA */}
        <Route exac path="/tecnologia" element={<Tecnologia/>} />
        <Route path="/tecnologia/nueva" element={<CrearTecnologia />}/>
        <Route path="/eliminar-tecnologia/:id" element={<EliminarTecnologia />} />
        <Route path="/modificar-tecnologia/:id" element={<ModificarTecnologia />} />

        {/* USUARIO   */}
        <Route exac path="/usuario" element={<Usuario/>} />                
        <Route exac path="/usuario/nuevo" element={<CrearUsuario/>} />
        <Route exac path="/eliminar-usuario/:id" element={<EliminarUsuario/>} />
        <Route exac path="/modificar-usuario/:id" element={<ModificarUsuario/>} />        
           
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
