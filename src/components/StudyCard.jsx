import React from 'react';

const StudyCard = ({
    icon,
    title,
    career,
    description,
    year,
    certification
  }) => {
    return (
      <div className="md:min-w-[30em] flex-row flex w-full justify-start gap-8">
        <div className="flex w-full flex-col lg:flex-row justify-start gap-4">
          <div className="flex-row flex w-full justify-start gap-4 items-start">
            <span className="bg-green-800 w-12 h-12 rounded-full flex items-center justify-center text-2xl aspect-square">
              {icon}
            </span>
            <div className="flex-col flex justify-start items-start w-full gap-2">
              <strong className="text-[24px] lg:text-[20px] text-left">
                {title}
              </strong>
              <p className="text-left text-[20px] lg:text-[18px]">{career}</p>
              <p className="text-left text-[20px] lg:text-[18px]">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-start items-start lg:items-end gap-2">
            <span className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]">
              {year}
            </span>
            <a
              href={certification}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-800 inline-flex items-center box-border flex-shrink-0 whitespace-nowrap selection-none gap-1 p-[4px] rounded-3xl text-[20px] lg:text-[18px]"
            >
              <span>Certificacion</span>
            </a>
          </div>
        </div>
      </div>
    );
  };
  

export default StudyCard;

