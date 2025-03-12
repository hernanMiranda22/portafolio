import React from 'react'
import Proyecto1 from '../assets/proyecto1.png'
import Proyecto2 from '../proyecto2.png'
import { FaFileSignature, FaSyringe, FaGithub } from 'react-icons/fa'
import { SiKotlin, SiJetpackcompose, SiFirebase } from 'react-icons/si'
import { AiFillApi } from 'react-icons/ai'
import { TbApi } from 'react-icons/tb'
import iconRick from '../assets/icons8-rick-sanchez.svg'

function Projects() {
  return (
    <div className="flex flex-col w-full justify-start gap-4 items-start text-white">
      <h2 className="font-bold text-2xl m-0">Proyectos</h2>
      <div className="flex flex-col w-full justify-start gap-8 items-start">
        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
          <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <FaFileSignature />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-[24px] lg:text-[20px]">Student Register</strong>
                <p className="text-[20px] lg:text-[18px]">Proyecto personal</p>
                <p className="m-0 leading-5 tracking-normal text-left text-[20px] lg:text-[18px]">
                  Aplicacion para la gestion de datos y calificaciones de Alumnos de
                  un colegio
                </p>
                <div className="flex-col lg:flex-wrap lg:flex-row flex justify-start gap-2">
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
                    <div className="box-border">
                      <SiKotlin />
                    </div>
                    Kotlin
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
                    <div className="box-border">
                      <SiFirebase />
                    </div>
                    Firebase
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
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
              className="w-[300px] rounded-2xl object-cover lg:h-[300px] lg:w-auto lg:rounded-2xl lg:max-w-full lg:object-cover"
            />
          </div>
        </div>
        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-4">
          <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square text-white">
                <img src={iconRick} alt="gdfgdf" className="w-8 h-8" />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-[24px] lg:text-[20px]">
                  Rick And Morty App
                </strong>
                <p className="text-[20px] lg:text-[18px]">Proyecto personal</p>
                <p className="m-0 leading-5 tracking-normal text-left text-[20px] lg:text-[18px]">
                  Muestra a todos los personajes y datos de la serie Rick y Morty
                </p>
                <div className="flex-col lg:flex-wrap lg:flex-row flex justify-start gap-2">
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
                    <div className="box-border">
                      <SiKotlin />
                    </div>
                    Kotlin
                  </span>

                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
                    <div className="box-border">
                      <SiJetpackcompose />
                    </div>
                    Jectpack Compose
                  </span>

                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
                    <div className="box-border">
                      <TbApi />
                    </div>
                    RickAndMortyAPI
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
                    <div className="box-border">
                      <AiFillApi />
                    </div>
                    Retrofit2
                  </span>
                  <span className="inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-xl bg-gray-700 text-[20px] lg:text-[16px]">
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
              className="w-[300px] rounded-2xl object-cover lg:h-[300px] lg:w-auto lg:rounded-2xl lg:max-w-full lg:object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
