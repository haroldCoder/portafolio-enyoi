import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormRequest from '../components/FormRequest';


function Contact(props) {
  props.nav("Contactame") // el prop nav se cambiara a contactame, para saber en que pagina se encuentra el usuario

  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === "/Contactame"){
      document.querySelector("body").style.background = "#000"; // si el usuario se encuentra en la pagina de contactame el body tendra un fondo oscuro
    }
  })

  return (
    <FormRequest create={true}/> // se usa el componente FormRequest con el create en tue, para que haga la peticion post, para agregar la solicitud
  );
}

export default Contact;