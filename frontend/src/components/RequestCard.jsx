import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import axios from 'axios';
import { toast } from 'react-toastify';
import { API } from '../config';

export default function RequestCard(props ) { {/* el props contendra todo lo que la api devuelva en la pagina Request */}

  const DeleteRequest = (id) =>{
    axios.delete(API+id).then((res)=>{console.log(res); toast.info('Solicitud eliminada')}).catch((err)=>{toast.error("Ocurrio un error")});

  }

  return (
    <div className='p-4 w-[35%] max-md:w-[100%] mt-4'>
        <div className='flex justify-between pt-2 pb-3 px-4 border-b-[1px] border-gray-800 rounded-md'>
            <h2 className='text-white text-md'>{props.nombre}</h2>
            <h2 className='text-blue-400 text-md'>{props.correo}</h2>
        </div>
        <div className='p-8 flex justify-between'>
          <div className='content'>
            <h2 className='text-white font-bold'>{props.solicitud}</h2>
            <h4 className='text-gray-400 text-sm mt-2'>{props.comentario}. <p className='text-blue-500 mt-2'>{props.tel}</p></h4>
          </div>
          <div className='flex justify-evenly w-[20%] items-end'>
            <button className='hover:bg-blue-400 rounded-full p-1' onClick={()=>{DeleteRequest(props.id)}}> {/* si se da click en el boton de eliminar, este llamara la funcion DeleteRequest, la cual hara una peticion delete a la api rest, con el id, que se le pase por el props */}
              <DeleteIcon color='primary'/>
            </button>
            <button className='hover:bg-blue-400 rounded-full p-1' onClick={()=>{props.form(true); props.setId(props.id)}}>
              <EditIcon color='primary'/>
            </button>
          </div>
        </div>
    </div>
  )
}
