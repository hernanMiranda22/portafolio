import React from 'react';
import AboutMe from './AboutMe';


function MainContent() {
  return (
    <section className="flex-1 p-2 flex justify-center items-start h-screen">
      <div className="p-4">
        <AboutMe/>
      </div>
    </section>
  );
}

export default MainContent;