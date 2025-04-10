import React from 'react'

function Navigation() {
  return (
    <nav className="bg-[#0F0F0F] p-2">
      <ul className="flex justify-center md:justify-center gap-4">
        <li>
          <a href="#home" className="text-gray-400 hover:text-white">
            Inicio
          </a>
        </li>
        <li>
          <a href="#services" className="text-gray-400 hover:text-white">
            Proyectos
          </a>
        </li>
        <li>
          <a href="#contact" className="text-gray-400 hover:text-white">
            Experiencia
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
