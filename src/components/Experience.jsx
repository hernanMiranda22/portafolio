import React from 'react'
import { FaAndroid } from 'react-icons/fa'

function Experience() {
  return (
    <div className="flex-col w-full flex items-start justify-start gap-4 text-white ">
      {/* div general */}
      <h2 className="font-bold text-2xl">Experiencia</h2>
      <div className="flex w-full justify-between items-start gap-4">
        {/* div de empresas */}
        <div className="flex justify-between items-start gap-4">
          <div className="flex flex-row items-start justify-start gap-4 flex-grow">
            <div className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
              <FaAndroid />
            </div>

            <div className="box-border justify-start w-full flex flex-col items-start gap-2">
              <strong className="text-base">Calipso</strong>
              <p>Desarrollador Android, pasantía</p>
              <p>Desarrollo de una aplicación con Android Studio y Java</p>
            </div>
          </div>
        </div>
        <div className="items-end bg-green-700 rounded-xl p-1 text-xs">
          <span>2021</span>
        </div>
      </div>
    </div>
  )
}

export default Experience
