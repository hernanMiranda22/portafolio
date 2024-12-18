import React from 'react'
import { PiStudentFill } from 'react-icons/pi'
import { SiUdemy, SiPlatzi } from 'react-icons/si'

function Study() {
  return (
    <div className="flex-col flex justify-start items-start gap-4 w-full text-white">
      <h2 className="font-bold m-0 text-3xl">Estudios y certificaciones</h2>
      <div className="flex flex-col w-full justify-start gap-8 items-start">
        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
          <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <SiPlatzi />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-[24px] lg:text-[20px] text-left">
                  Curso de Patrones de diseño en Android
                </strong>
                <p className="text-left text-[20px] lg:text-[18px]">Platzi</p>
                <p className="text-left text-[20px] lg:text-[18px]">
                  Aprendí a los conceptos de los Patrones de diseño mas usados
                  en Android y como aplicarlos en un proyecto.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start lg:items-end gap-2">
              <span className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]">
                2024
              </span>
              <a
                href="https://platzi.com/p/HernanMiranda/curso/1828-patrones-android/diploma/detalle/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]"
              >
                <span>Certificacion</span>
              </a>
            </div>
          </div>
        </div>

        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
          <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <SiPlatzi />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-[24px] lg:text-[20px] text-left">
                  Curso de Kotlin desde cero
                </strong>
                <p className="text-left text-[20px] lg:text-[18px]">Platzi</p>
                <p className="text-left text-[20px] lg:text-[18px]">
                  Aprendí a dominar el lenguaje de programacion Kotlin, sus
                  conceptos basicos y avanzados.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start lg:items-end gap-2">
              <span className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]">
                2024
              </span>
              <a
                href="https://platzi.com/p/HernanMiranda/curso/2245-kotlin/diploma/detalle/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]"
              >
                <span>Certificacion</span>
              </a>
            </div>
          </div>
        </div>

        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
          <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <SiUdemy />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-[24px] lg:text-[20px] text-left">
                  Curso de Jetpack Compose desde cero
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
              <a
                href="https://www.udemy.com/certificate/UC-60c9cb29-cfa0-4f4e-a14f-36065f7693c1/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]"
              >
                <span>Certificacion</span>
              </a>
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
