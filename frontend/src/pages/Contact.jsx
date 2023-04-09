import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import FormRequest from '../components/FormRequest';


function Contact(props) {
  props.nav("Contactame")

  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === "/Contactame"){
      document.querySelector("body").style.background = "#000";
    }
  })

  return (
    <FormRequest create={true}/>
  );
}

export default Contact;