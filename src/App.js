import './App.css';
import { NavBar } from './components/NavBar/navBar';
import { MyButton } from './components/MyButton/myButton';
import { Home } from './components/Home/home';
import { SobreMi } from './components/SobreMi/sobreMi';
// import { Project } from './components/Project/project';
import { Tecnologia } from './components/Tecnologia/tecnologia';
import { Habilidad } from './components/Habilidad/habilidad';
import { Blog } from './components/Blog/blog';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
      
      <NavBar/>

      <Routes>
        <Route exac path="/" element={<Home/>} />
        <Route exac path="/sobreMi" element={<SobreMi/>} />
        <Route exac path="/tecnologia" element={<Tecnologia/>} />
        <Route exac path="/habilidad" element={<Habilidad/>} />
        <Route exac path="/blog" element={<Blog/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
