import React from 'react'
import Proyecto1 from '../proyecto1.png'
import {
  FaFileSignature,
  FaAndroid,
  FaJava,
  FaSyringe,
  FaGithub,
} from 'react-icons/fa'
import { SiKotlin, SiJetpackcompose, SiFirebase } from 'react-icons/si'

function Projects() {
  return (
    <div className="flex flex-col w-full justify-start gap-4 items-start text-white">
      <h2 className="font-bold text-2xl m-0">Proyectos</h2>
      <div className="flex flex-col w-full justify-start gap-4 items-start">
        <div className="min-w-[30em] flex-row flex w-full justify-start gap-4">
          <div className="flex w-full flex-row justify-start gap-4">
            <div className="flex-row flex w-full justify-start gap-4 items-start">
              <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                <FaFileSignature />
              </span>
              <div className="flex-col flex justify-start items-start w-full gap-2">
                <strong className="text-2x1">Student Register</strong>
                <p>Proyecto personal</p>
                <p>
                  Aplicacion para la gestion de los datos y notas de Alumnos de
                  un colegio
                </p>
                <div className="flex-wrap flex justify-start gap-2">
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
              className="h-[300px] w-auto rounded-2xl max-w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
