import React from 'react'
import Proyecto1 from '../proyecto1.png'
import Proyecto2 from '../proyecto2.png'
import { FaFileSignature, FaSyringe, FaGithub } from 'react-icons/fa'
import { SiKotlin, SiJetpackcompose, SiFirebase } from 'react-icons/si'
import { AiFillApi } from 'react-icons/ai'
import { TbApi } from 'react-icons/tb'

function Projects() {
  return (
    <div className="flex flex-col w-full justify-start gap-4 items-start text-white">
      <h2 className="font-bold text-2xl m-0">Proyectos</h2>
      <div className="flex flex-col w-full justify-start gap-8 items-start">
        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
          <div className="flex w-full flex-col md:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <FaFileSignature />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-2x1">Student Register</strong>
                <p>Proyecto personal</p>
                <p className="m-0 leading-5 tracking-normal text-left">
                  Aplicacion para la gestion de los datos y notas de Alumnos de
                  un colegio
                </p>
                <div className="flex-col md:flex-wrap md:flex-row flex justify-start gap-2">
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700">
                    <div className="box-border">
                      <SiKotlin />
                    </div>
                    Kotlin
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700">
                    <div className="box-border">
                      <SiFirebase />
                    </div>
                    Firebase
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700">
                    <div className="box-border">
                      <FaSyringe />
                    </div>
                    Hilt
                  </span>
                </div>
                <div className="flex flex-row items-start justify-start gap-2">
                  <a
                    href="https://github.com/hernanMiranda22/student-register"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-green-950 rounded-3xl border-2"
                  >
                    <button className="cursor-pointer flex font-medium pl-3 pr-3 pt-2 pb-2 gap-2 text-[14px] leading-5 tracking-normal">
                      <FaGithub className="h-6 w-8" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <img
              src={Proyecto1}
              alt=""
              className="w-[300px] rounded-2xl object-cover md:h-[300px] md:w-auto md:rounded-2xl md:max-w-full md:object-cover"
            />
          </div>
        </div>
        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-4">
          <div className="flex w-full flex-col md:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square"></span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-2x1">Rick And Morty App</strong>
                <p>Proyecto personal</p>
                <p className="m-0 leading-5 tracking-normal text-left">
                  Muestra a todos los personajes y detalles de Rick y Morty
                </p>
                <div className="flex-col md:flex-wrap md:flex-row flex justify-start gap-2">
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700">
                    <div className="box-border">
                      <SiKotlin />
                    </div>
                    Kotlin
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700">
                    <div className="box-border">
                      <TbApi />
                    </div>
                    RickAndMortyAPI
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700">
                    <div className="box-border">
                      <AiFillApi />
                    </div>
                    Retrofit2
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700">
                    <div className="box-border">
                      <FaSyringe />
                    </div>
                    Hilt
                  </span>
                </div>
                <div className="flex flex-row items-start justify-start gap-2">
                  <a
                    href="https://github.com/hernanMiranda22/RickAndMortyApp"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-green-950 rounded-3xl border-2"
                  >
                    <button className="cursor-pointer flex font-medium pl-3 pr-3 pt-2 pb-2 gap-2 text-[14px] leading-5 tracking-normal">
                      <FaGithub className="h-6 w-8" />
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <img
              src={Proyecto2}
              alt=""
              className="w-[300px] rounded-2xl object-cover md:h-[300px] md:w-auto md:rounded-2xl md:max-w-full md:object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
