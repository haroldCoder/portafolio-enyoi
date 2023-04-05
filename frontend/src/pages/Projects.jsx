import React from 'react';
import delivery from '../assets/delivery.png';
import sales from '../assets/sales.png';
import climax from '../assets/climax.png'

export default function Projects(props) {
    props.nav("Proyectos")
  return (
    <div className='w-100 p-8'>
        <section>
            <h2 className='text-white text-3xl'>Delivery App</h2>
            <div className='flex px-4 mt-6'>
                <p className='text-gray-500 w-[40%]'>
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
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={delivery} />
            </div>
        </section>
        <section>
            <h2 className='text-white text-3xl'>Sales koderx</h2>
            <div className='flex px-4 mt-6'>
                <p className='text-gray-500 w-[40%]'>
                koderx sales is a sales application so that the user can see any product they like,
                but it also allows the user to publish their product to trade it, it has a simple interface,
                easy to understand and adapts to all devices. It was created with react and javascript,
                as a payment method stripe was implemented, and supabase was used for the database.
                <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/Sales-supabase">github code.</a>
                </p>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={sales} />
            </div>
        </section>
        <section>
            <h2 className='text-white text-3xl'>Climax</h2>
            <div className='flex px-4 mt-6'>
                <p className='text-gray-500 w-[40%]'>
                climax is a web page, with a friendly interface,
                where the user is allowed to see the weather of a certain region of the world,
                entered by the user, to use it, simply enter the city and country,
                then click on get weather and the information will be displayed on the right panel.
                It was created with react and javascript and an external api
                <a className='ml-2 text-blue-600' target='_blank' href="https://github.com/haroldCoder/ClimaxApp">github code.</a>
                </p>
                <img className='w-[45%] h-[50%] ml-24 mt-24' src={climax} />
            </div>
        </section>
    </div>
  )
}
