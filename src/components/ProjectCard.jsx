import React from 'react';
import TechList from './TechList';
import {FaGithub} from 'react-icons/fa';

const ProjectCard = ({
    icon,
    title,
    categoryProject,
    description,
    techs,
    linkProject,
    projectImage
}) => {
    return(
        <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
            <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
                <div className="flex-row flex w-full justify-start gap-4 items-start">
                    <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
                        {icon}
                    </span>
                <div className="flex-col flex justify-start items-start w-full gap-2">
                    <strong className="text-[24px] lg:text-[20px]">{title}</strong>
                        <p className="text-[20px] lg:text-[18px]">{categoryProject}</p>
                        <p className="m-0 leading-5 tracking-normal text-left text-[20px] lg:text-[18px]">
                          {description}
                        </p>
                    <div className="flex-col lg:flex-wrap lg:flex-row flex justify-start gap-2">
                        <TechList
                            technologies={techs}
                        />
                    </div>
                        <div className="flex flex-row items-start justify-start gap-2">
                          <a
                            href={linkProject}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border-green-950 rounded-3xl border-2">
                            <button className="cursor-pointer flex font-medium pl-3 pr-3 pt-2 pb-2 gap-2 text-[14px] leading-5 tracking-normal">
                              <FaGithub className="h-6 w-8" />
                            </button>
                          </a>
                        </div>
                </div>
                </div>
                    <img
                      src={projectImage}
                      alt=""
                      className="w-[300px] rounded-2xl object-cover lg:h-[300px] lg:w-auto lg:rounded-2xl lg:max-w-full lg:object-cover"
                    />
            </div>
        </div>
    );
};

export default ProjectCard;