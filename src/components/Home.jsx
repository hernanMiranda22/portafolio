import React from 'react';
import Card from './Card';
import AboutMe from './AboutMe';
import Technology from './Tehcnology';
import Experience from './Experience';
import Projects from './Projects';
import Study from './Study';


function MainContent() {
  return (
    <section className="flex-1 p-2 flex justify-center items-start min-h-screen">
      <div className="flex-col flex w-full ps-4 pe-4 pt-8 pb-8 max-w-[2000px] lg:max-w-customWidth justify-start box-border items-start gap-8 lg:ps-8 lg:pe-8 lg:pt-16 lg:pb-16">
        <Card />
        <AboutMe />
        <hr className="border-t border-gray-700 my-6 w-full" />
        <Technology />
        <Experience />
        <Projects />
        <Study />
        <hr className="border-t border-gray-700 my-6 w-full" />
      </div>
    </section>
  )
}

export default MainContent;