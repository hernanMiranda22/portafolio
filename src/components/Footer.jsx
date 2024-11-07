import React from 'react'
import {
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa'
import { TbFileCv } from 'react-icons/tb'
import DownloadCV from '../assets/Cv-Hernan-Miranda.pdf'

function Footer() {
  return (
    <footer className="bg-customBackground text-white text-center p-4 mt-4">
      <div className="flex flex-col items-center justify-center md:flex-row gap-2 mt-2 md:mt-4">
        {/* Dirección de correo */}
        <a
          href="mailto:mirandahernan2002@gmail.com"
          target="_blank"
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
            <TbFileCv />
          </a>
          <a
            href="https://www.linkedin.com/in/hern%C3%A1n-miranda/"
            target="_blank"
            className="text-white bg-green-950 hover:bg-green-800 w-12 h-12 sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hernanMiranda22"
            target="_blank"
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
