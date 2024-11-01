import React from 'react';
import Card from './Card';
import AboutMe from './AboutMe';
import Technology from './Tehcnology';


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

        <hr className="border-t border-gray-700 my-6" />

        <div className="p-4">
          <Technology/>
        </div>
      </div>
    </section>
  );
}

export default MainContent;