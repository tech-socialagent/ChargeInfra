



// ????








import React from 'react';
import Data from '../Data.json';
function GentletonProject() {
  return (
    <section className='gentleton_project_main'>
      <div className='project_up'>
        <img src={require('../assets/gentleton_project/') + Data.our_project.gentleton_project.gentleton_project_back}/>
      </div>
      <div className='project_down'>

      </div>
    </section>
  )
}

export default GentletonProject
