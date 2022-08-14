import React from 'react'
import './experience.css'
import { BsFillPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
   <h5>My Skill Set</h5>
   <h2>My Experience</h2>
   
   <div className="container experience__container">
   
      <div className="experience__frontend">
       <h3>Frontend Development</h3>
       <div className="experience__content">
        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>HTML</h4>
         <small className='text-light'>Proficient</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div> 
         <h4>CSS</h4>
         <small className='text-light'>intermediate</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Javascript</h4>
         <small className='text-light'>Proficient</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>React JS</h4>
         <small className='text-light'>Proficient</small>
         </div>
       
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
         <h4>Babel</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Webpack</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

       </div>
      </div>

       <div className="experience__backend">
       <h3>Backend Development</h3>
       <div className="experience__content">
        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Node JS</h4>
         <small className='text-light'>intermediate</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>PHP</h4>
         <small className='text-light'>intermediate</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>MongoDB</h4>
         <small className='text-light'>intermediate</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>MySQL</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Laravel</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Object Oriented Programming</h4>
         <small className='text-light'>Intermediate</small>
         </div>
        </article>

       </div>

      </div>


   </div>

    </section>
  )
}

export default Experience