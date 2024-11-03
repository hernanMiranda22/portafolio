// PortfolioPresentation.js
import React from 'react'
import FotoPefil from '../fotoperfil.png'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaRegFileAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'

function PortfolioPresentation() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-4 md:p-8 gap-4">
      {/* Imagen Circular */}
      <div className="flex-shrink-0 w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-customColorBorder overflow-hidden">
        <img
          src={FotoPefil}
          alt="Perfil"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor de Información */}
      <div className="flex flex-col justify-start gap-2 text-center md:text-left">
        {/* Nombre y Apellido */}
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Hernan Miranda
        </h1>

        {/* Especialidad */}
        <h2 className="text-xl md:text-2xl font-bold text-white">
          Android Developer
        </h2>

        {/* Ubicación */}
        <p className="flex justify-center md:justify-start items-center text-white">
          <FaMapMarkerAlt className="w-4 h-4 md:w-6 md:h-6 mr-1" />
          Buenos Aires, Argentina
        </p>

        {/* Iconos y Enlaces */}
        <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-4">
          {/* Dirección de correo */}
          <a
            href="mirandahernan2002@gmail.com"
            className="flex items-center gap-2 text-white bg-green-950 hover:bg-green-800 rounded-md p-2 text-sm md:text-base"
          >
            <FaEnvelope />
            <span>mirandahernan2002@gmail.com</span>
          </a>

          {/* Redes Sociales */}
          <div className="flex gap-2">
            <a
              href=""
              className="text-white bg-green-950 hover:bg-green-800 rounded-md p-2 sm:p-3 text-sm md:text-base"
            >
              <FaRegFileAlt />
            </a>
            <a
              href="www.linkedin.com/in/hernán-miranda"
              className="text-white bg-green-950 hover:bg-green-800 rounded-md p-2 sm:p-3 text-sm md:text-base"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/hernanMiranda22"
              className="text-white bg-green-950 hover:bg-green-800 rounded-md p-2 sm:p-3 text-sm md:text-base"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioPresentation
