import React, { useMemo } from 'react'
import {Link} from 'react-router-dom'

export default function SearchSystem() {
  let terms = [{
    "title": "Inicio",
    "descr": "Descripciòn sobre harold, como desarrollador."
  },
  {
    "title": "Proyectos",
    "descr": "Observa mi trabajo, como desarrollador full stack web."
  },
  {
    "title": "Tecnologias",
    "descr": "Conoce, mis herramientas de trabajo."
  },
  {
    "title": "Redes sociales",
    "descr": "Mira mas de cerca, mi trabajo."
  },
  {
    "title": "Contactame",
    "descr": "Si te gusta mi trabjo, y me quieres contratar. ¡Adelante!"
  },
  {
    "title": "Login",
    "descr": "Registrate en la aplicacion, si eres administrador."
  }
]
  return (
    <div className='gap col-span-1 gap-8 p-2 absolute w-[18%] right-[2%]' style={{background: "#00000093", backdropFilter: "blur(6px)"}}>
      {
        terms.map(e=>(
          <Link to={`/${e.title == "Inicio" ? '' : e.title}`}>
            <div className='hover:bg-gray-900 border-b-[1px] p-1 border-gray-300'>
              <h2 className='text-white text-lg text-center'>{e.title}</h2>
              <p className='text-blue-400 text-sm'>{e.descr}</p>
            </div>
          </Link>
        )) 
      }
    </div>
  )
}
