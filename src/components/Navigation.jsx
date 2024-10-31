import React from 'react';

function Navigation() {
  return (
    <nav className="bg-green-600 p-2">
      <ul className="flex justify-center md:justify-start gap-4">
        <li><a href="#home" className="text-gray-800 hover:text-white">Inicio</a></li>
        <li><a href="#services" className="text-gray-800 hover:text-white">Proyectos</a></li>
        <li><a href="#contact" className="text-gray-800 hover:text-white">Experiencia</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;