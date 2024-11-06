import React from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaRegFileAlt,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import DownloadCV from '../assets/Cv-Hernan-Miranda.pdf'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
      <div className="flex flex-col items-center justify-center md:flex-row gap-2 mt-2 md:mt-4">
        {/* Dirección de correo */}
        <a
          href="mirandahernan2002@gmail.com"
          className="flex items-center gap-2 text-white bg-green-950 hover:bg-green-800 rounded-md p-2 text-xl md:text-base"
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
            <FaRegFileAlt />
          </a>
          <a
            href="www.linkedin.com/in/hernán-miranda"
            className="text-white bg-green-950 hover:bg-green-800 w-12 h-12 sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hernanMiranda22"
            className="text-white bg-green-950 hover:bg-green-800 w-12 h-12 sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
