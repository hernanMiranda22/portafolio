import React from 'react';
import Card from './Card';
import AboutMe from './AboutMe';


function MainContent() {
  return (
    <section className="flex-1 p-2 flex justify-center items-start h-screen">
      <div className="flex-col">
        <div className="p-4">
          <Card/>
        </div>

        <div className="p-4">
          <AboutMe/>
        </div>
      </div>

      
    </section>
  );
}

export default MainContent;