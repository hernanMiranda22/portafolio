import React from 'react'
import { FaAndroid } from 'react-icons/fa'

function Experience() {
  return (
    <div className="flex-col w-full flex items-start justify-start gap-4 text-white ">
      <h2 className="font-bold text-2xl">Experiencia</h2>
      <div className="flex flex-col w-full justify-start gap-8 items-start">
        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
          <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <div className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <FaAndroid />
              </div>

              <div className="box-border justify-start w-full flex flex-col items-start gap-2">
                <strong className="text-[24px] lg:text-[20px]">Calipso</strong>
                <p className="text-[20px] lg:text-[18px]">
                  Desarrollador Android, pasantía
                </p>
                <p className="text-left text-[20px] lg:text-[18px]">
                  Participe en el desarrollo de una aplicación con Android Studio y Java desde cero hasta su version 1.0
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start lg:items-end gap-2">
              <span className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]">
                2021
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience
