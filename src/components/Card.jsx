// PortfolioPresentation.js
import React from 'react'
import FotoPefil from '../assets/foto-de-perfil.png'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { TbFileCv } from 'react-icons/tb'
import DownloadCV from '../assets/Cv-Hernan-Miranda-Android-Developer.pdf'

function PortfolioPresentation() {
  return (
    <div className="flex flex-col lg:flex-row items-center sm:items-start p-2 lg:p-8 gap-4">
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
        <div className="flex flex-col md:flex-row gap-2 mt-2 md:mt-4">
          {/* Dirección de correo */}
          <a
            href="mailto:mirandahernan2002@gmail.com"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-white bg-green-950 hover:bg-green-800 rounded-md p-2 text-[16px] sm:text-xl"
          >
            <FaEnvelope />
            <span>mirandahernan2002@gmail.com</span>
          </a>

          {/* Redes Sociales */}
          <div className="flex gap-2">
            <a
              href={DownloadCV}
              className="text-white bg-green-950 hover:bg-green-800 w-12 h-12 sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square"
              download
            >
              <TbFileCv />
            </a>
            <a
              href="https://www.linkedin.com/in/hern%C3%A1n-miranda/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-950 hover:bg-green-800 w-12 h-12 sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/hernanMiranda22"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white bg-green-950 hover:bg-green-800 w-12 h-12 sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square"
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
