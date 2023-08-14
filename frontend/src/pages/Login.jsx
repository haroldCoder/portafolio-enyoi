import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";
import Alert from '@mui/material/Alert';


export default function LoginPage(props) {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const onChangeUserName = (e) =>{
    setUsername(e.target.value)
  }
  
  const onChangePassword = (e) =>{
    setPassword(e.target.value)
  }

  const Submit = (e) =>{
    e.preventDefault();
    setOpen(true);

    if(username == import.meta.env.VITE_USER && password == import.meta.env.VITE_PASSWORD){
      props.setIsloggedIn(true) /* cuando se inicie sesion el prop de app.jsx isLoggedIn sera igual a true, para que la ruta privada sea accedida */
    }
  }

  useEffect(()=>{
    if(props.isLoggedIn){
      setTimeout(()=>{
        navigate("/solicitudes") // cuando el prop isLoggedIn sea true, inmediatamente sera redirigido a la ruta privada, para ver las solicitudes
      }, 2000)
      
    }
  })
  props.nav("Login")

  return (
    <div className='p-5'>
      <h1 className="text-4xl p-3 font-bold bg-gradient-to-br  from-blue-500 mb-6 to-gray-400 text-transparent bg-clip-text">Login</h1>
      <form onSubmit={Submit} className='mt-5 grid grid-cols-1 gap-24 w-[30%] max-lg:w-[60%] absolute max-lg:left-[20%] left-[40%]' action="">
        <div className='grid-item'>
          <h4 className='text-lg text-gray-500 mb-2'>Username</h4>
          <input type="text" value={username} onChange={onChangeUserName} className={`bg-transparent border-b-[1px] border-gray-500 ${!props.mode ? 'text-black' : 'text-gray-300'} p-2 w-[100%]`} />
        </div >
          
        <div className='grid-item'>
          <h4 className='text-lg text-gray-500 mb-2' >Password</h4>
          <input type="password" value={password} onChange={onChangePassword} className={`bg-transparent border-b-[1px] border-gray-500 ${!props.mode ? 'text-black' : 'text-gray-300'} p-2 w-[100%]`} />
        </div>
        <button className='bg-blue-500 rounded-md p-3 text-white'>Iniciar sesión</button>
        {
          open ?
          <Alert onClose={()=>{}} severity={`${props.isLoggedIn ? 'success' : 'error'}`} style={{background: "#AAA", fontSize: "15px"}}>{`${props.isLoggedIn ? 'Bievenido' : 'credenciales incorrectas'}`}</Alert>
          : null
        }
      </form>
      
    </div>
  );
}