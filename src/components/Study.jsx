import React from 'react'
import { PiStudentFill } from 'react-icons/pi'
import { SiUdemy } from 'react-icons/si'

function Study() {
  return (
    <div className="flex-col flex justify-start items-start gap-4 w-full text-white">
      <h2 className="font-bold m-0 text-3xl">Estudios</h2>
      <div className="flex flex-col w-full justify-start gap-8 items-start">
        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
          <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <SiUdemy />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-[24px] lg:text-[20px] text-left">
                  Jetpack Compose: Curso definitivo desde 0 [2023]
                </strong>
                <p className="text-left text-[20px] lg:text-[18px]">Udemy</p>
                <p className="text-left text-[20px] lg:text-[18px]">
                  Aprendí a crear vistas con Jetpack Compose y como implementar
                  buenas practicas con la misma.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start lg:items-end gap-2">
              <span className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]">
                2024
              </span>
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
          <div className="flex-row flex w-full justify-start gap-4 items-start">
            <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
              <PiStudentFill />
            </span>
            <div className="flex-col flex justify-start items-start w-full gap-2">
              <strong className="text-2x1 text-[24px] lg:text-[20px]">
                Escuela de Educación Técnica N°1
              </strong>
              <p className="text-left text-[20px] lg:text-[18px]">
                Colegio secundario. Titulo de Ténico en Programación
              </p>
              <p className="text-left text-[20px] lg:text-[18px]">
                Aprendí las bases de la programación y a implentar el
                pensamiento lógico.
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
  )
}

export default Study
