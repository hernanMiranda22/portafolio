import React from 'react';

function Navigation() {
  return (
    <nav className="bg-green-600 p-2">
      <ul className="flex justify-center md:justify-start gap-4">
        <li><a href="#home" className="text-gray-800 hover:text-white">Inicio</a></li>
        <li><a href="#about" className="text-gray-800 hover:text-white">Sobre nosotros</a></li>
        <li><a href="#services" className="text-gray-800 hover:text-white">Servicios</a></li>
        <li><a href="#contact" className="text-gray-800 hover:text-white">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;