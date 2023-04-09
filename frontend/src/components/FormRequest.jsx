import React, {useState} from 'react'
import { motion } from "framer-motion";
import axios from 'axios';
import { toast } from 'react-toastify';

export default function FormRequest(props) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        request: '',
        comment: ''
      });
    const handleSubmit = (e) => {
        e.preventDefault();
        if(props.create == true){
            axios.post("http://localhost:4000/api/solicitudes", {
                "nombre": formData.name,
                "correo": formData.email,
                "tel": formData.phone,
                "solicitud": formData.request,
                "comentario": formData.comment
            }).then((res)=>{console.log(res); toast.success("Solicitud enviada")})
            .catch((err)=>{toast.error("Ocurrio un error")});
            setFormData(prev=>({
                "name": "",
                "email": "",
                "phone": "",
                "request": "",
                "comment": ""
            }))
            
        }
        else{
            axios.put("http://localhost:4000/api/solicitudes/"+props.id, {
                "solicitud": formData.request,
                "comentario": formData.comment
            }).then((res)=>{console.log(res); toast.success("Solicitud modificada")})
            .catch((err)=>{toast.error("Ocurrio un error")});
            setFormData(prev=>({
                "name": "",
                "email": "",
                "phone": "",
                "request": "",
                "comment": ""
            }))
            props.setForm(false);
        }
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
        {
            props.create ?
            <>
                <div className="mb-4">
                <label htmlFor="name" className="block text-gray-500 font-bold mb-2">Nombre:</label>
                <input type="text" id="name" name="name" maxLength={25} value={formData.name} required={true} onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                <label htmlFor="email" className="block text-gray-500 font-bold mb-2">Correo:</label>
                <input type="email" id="email" name="email" maxLength={100} value={formData.email} required onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>

                <div className="mb-4">
                <label htmlFor="phone" className="block text-gray-500 font-bold mb-2">Teléfono/celular:</label>
                <input type="tel" id="phone" name="phone" value={formData.phone} maxLength={13} required onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
                </div>
            </>
            : null
        }
        <div className="mb-4">
          <label htmlFor="request" className="block text-gray-500 font-bold mb-2">Solicitud:</label>
          <input type="text" id="request" name="request" maxLength={100} value={formData.request} required onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>

      <div className="mb-4">
        <label htmlFor="comment" className="block text-gray-500 font-bold mb-2">Comentario:</label>
        <textarea id="comment" name="comment" value={formData.comment} maxLength={255} required onChange={handleInputChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
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
  )
}
