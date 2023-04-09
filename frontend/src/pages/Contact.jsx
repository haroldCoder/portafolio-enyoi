import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from "framer-motion";
import axios from 'axios';


function Contact(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    request: '',
    comment: ''
  });

  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === "/Contactame"){
      document.querySelector("body").style.background = "#000";
    }
  })

  props.nav("Contactame")
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post("http://localhost:4000/api/solicitudes", {
      "nombre": formData.name,
      "correo": formData.email,
      "tel": formData.phone,
      "solicitud": formData.request,
      "comentario": formData.comment
    }).then((res)=>{console.log(res);})
    setFormData(prev=>({
      "name": "",
      "email": "",
      "phone": "",
      "request": "",
      "comment": ""
    }))
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  const buttonVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.2 },
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.6 },
    },
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto mt-12 bg-slate-800 p-8 rounded-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-500 font-bold mb-2">Nombre:</label>
          <input type="text" id="name" name="name" value={formData.name} required={true} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-500 font-bold mb-2">Correo:</label>
          <input type="email" id="email" name="email" value={formData.email} required onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-gray-500 font-bold mb-2">Teléfono/celular:</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} maxLength={13} required onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

        <div className="mb-4">
          <label htmlFor="request" className="block text-gray-500 font-bold mb-2">Solicitud:</label>
          <input type="text" id="request" name="request" value={formData.request} required onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-500 font-bold mb-2">Comentario:</label>
        <textarea id="comment" name="comment" value={formData.comment} required onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
      </div>
      <motion.button
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className='w-[40%]'
      >
        <button type="submit" className="bg-blue-600 w-[100%] ml-[5%] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Enviar</button>
      </motion.button>
      
    </form>
  );
}

export default Contact;