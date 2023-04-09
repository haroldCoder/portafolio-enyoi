import { useEffect, useMemo, useState } from 'react'
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
import { ToastContainer } from 'react-toastify'

function App() {
  const [nav, setNav] = useState('');
  const [social, setSocial] = useState(false);
  const [isLoggedIn, setIsloggedIn] = useState(false);

  if (nav !== 'Contactame' && nav !== 'Requests') {
    document.querySelector('body').style.background = '#FFF';
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar nav={nav} social={setSocial} />
        <Routes>
          <Route path='/' element={<Home nav={setNav} social={social} />} />
          <Route path='/Proyectos' element={<Projects nav={setNav} />} />
          <Route path='/Tecnologias' element={<Skills nav={setNav} />} />
          <Route path='/Contactame' element={<Contact nav={setNav} />} />
          <Route exact path="/Login" element={<LoginPage nav={setNav} isLoggedIn={isLoggedIn} setIsloggedIn={setIsloggedIn}/>} />
          <Route path='/solicitudes' element={isLoggedIn ? <Request nav={setNav} /> : null} />
        </Routes>
        <ToastContainer/>
      </div>
    </BrowserRouter>
  );
}

export default App;