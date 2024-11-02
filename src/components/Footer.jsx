import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-800 text-white text-center p-4 mt-4">
      <p>
        &copy; {new Date().getFullYear()} Mi Aplicación. Todos los derechos
        reservados.
      </p>
    </footer>
  )
}

export default Footer
