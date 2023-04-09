import { useState, useEffect, useMemo } from "react";
import axios from "axios";
import RequestCard from "../components/RequestCard";
import { useLocation } from "react-router-dom";
import DoNotDisturbIcon from '@mui/icons-material/DoNotDisturb';
import FormRequest from "../components/FormRequest";

export default function Request(props) {
  const [solicitudes, setSolicitudes] = useState([]);
  const location = useLocation();
  const [form, setForm] = useState(false);
  const [id, setId] = useState(0);

  props.nav("Requests")

  useMemo(() => {
    if(location.pathname == "/solicitudes"){
      document.querySelector("body").style.background = "#000";
    }
    axios
      .get("http://localhost:4000/api/solicitudes")
      .then((response) => setSolicitudes(response.data))
      .catch((error) => console.error(error));
  });

    return (
        <div className="container mx-auto px-4 py-8">
          {
            solicitudes != "" ? 
            <>
            <h1 className="text-2xl font-bold mb-4 text-gray-500">Lista de solicitudes</h1>
            {
                solicitudes.map(e=>(
                    <RequestCard form={setForm} setId={setId} id={e.id} nombre={e.nombre} correo={e.correo} tel={e.tel} solicitud={e.solicitud} comentario={e.comentario} />
                ))
            }
            </> : 
            <div className="w-[100%] h-[80vh] flex justify-center flex-col items-center">
                <DoNotDisturbIcon style={{color: "#FFF", fontSize: "300px"}} />
                <h2 className="text-6xl text-white">Not Found</h2>
            </div>
          }
          {
            form ? 
            <div className="absolute top-[20%] left-[5%] w-[90%]">
                <FormRequest id={id} setForm={setForm}/>
            </div>
            : null
          }
        </div>
    )
}