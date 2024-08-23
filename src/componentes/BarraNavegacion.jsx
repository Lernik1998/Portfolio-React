// Importamos las imagenes

import logo from "../assets/logoLernik.png"

// Importamos Iconos de sitios WEB

import {FaLinkedin} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";

// Creamos una función para la barra de navegación y la importamos desde App.jsx
const BarraNavegacion = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>

        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
             {/* Icono de LinkedIn con enlace a tu perfil */}
        <a href="https://www.linkedin.com/in/lernik-gasparyan-1ba773194/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
            
            {/* Icono de GitHub con enlace a tu perfil */}
        <a href="https://github.com/Lernik1998" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        </div>
    </nav>
  )
}

export default BarraNavegacion;