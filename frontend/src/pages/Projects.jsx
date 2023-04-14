import React from 'react';
import delivery from '../assets/delivery.png';
import sales from '../assets/sales.png';
import climax from '../assets/climax.png'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export default function Projects(props) {
    props.nav("Proyectos")
  return (
    <div className='w-100 p-8 grid grid-cols-1 gap-6'>
        <section className='hover:bg-gray-900 p-4 rounded-md'>
            <h2 className='bg-gradient-to-t bg-clip-text text-transparent to-blue-800 from-blue-400 text-3xl' style={{fontWeight: 700}}>Delivery App</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                        This is a simulator of an automated ordering business,
                        although it is only the proof of what a delivery application is,
                        with this project you can become a large delivery managment network.
                        To make use of this test, in the left panel you will see the list of all deliveries,
                        in green are the available deliveries and in red those that are delivering orders,
                        all deliveries will have a time of 5 min to deliver an order after that period you can occupy them.
                        This application uses react typescript in the frontend and express with nodejs in the backend and mysql as database.
                        To start it simply in the main root of the folder and type the command npm run dev,
                        then start the server by standing in the backend folder and type the command npm run dev
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
        <section className='hover:bg-gray-900 p-4 rounded-md'>
            <h2 className='bg-gradient-to-t bg-clip-text text-transparent to-blue-800 from-blue-400 text-3xl' style={{fontWeight: 700}}>Sales koderx</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                    koderx sales is a sales application so that the user can see any product they like,
                    but it also allows the user to publish their product to trade it, it has a simple interface,
                    easy to understand and adapts to all devices. It was created with react and javascript,
                    as a payment method stripe was implemented, and supabase was used for the database.
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
        <section className='hover:bg-gray-900 p-4 rounded-md'>
            <h2 className='bg-gradient-to-t bg-clip-text text-transparent to-blue-800 from-blue-400 text-3xl' style={{fontWeight: 700}}>Climax</h2>
            <div className='flex px-4 mt-6'>
                <div className='flex flex-col w-[40%]'>
                    <p className='text-gray-500 w-[100%]'>
                    climax is a web page, with a friendly interface,
                    where the user is allowed to see the weather of a certain region of the world,
                    entered by the user, to use it, simply enter the city and country,
                    then click on get weather and the information will be displayed on the right panel.
                    It was created with react and javascript and an external api
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
