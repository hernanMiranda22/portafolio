// PortfolioPresentation.js
import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';

function PortfolioPresentation() {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start p-8">
      
      {/* Imagen Circular */}
      <div className="flex-shrink-0 w-48 h-48 rounded-full border-4 border-red-500 overflow-hidden mr-6">
        <img 
          src="ruta-a-tu-imagen.jpg" 
          alt="Perfil" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Contenedor de Información */}
      <div className="flex flex-col gap-4">
        
        {/* Nombre y Apellido */}
        <h1 className="text-4xl font-bold text-brown-700">Nombre Apellido</h1>
        
        {/* Especialidad */}
        <h2 className="text-2xl font-semibold text-yellow-600">Especialidad</h2>
        
        {/* Ubicación */}
        <h3 className="text-xl font-medium text-green-600">Ubicación</h3>
        
        {/* Iconos y Enlaces */}
        <div className="flex gap-4 mt-4">
          {/* Dirección de correo */}
          <a href="mailto:correo@example.com" className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
            <FaEnvelope />
            <span>correo@example.com</span>
          </a>
          
          {/* Redes Sociales */}
          <a href="https://linkedin.com" className="text-blue-500 hover:text-blue-600">
            <FaLinkedin />
          </a>
          <a href="https://github.com" className="text-blue-500 hover:text-blue-600">
            <FaGithub />
          </a>
          <a href="https://twitter.com" className="text-blue-500 hover:text-blue-600">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPresentation;
