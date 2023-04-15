import React from 'react';
import delivery from '../assets/delivery.png';
import sales from '../assets/sales.png';
import climax from '../assets/climax.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Projects(props) {
    props.nav("Proyectos")
  return (
    <div className='w-100 p-8 grid grid-cols-1 gap-6'>
        <section className={`${props.mode ? 'hover:bg-gray-900' : 'hover:bg-gray-400'} p-4 rounded-md`}>
            <h2 className='bg-gradient-to-t bg-clip-text text-transparent to-blue-800 from-blue-400 text-3xl' style={{fontWeight: 700}}>Delivery App</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                    Este programa es un simulador de un negocio que utiliza pedidos automatizados.
                    Aunque se trata solamente de una versión de prueba, esta aplicación de entrega
                    puede ayudarte a expandir tu red de gestión de entregas. Para utilizarla,
                    en el panel izquierdo se puede ver una lista de todas las entregas, las entregas
                    disponibles se muestran en verde, mientras que las que están actualmente en proceso
                    de entrega se muestran en rojo. El tiempo límite para entregar un pedido es de 5 minutos,
                    después de este período las entregas pueden ser ocupadas por otros repartidores.
                    El frontend de esta aplicación fue desarrollado en React TypeScript,
                    mientras que el backend se construyó utilizando Express con NodeJS y la base de datos es de MySQL.
                    Para iniciarlo, simplemente acceda a la carpeta principal y escriba el comando "npm run dev".
                    Luego, inicie el servidor accediendo a la carpeta backend y escribiendo el mismo comando "npm run dev".
                        <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/delivery-app-22">github code.</a>
                    </p>
                    <div className='flex mt-16 relative left-[50%]'>
                        <RemoveRedEyeIcon color='primary'/>
                        <a href="https://delivery-koderx-app.netlify.app"><i className='text-blue-600 ml-2'>Visitar</i></a>
                    </div>
                </div>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={delivery} />
            </div>
            
        </section>
        <section className={`${props.mode ? 'hover:bg-gray-900' : 'hover:bg-gray-400'} p-4 rounded-md`}>
            <h2 className='bg-gradient-to-t bg-clip-text text-transparent to-blue-800 from-blue-400 text-3xl' style={{fontWeight: 700}}>Sales koderx</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                    Koderx Sales es una aplicación de ventas que permite a los usuarios explorar una amplia variedad de productos,
                    así como publicar sus propios artículos para comercializarlos.
                    La interfaz de la aplicación es sencilla y fácil de entender, y se adapta a cualquier tipo de dispositivo.
                    Esta aplicación fue creada utilizando React y JavaScript,
                    y como método de pago se implementó una franja de pago para facilitar las transacciones.
                    Además, para la gestión de la base de datos se utilizó Supabase, lo que garantiza una alta disponibilidad y escalabilidad de la aplicación.
                    En resumen, Koderx Sales es una plataforma confiable y eficiente para realizar transacciones comerciales en línea de manera rápida y segura.
                    <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/Sales-supabase">github code.</a>
                    </p>
                    <div className='flex mt-16 relative left-[50%]'>
                        <RemoveRedEyeIcon color='primary'/>
                        <a href="https://sales-koderx.netlify.app"><i className='text-blue-600 ml-2'>Visitar</i></a>
                    </div>
                </div>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={sales} />
            </div>
        </section>
        <section className={`${props.mode ? 'hover:bg-gray-900' : 'hover:bg-gray-400'} p-4 rounded-md`}>
            <h2 className='bg-gradient-to-t bg-clip-text text-transparent to-blue-800 from-blue-400 text-3xl' style={{fontWeight: 700}}>Climax</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                    Climax es una página web con una interfaz amigable que permite a los usuarios consultar el clima de cualquier región del mundo.
                    Para utilizarla, basta con ingresar el nombre de la ciudad y el país en el campo correspondiente y hacer clic en "Obtener tiempo".
                    La información meteorológica se mostrará en el panel derecho de la página.
                    Esta aplicación fue desarrollada utilizando React y JavaScript, y se integró con una API externa para obtener datos precisos y actualizados sobre el clima en tiempo real.
                    En definitiva, Climax es una herramienta útil y fácil de usar para conocer las condiciones climáticas en cualquier parte del mundo.
                    <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/ClimaxApp">github code.</a>
                    </p>
                    <div className='flex mt-16 relative left-[50%]'>
                        <RemoveRedEyeIcon color='primary'/>
                        <a href="https://climax-coderx.netlify.app"><i className='text-blue-600 ml-2'>Visitar</i></a>
                    </div>
                </div>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={climax} />
            </div>
        </section>
    </div>
  )
}
