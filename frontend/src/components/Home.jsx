import React, { useCallback, useEffect, useMemo, useState } from 'react'
import harold from '../assets/harold-koderx.jpg';
import coder from '../assets/koderblue.png'
import enyoi from '../assets/enyoi.png'
import software from '../assets/software-engineering.png'
import Social from './Social';

export default function Home(props) {
    const [currentText, setCurrentText] = useState('');
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("Desarrollador")

    props.nav("Inicio")
    useEffect(() => {
        const interval = setInterval(() => {
            if (index < text.length) {
              setCurrentText(currentText + text[index]);
              setIndex(index + 1); 
            } 
            else{
                text == "Desarrollador" ? setText("Full stack") : setText("Desarrollador")
                setCurrentText('')
                setIndex(0)  
            }
          }, 200);
          return () => clearInterval(interval);
        }, [index, currentText, text]);

  return (
    <div className='main p-16 w-[100%]'>
        <div className="flex justify-between pr-16">
            <div className="target flex flex-col p-6 rounded-lg  bg-gradient-to-b border-[1px] shadow-lg shadow-slate-600 to-transparent from-gray-800 bg-repeat-round w-[50%]" style={{backdropFilter: "blur(6px)"}}>
                <div className="flex justify-between w-[100%]">
                    <div className='image'>
                        <img src={harold} className="w-[290px] h-[300px] rounded-full" alt="harold" />
                        <img src={coder} className="w-[100px] h-[100px] rounded-full absolute top-[50%] left-[30%]" alt="coder" />
                    </div>
                    <div className='w-[40%]'>
                        <h2 className='text-3xl text-white font-medium mb-4'>Harold Castaño</h2>      
                        <div className='text mt-8 flex'>
                            <h2 className='text-xl text-center mr-2'>Soy</h2>
                            <h2 className='text-xl text-blue-500'>{currentText}.</h2>
                        </div>
                    </div>
                </div>
                <div className='block mt-12'>
                    <h2 className='text-[#747474] text-md'>Soy Harold Castaño Alvarez, apasionado por la programación y las nuevas tecnologías. Me dedico al desarrollo e innovación de aplicaciones que satisfagan las necesidades de los clientes.</h2>
                </div>
            </div>
            {
                props.social == true ? 
                <div className='w-[28%]'>
                    <Social/>
                </div>
                : null
            }
        </div>
        <div className='target mb-8 flex flex-col items-center p-6 rounded-lg float-right mt-16 border-[1px] border-gray-400 shadow-lg shadow-slate-600 to-transparentbg-repeat-round w-[50%]' style={{backdropFilter: "blur(6px)"}}>
            <h2 className='text-[#747474] text-lg'>Como desarrollador Full Stack Web, cuento con habilidades y experiencia en diversas tecnologías, entre ellas Node.js y React.js, dos herramientas esenciales para la creación de aplicaciones web modernas y escalables. Además, poseo experiencia en el desarrollo de microservicios con .NET, lo que me permite crear soluciones robustas y seguras para mis clientes. A lo largo de mi carrera, he trabajado en diferentes proyectos que me han permitido ampliar mis habilidades técnicas y mi capacidad para resolver problemas de manera efectiva. Soy un apasionado por la programación y me encanta estar al día con las últimas tendencias y tecnologías. Si buscas un desarrollador comprometido y capaz de llevar tu proyecto al siguiente nivel, no dudes en contactarme.</h2>
            <img src={software} className="w-[30%]" alt="" />
        </div>
    </div>
  )
}
