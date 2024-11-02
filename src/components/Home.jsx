import React from 'react';
import Card from './Card';
import AboutMe from './AboutMe';
import Technology from './Tehcnology';
import Experience from './Experience';


function MainContent() {
  return (
    <section className="flex-1 p-2 flex justify-center items-start h-screen">
      <div className="flex-col flex w-full ps-8 pe-8 pt-16 pb-16 max-w-customWidth justify-start box-border items-start  gap-6">
      
          <Card/>
      
          <AboutMe/>
      
        <hr className="border-t border-gray-700 my-6 w-full" />

          <Technology/>
        
          <Experience/>
        
      </div>
    </section>
  );
}

export default MainContent;