import React from 'react';
import { PiStudentFill } from 'react-icons/pi';
import { SiUdemy, SiPlatzi } from 'react-icons/si';
import StudyCard from '../components/StudyCard';

function Study() {
  return (
    <div className="flex-col flex justify-start items-start gap-4 w-full text-white">
      <h2 className="font-bold m-0 text-3xl">Estudios y certificaciones</h2>
      <div className="flex flex-col w-full justify-start gap-8 items-start">

      <StudyCard
          icon = {<SiUdemy/>}
          title={"Curso de Android avanzado con Kotlin"}
          career={"Udemy"}
          description={"Aprendí los conceptos sobre Arquitectura, Inyección de dependencias, Modularación en aplicaciones Android y como aplicarlas en un proyecto."}
          year={"2025"}
          certification={"https://www.udemy.com/certificate/UC-374c7321-0eef-45eb-bc88-1b55a6923cbc/"}
        />
      
      <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
          <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <PiStudentFill />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-[24px] lg:text-[20px] text-left">
                  Universidad Nacional de Lanús
                </strong>
                <p className="text-left text-[20px] lg:text-[18px]">Licenciatura en Sistemas</p>
                <p className="text-left text-[20px] lg:text-[18px]">
                  Cursando el primer cuatrimestre del primer año.
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-start items-start lg:items-end gap-2">
              <span className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]">
                2025
              </span>
            </div>
          </div>
        </div>

        <StudyCard
          icon = {<SiPlatzi/>}
          title={"Curso de patrones de diseño en Android"}
          career={"platzi"}
          description={"Aprendí los conceptos de los Patrones de diseño mas usados en Android y como aplicarlos en un proyecto."}
          year={"2025"}
          certification={"https://platzi.com/p/HernanMiranda/curso/1828-patrones-android/diploma/detalle/"}
        />


        <StudyCard
          icon = {<SiPlatzi/>}
          title={"Curso de Kotlin desde cero"}
          career={"platzi"}
          description={"Aprendí la sintaxis del lenguaje de programación Kotlin, sus conceptos basicos y avanzados."}
          year={"2025"}
          certification={"https://platzi.com/p/HernanMiranda/curso/2245-kotlin/diploma/detalle/"}
        />

        <StudyCard
          icon = {<SiUdemy/>}
          title={"Curso de Jetpack Compose desde cero"}
          career={"Udemy"}
          description={"Aprendí a crear vistas con Jetpack Compose y como implementar buenas practicas con la misma."}
          year={"2025"}
          certification={"https://www.udemy.com/certificate/UC-60c9cb29-cfa0-4f4e-a14f-36065f7693c1/"}
        />

        
        <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
          <div className="flex-row flex w-full justify-start gap-4 items-start">
            <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
              <PiStudentFill />
            </span>
            <div className="flex-col flex justify-start items-start w-full gap-2">
              <strong className="text-2x1 text-[24px] lg:text-[20px]">
                Escuela de Educación Secundaria Técnica N°1
              </strong>
              <p className="text-left text-[20px] lg:text-[18px]">
                Bachillerato de técnico en Programación
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
