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
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-white bg-green-950 hover:bg-green-800 rounded-md p-2 text-[20px] sm:text-[24px] lg:text-[18px] h-[52px] lg:h-[48px]"
        >
          <FaEnvelope />
          <span>mirandahernan2002@gmail.com</span>
        </a>

        {/* Redes Sociales */}
        <div className="flex gap-2">
          <a
            href={DownloadCV}
            className="text-white bg-green-950 hover:bg-green-800 w-[52px] h-[52px] sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square lg:w-12 lg:h-12"
            download
          >
            <TbFileCv />
          </a>
          <a
            href="https://www.linkedin.com/in/hern%C3%A1n-miranda/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-950 hover:bg-green-800 w-[52px] h-[52px]sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square lg:w-12 lg:h-12"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hernanMiranda22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-green-950 hover:bg-green-800 w-[52px] h-[52px] sm:p-3 rounded-md flex items-center justify-center text-2xl aspect-square lg:w-12 lg:h-12"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
