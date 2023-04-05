import { useEffect, useMemo, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Social from './components/Social'
import LoginPage from './pages/Login'


function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
}

function App() {
  const [nav, setNav] = useState('');
  const [social, setSocial] = useState(false);

  if (nav !== 'Contactame') {
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
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute
            exact
            path="/solicitudes"
            component={SolicitudesPage}
            isLoggedIn={isLoggedIn}
          />
          <Redirect to="/login" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;