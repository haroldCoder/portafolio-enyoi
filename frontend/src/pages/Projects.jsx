import React from 'react';
import delivery from '../assets/delivery.png';
import sales from '../assets/sales.png';
import climax from '../assets/climax.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import airbnb_clone from '../assets/airbnb_clone.png'
import tweet from '../assets/tweet.png'
import dashboard from '../assets/dashboard.png'
import pqrs from '../assets/pqrs.png';
import butacaventura from '../assets/butacaventura.jpg';
import movil from '../assets/App-movil.mp4'
import xiaomi3d from '../assets/xiaomi-3d.png'
import vipkoderx from '../assets/vipkoderx.png'

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
            "link": "https://sales-koderx.vercel.app/",
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
            "link": "https://twitter-koderx-clone.vercel.app/",
            "github": "https://github.com/haroldCoder/Twitter-koderx",
            "image": tweet
        },
        {
            "name": "Dashboard-koderx",
            "descript": `Es una pagina web, la cual fue parte de una prueba tecnica, el proyecto se trata de gestion de usuarios con Reactjs y ustilizando el localStorage`,
            "link": "https://dashboard-koderx.netlify.app/",
            "github": "https://github.com/haroldCoder/dashboard",
            "image": dashboard
        },
        {
            "name": "Pqrs Enyoi",
            "descript": `Es una aplicación web construida con Node.js, Express.js y Reactjs, la cual hace parte de una prueba para la compañia enyoi, 
             que permite almacenar y gestionar peticiones,
             quejas y reclamos (PQR) en una base de datos. Funciona como un CRUD, aunque no cuenta con la funcionalidad de actualización.
             En la interfaz del cliente, los usuarios pueden visualizar todas las PQR existentes y tienen la capacidad de crear sus propias PQR.`,
             "link": "https://pqrs-enyoi.netlify.app/",
             "github": "https://github.com/haroldCoder/test-enyoi",
             "image": pqrs
        },
        {
            "name": "Butacaventura",
            "descript": `Es una aplicación web creada con Node.js, Express.js y React.js utilizando TypeScript (NodeTs, ExpressTs y ReactTs), y utiliza una base de datos MySQL.
             La aplicación sigue una arquitectura orientada a objetos, principalmente en el backend. El objetivo de la aplicación fue desarrollar un proyecto de freelance para un cliente
            mexicano que buscaba una página de venta de boletos con un sistema único. Este sistema seleccionaba un número aleatorio de personas para ubicarlas en diferentes áreas del evento,
            ya sea en secciones VIP u otros lugares.`,
            "link": "https://butacaventura-haroldkoderx.netlify.app/",
            "image": butacaventura
        },
        {
            "name": "WhatsApp-koderx-clone",
            "descript": `Es una aplicación móvil que utiliza React Native con TypeScript para crear las interfaces de usuario en la parte móvil y aprovecha sus componentes nativos. Para almacenar la información,
             se ha desarrollado un servidor utilizando Node.js y Express.js con TypeScript. Como base de datos, se ha utilizado PostgreSQL para relacionar tanto a los usuarios como los mensajes entre ellos.
            La aplicación se encuentra en fase beta y cuenta con soporte tanto en Android como iOS`,
            "github": "https://github.com/haroldCoder/whatsapp-koderx",
            "image": movil,
            "type": "video"
        },
        {
            "name": "Xiaomi-3d-koderx",
            "descript": `Es una página web hecha con React.js, cuyo enfoque es clonar el estilo de la página de Apple, pero con productos de Xiaomi. Utiliza la biblioteca de Three.js para implementar animaciones
             y mostrar los diferentes móviles de la compañía. La página se encuentra actualmente en fase beta, pero se planea agregar más productos de la marca en el futuro, permitiendo a los usuarios interactuar con ellos.`,
            "github": "https://github.com/haroldCoder/xiaomi-3D",
            "image": xiaomi3d,
            "link": "https://xiaomi-3d-koderx.netlify.app/"
        },
        {
            "name": "Vip koderx",
            "descript": `Este sitio web, es la implementacion de tecnologias como Three.js, para animaciones, Stripe, para la pasarela de pagos.
            Simula un sitio en donde los usuarios pueden pagar diversos planes o adquirir una subscripcion para servicios especiales,
            ademas de que cuenta con una biblioteca reciente para que el usuario se registre o ingrese llamada clerk. el sitio esta contrueido con netxjs
            y Typescript, lo que nos permite tener el backend y frontend en el mismo proyecto, por lo que se implemento el servicio de la pasarela de stripe con
            Docker.`,
            "github": "https://github.com/haroldCoder/nextjs-stripe",
            "image": vipkoderx,
            "link": "https://nextjs-stripe-five.vercel.app/"
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
                            <a target='_blank' href={e.link}><i className='text-blue-600 ml-2'>Visitar</i></a>
                        </div>
                    </div>
                    {
                        e.type != "video" ?
                        <img className='max-xl:w-[100%] w-[45%] max-xl:h-[40vw] h-[50%] max-xl:m-0 ml-24 mt-24' src={e.image} />
                        : 
                        <video width="640" className='max-xl:w-[100%] w-[25%] max-xl:h-[40vw] h-[20%] max-xl:m-0 ml-24 mt-24' controls>
                            <source src={e.image} type="video/mp4" />
                            Tu navegador no admite el elemento de video.
                        </video>
                    }
                </div> 
            </section>
            ))  
        }
    </div>
  )
}
