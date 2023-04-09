import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function LoginPage(props) {
  const navigate = useNavigate();
  const handleLogin = () => {
    props.setIsloggedIn(true);
    
  };
  
  useEffect(()=>{
    if(props.isLoggedIn){
      navigate("/solicitudes")
    }
  })
  props.nav("Login")

  return (
    <div className='p-5'>
      <h1 className="text-4xl p-3 font-bold bg-gradient-to-br  from-blue-500 mb-6 to-gray-400 text-transparent bg-clip-text">Login</h1>
      <button className='bg-blue-500 rounded-md p-3 text-white absolute top-[50%] left-[40%] w-[20%]' onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
}