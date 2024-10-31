// PortfolioPresentation.js
import React from 'react';
import FotoPefil from '../fotoperfil.png'
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter, FaMapMarkerAlt } from 'react-icons/fa';

function PortfolioPresentation() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8">
      
      {/* Imagen Circular */}
      <div className="flex-shrink-0 w-48 h-48 rounded-full border-4 border-customColorBorder overflow-hidden mr-6">
        <img 
          src={FotoPefil}
          alt="Perfil" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor de Información */}
      <div className="flex flex-col gap-4">
        
        {/* Nombre y Apellido */}
        <h1 className="text-left text-4xl font-bold text-white">Hernan Miranda</h1>
        
        {/* Especialidad */}
        <h2 className="text-left text-2xl font-bold text-white">Android Developer</h2>
        
        {/* Ubicación */}
          <p className="flex items-center text-white">
            <svg className="w-6 h-6 items-center pt-1">
              <FaMapMarkerAlt />
            </svg>
            Buenos Aires, Argentina
          </p>
        {/* <h3 className="text-left text-xl font-bold text-white">Ubicación</h3> */}
        
        {/* Iconos y Enlaces */}
        <div className="flex gap-4">
          {/* Dirección de correo */}
          <a href="mirandahernan2002@gmail.com" className="flex items-center gap-2 text-white bg-green-950 hover:bg-green-800 rounded-md p-2">
            <FaEnvelope />
            <span>mirandahernan2002@gmail.com</span>
          </a>
          
          {/* Redes Sociales */}
          <a href="www.linkedin.com/in/hernán-miranda" className="text-white items-center bg-green-950 hover:bg-green-800 rounded-md p-3">
            <FaLinkedin />
          </a>
          <a href="https://github.com/hernanMiranda22" className="text-white items-center bg-green-950 hover:bg-green-800 rounded-md p-3">
            <FaGithub />
          </a>
          <a href="https://twitter.com" className="text-white items-center bg-green-950 hover:bg-green-800 rounded-md p-3">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPresentation;
