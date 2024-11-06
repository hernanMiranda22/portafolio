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
      <div className="flex-col flex w-full ps-8 pe-8 pt-16 pb-16 max-w-customWidth justify-start box-border items-start gap-8">
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