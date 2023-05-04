


// Our project Home Section



import React from 'react';
import Data from '../Data.json';
import '../stylesheets/OurProject.css';
import OurProjectCard from './OurProjectCard';

function OurProject() {
  return (
    <section className='our_project_main' id='project_section'>
      <div className="titleLine">
        <h1>{Data.our_project.our_project_heading}</h1>
        <span className="animinated-line"></span>
      </div>
      <OurProjectCard />
    </section>
  )
}

export default OurProject
