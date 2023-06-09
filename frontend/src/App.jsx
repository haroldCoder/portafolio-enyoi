import { useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route, redirect, useNavigate, Navigate} from 'react-router-dom'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Social from './components/Social'
import LoginPage from './pages/Login'
import Request from './pages/Request'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify' //importamos todo lo necesario para que la aplicacion funcione, correctamente, como lo es componentes, react-router-dom para hacer las diferentes paginas y el Toast container, para usar el react-toastify


function App() {
  const [nav, setNav] = useState(''); //manejador para controlar las distintas vistas en el menu de navegacion
  const [social, setSocial] = useState(false); //manejador para saber si se añade el componente de redes sociales
  const [isLoggedIn, setIsloggedIn] = useState(false); //manejador de el logueo en la app, para que cuando sea true la ruta protegida pueda ser accedida
  const [mode, setMode] = useState(true); //manejador para el modo de la interfaz, ya se oscuro o claro

  useMemo(()=>{
    if (nav !== 'Contactame' && nav !== 'Requests') { // si el controlador nav no es igual a la sesion de contactar ni a la de solicitudes el body tendra un fondo blanco
      document.querySelector('body').style.background = '#FFF';
    }
    if(mode){
      document.querySelector('body').style.background = '#000';
    }
  })

  return ( //usamos el Browser route para enrutar las distintas vistas de la aplicacion
    <BrowserRouter>
      <div className="App">
        <Navbar nav={nav} mode={mode} setMode={setMode} setSocial={setSocial} />
        <Routes>
          <Route path='/' element={<Home nav={setNav} setSocial={setSocial}  />} /> 
          <Route path='/Proyectos' element={<Projects mode={mode} nav={setNav} />} />
          <Route path='/Tecnologias' element={<Skills nav={setNav} />} />
          <Route path='/Contactame' element={<Contact nav={setNav} />} />
          <Route exact path="/Login" element={<LoginPage nav={setNav} mode={mode} isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>} />
          <Route path='/solicitudes' element={isLoggedIn ? <Request nav={setNav} /> : null} />
        </Routes>
        <ToastContainer/>
      </div>
        {
          social && nav == "Inicio" ? 
          <div className='max-md:w-[20vw] w-[28%] absolute top-[18%] max-lg:left-[55%] max-md:left-[2%] max-xl:left-[65%] left-[70%]'> 
              <Social mode={mode} /> {/* si el prop que me trae desde app.jsx es igual a true, se pintara lo que esta el el componente Social */}
          </div>
          : null
        }
    </BrowserRouter>
  );
}

export default App;