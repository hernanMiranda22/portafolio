import React from 'react';
import Proyecto1 from '../assets/proyecto1.png';
import Proyecto2 from '../proyecto2.png';
import { FaFileSignature, FaSyringe } from 'react-icons/fa';
import { SiKotlin, SiJetpackcompose, SiFirebase } from 'react-icons/si';
import { AiFillApi } from 'react-icons/ai';
import { TbApi } from 'react-icons/tb';
import iconRick from '../assets/icons8-rick-sanchez.svg';
import ProjectCard from '../components/ProjectCard';

function Projects() {

  const techsProject1 = [
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <FaSyringe />, name: "Hilt" },
  ];

  const techsProject2 = [
    { icon: <SiKotlin />, name: "Kotlin" },
    { icon: <SiJetpackcompose/>, name: "Jetpack Compose" },
    { icon: <TbApi/>, name: "RickAndMortyApi" },
    { icon: <AiFillApi/>, name: "Retrofit2" },
    { icon: <FaSyringe />, name: "Hilt" },
  ];

  return (
    <div className="flex flex-col w-full justify-start gap-4 items-start text-white">
      <h2 className="font-bold text-2xl m-0">Proyectos</h2>
      <div className="flex flex-col w-full justify-start gap-8 items-start">
        <ProjectCard
          icon={<FaFileSignature/>}
          title={"Student Register"}
          categoryProject={"Proyecto personal"}
          description={"Aplicacion para la gestion de datos y calificaciones de Alumnos de un colegio"}
          techs={techsProject1}
          linkProject={"https://github.github/hernanMiranda22/student-register"}
          projectImage={Proyecto1}
        />

        <ProjectCard
          icon={<img src={iconRick} alt="gdfgdf" className="w-8 h-8" />}
          title={"Rick And Morty App"}
          categoryProject={"Proyecto personal"}
          description={"Muestra a todos los personajes y datos de la serie Rick y Morty"}
          techs={techsProject2}
          linkProject={"https://github.com/hernanMiranda22/RickAndMortyApp"}
          projectImage={Proyecto2}
        />
      </div>
    </div>
  )
}

export default Projects
