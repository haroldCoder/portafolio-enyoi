import React from 'react';
import delivery from '../assets/delivery.png';
import sales from '../assets/sales.png';
import climax from '../assets/climax.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import airbnb_clone from '../assets/airbnb_clone.png'
import tweet from '../assets/tweet.png'

export default function Projects(props) {
    props.nav("Proyectos")

    let projectsList = [
        {
            "name": "Delivery App",
            "descript": `Este programa es un simulador de un negocio que utiliza pedidos automatizados.
                    Aunque se trata solamente de una versión de prueba, esta aplicación de entrega
                    puede ayudarte a expandir tu red de gestión de entregas. Para utilizarla,
                    en el panel izquierdo se puede ver una lista de todas las entregas, las entregas
                    disponibles se muestran en verde, mientras que las que están actualmente en proceso
                    de entrega se muestran en rojo. El tiempo límite para entregar un pedido es de 5 minutos,
                    después de este período las entregas pueden ser ocupadas por otros repartidores.
                    El frontend de esta aplicación fue desarrollado en React TypeScript,
                    mientras que el backend se construyó utilizando Express con NodeJS y la base de datos es de MySQL.
                    Para iniciarlo, simplemente acceda a la carpeta principal y escriba el comando "npm run dev".
                    Luego, inicie el servidor accediendo a la carpeta backend y escribiendo el mismo comando "npm run dev".`,
            "link": "https://delivery-koderx-app.netlify.app",
            "github": "https://github.com/haroldCoder/delivery-app-22",
            "image": delivery
        },
        {
            "name": "Sales koderx",
            "descript": `Koderx Sales es una aplicación de ventas que permite a los usuarios explorar una amplia variedad de productos,
                    así como publicar sus propios artículos para comercializarlos.
                    La interfaz de la aplicación es sencilla y fácil de entender, y se adapta a cualquier tipo de dispositivo.
                    Esta aplicación fue creada utilizando React y JavaScript,
                    y como método de pago se implementó una franja de pago para facilitar las transacciones.
                    Además, para la gestión de la base de datos se utilizó Supabase, lo que garantiza una alta disponibilidad y escalabilidad de la aplicación.
                    En resumen, Koderx Sales es una plataforma confiable y eficiente para realizar transacciones comerciales en línea de manera rápida y segura.`,
            "link": "https://sales-koderx.netlify.app",
            "github": "https://github.com/haroldCoder/Sales",
            "image": sales
        },
        {
            "name": "Climax",
            "descript": `Climax es una página web con una interfaz amigable que permite a los usuarios consultar el clima de cualquier región del mundo.
            Para utilizarla, basta con ingresar el nombre de la ciudad y el país en el campo correspondiente y hacer clic en "Obtener tiempo".
            La información meteorológica se mostrará en el panel derecho de la página.
            Esta aplicación fue desarrollada utilizando React y JavaScript, y se integró con una API externa para obtener datos precisos y actualizados sobre el clima en tiempo real.
            En definitiva, Climax es una herramienta útil y fácil de usar para conocer las condiciones climáticas en cualquier parte del mundo.`,
            "link": "https://climax-coderx.netlify.app",
            "github": "https://github.com/haroldCoder/ClimaxApp",
            "image": climax
        },
        {
            "name": "Airbnb-clone",
            "descript": ` Airbnb-clone es una aplicación de entrenamiento que se enfoca en replicar el diseño y la interfaz de la plataforma original sin intentar competir con ella.
                        Su objetivo es proporcionar a los usuarios un ambiente de práctica donde puedan explorar la funcionalidad de la página web real de Airbnb.
                        A través de la aplicación de entrenamiento, los usuarios pueden aprender a navegar por la interfaz y descubrir las características clave que hacen que Airbnb sea una plataforma tan popular. Desde buscar alojamientos hasta reservar habitaciones, la aplicación de entrenamiento de Airbnb es una herramienta útil para aquellos que desean familiarizarse con la plataforma antes de utilizarla en la vida real.`,
            "link": "https://airbnb-clone-koderx.netlify.app/",
            "github": "https://github.com/haroldCoder/Airbnb-Clone",
            "image": airbnb_clone
        },
        {
            "name": "Twitter-koderx-clone",
            "descript": `Esta aplicación tiene el mismo objetivo que Airbnb-clone.
             Se trata de una clonación de la aplicación original de Twitter,
             pero con una diferencia clave: los colores de azul han sido reemplazados por verde. Además del cambio de colores,
             esta aplicación presenta una interfaz de usuario muy similar a la de Twitter,
             lo que la hace intuitiva y fácil de usar para aquellos que ya están familiarizados con la red social.`,
            "link": "https://twitter-koderx-clone.netlify.app/",
            "github": "https://github.com/haroldCoder/Twitter-koderx",
            "image": tweet
        }
    ]
  return (
    <div className='w-100 max-xl:p-2 mt-6 p-8 grid grid-cols-1 gap-6'>
        {
            projectsList.map(e=>(
            <section className={`${props.mode ? 'hover:bg-gray-900' : 'hover:bg-gray-400'} p-4 max-lg:p-2 rounded-md`}>
                <h2 className='bg-gradient-to-t bg-clip-text text-transparent to-blue-800 from-blue-400 text-3xl' style={{fontWeight: 700}}>{e.name}</h2>
                <div className='flex max-xl:flex-col px-4 max-md:p-0 mt-6'>
                    <div className='flex flex-col w-[40%] max-xl:w-[100%]'>
                        <p className='text-gray-500 w-[100%]'>
                            {e.descript}
                            <a className='ml-2 text-blue-600' target='_blank' href={e.github}>github code.</a>
                        </p>
                        <div className='flex lg:mt-16 max-xl:my-10 relative left-[50%] max-xl:left-[35%] '>
                            <RemoveRedEyeIcon color='primary'/>
                            <a href={e.link}><i className='text-blue-600 ml-2'>Visitar</i></a>
                        </div>
                    </div>
                    <img className='max-xl:w-[100%] w-[45%] max-xl:h-[40vw] h-[50%] max-xl:m-0 ml-24 mt-24' src={e.image} />
                </div> 
            </section>
            ))  
        }
    </div>
  )
}
