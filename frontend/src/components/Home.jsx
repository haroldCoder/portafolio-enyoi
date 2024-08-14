import React, { useEffect, useState } from "react";
import harold from "../assets/harold-koderx.jpg";
import coder from "../assets/koderblue.png";
import software from "../assets/software-engineering.png";
import Models3d from "./Models3d";
import { Canvas } from "react-three-fiber";
import { Stage, PresentationControls } from "@react-three/drei";

export default function Home(props) {
  const [currentText, setCurrentText] = useState(""); //creamos el manejador para el texto de la animacion
  const [index, setIndex] = useState(0); //manejador del indexador en la letra por letra
  const [text, setText] = useState("Desarrollador");

  props.nav("Inicio");
  useEffect(() => {
    const interval = setInterval(() => {
      //setInterval de 200ml para la animacion
      if (index < text.length) {
        // si el index es menor a el largo del texto
        setCurrentText(currentText + text[index]); // el currentText sera igual a lo que almaceno anteriormente mas la letra del manejador text en posicion del indexador
        setIndex(index + 1); // cada 200ml el index aumentara en uno
      } else {
        text == "Desarrollador"
          ? setText("Full stack")
          : setText("Desarrollador"); // en caso de que el index sea igual al largo del texto entonces se compara si el texto es Desarrollador se alterna a Full Stack y viceversa
        setCurrentText(""); //el currentText se formatea
        setIndex(0); // y el index vuelve a ser 0 para repetir el bucle
      }
    }, 200);
    return () => clearInterval(interval); // retorna el fin del setInterval
  }, [index, currentText, text]);

  return (
    <div className="main p-16 w-[100%]">
      <div className="flex justify-between xl:pr-16 ">
        <div
          className="target xl:w-[60%] flex flex-col p-6 rounded-lg  bg-gradient-to-b border-[1px] shadow-lg shadow-slate-600 to-transparent from-gray-800 bg-repeat-round lg:w-[70%]"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <div className="flex justify-between max-md:flex-col w-[100%]">
            <div className="image max-md:flex md:w-[40%] h-72 max-md:justify-center">
              <img
                src={harold}
                className="max-md:w-64 md:h-[30vw] lg:w-72 lg:h-full lg:rounded-full object-cover"
                alt="harold"
              />
              <img
                src={coder}
                className="md:w-[82px] md:h-[82px] rounded-full absolute max-lg:hidden xl:w-[7vw] xl:h-[7vw] lg:left-[26%] lg:top-[47%]"
                alt="coder"
              />
            </div>
            <div className="w-[40%] max-md:w-[100%] max-md:mt-8">
              <h2 className="text-3xl text-white max-md:text-center font-medium mb-4">
                Harold Castaño
              </h2>
              <div className="text mt-8 flex">
                <h2 className="text-xl text-gray-400 text-center mr-2">Soy</h2>
                <h2 className="text-xl text-blue-500 max-sm:w-[100%]">
                  {currentText}.
                </h2>{" "}
                {/* se pone el curretText para que se ponga lo que es igual a lo que se almacena, en aquel estado */}
              </div>
            </div>
          </div>
          <div className="block max-sm:mt-16 mt-14 md:mt-10">
            <h2 className="text-[#747474] max-sm:text-lg max-lg:text-xl">
              Soy Harold Castaño Alvarez, Maestro del manejo del estres, el
              pensamiento computacional y la logica. Me dedico al desarrollo e
              innovación de aplicaciones que satisfagan las necesidades de los
              clientes.
            </h2>
          </div>
        </div>
      </div>
      <div className="flex lg:justify-end">
        <div
          className="target mb-8 flex flex-col items-center p-6 rounded-lg mt-16 border-[1px] border-gray-400 shadow-lg shadow-slate-600 to-transparentbg-repeat-round lg:w-[60%]"
          style={{ backdropFilter: "blur(6px)" }}
        >
          <h2 className="text-[#747474] text-lg">
            Como desarrollador Full Stack Web, cuento con habilidades y
            experiencia en diversas tecnologías, entre ellas Node.js y React.js,
            dos herramientas esenciales para la creación de aplicaciones web
            modernas y escalables. Además, poseo experiencia en el desarrollo de
            microservicios con .NET, lo que me permite crear soluciones robustas
            y seguras para mis clientes. A lo largo de mi carrera, he trabajado
            en diferentes proyectos que me han permitido ampliar mis habilidades
            técnicas y mi capacidad para resolver problemas de manera efectiva.
            Soy un apasionado por la programación y me encanta estar al día con
            las últimas tendencias y tecnologías. Si buscas un desarrollador
            comprometido y capaz de llevar tu proyecto al siguiente nivel, no
            dudes en contactarme.
          </h2>
          <Canvas
            shadows={"percentage"}
            suppressHydrationWarning
            dpr={[1, 2]}
            camera={{ fov: 45 }}
            style={{
              width: "40vw",
              height: "50vh",
              marginTop: "3%",
              position: "sticky",
              left: "60%",
            }}
          >
            <PresentationControls
              speed={1.5}
              global
              zoom={0.5}
              polar={[-0.1, Math.PI / 4]}
            >
              <Stage environment={"sunset"}>
                <Models3d />
              </Stage>
            </PresentationControls>
          </Canvas>
        </div>
      </div>
      <div
        className="target mb-8 flex flex-col p-6 rounded-lg mt-16 border-[1px] bg-gradient-to-b from-slate-800 to-black border-gray-400 shadow-lg shadow-slate-600 to-transparentbg-repeat-round max-sm:w-[100%] lg:w-[60%]"
        style={{ backdropFilter: "blur(6px)" }}
      >
        <h2 className="text-[#FFF] text-xl text-center">
          Encontraras esto en mi.
        </h2>
        <div className="my-6">
          <h4 className="text-blue-500 text-lg">Integro y honesto</h4>
          <p className="text-[#747474] mt-3 ml-2">
            Me enfoco en brindarle un producto de calidad, que satisfaga las
            necesidades del cliente.
          </p>
        </div>
        <div className="my-6">
          <h4 className="text-blue-500 text-lg">
            Colaboracion interdiciplinaria
          </h4>
          <p className="text-[#747474] mt-3 ml-2">
            En ocasiones oportunas, me gusta intercambiar roles de trabajo.
          </p>
        </div>
        <div className="my-6">
          <h4 className="text-blue-500 text-lg">Soluciones rapidas</h4>
          <p className="text-[#747474]  mt-3 ml-2">
            Procuro que las soluciones a los diferentes problemas técnicos sean
            lo más óptimas y rápidas posibles.
          </p>
        </div>
        <div className="my-6">
          <h4 className="text-blue-500 text-lg">Autodidacta</h4>
          <p className="text-[#747474] mt-3 ml-2">
            Me fascina estar siempre en constante aprendizaje por cuenta propia.
          </p>
        </div>
      </div>
    </div>
  );
}
