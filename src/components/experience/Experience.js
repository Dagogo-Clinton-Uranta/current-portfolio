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
         <h4>Angular</h4>
         <small className='text-light'>3 Years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div> 
         <h4>HTML & CSS</h4>
         <small className='text-light'>6 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Typescript</h4>
         <small className='text-light'>5 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>React/Next JS</h4>
         <small className='text-light'>5 years</small>
         </div>
       
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
          <div>
         <h4>Tailwind CSS</h4>
         <small className='text-light'>3 Years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Material UI,SASS/LESS</h4>
         <small className='text-light'>4 Years</small>
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
         <h4>Node JS(Express & Nest)</h4>
         <small className='text-light'>5 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>PHP</h4>
         <small className='text-light'>3 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>MongoDB/NoSQL</h4>
         <small className='text-light'>5 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>PostgreSQL/MySQL</h4>
         <small className='text-light'>5 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Firebase</h4>
         <small className='text-light'>5 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Test Driven Development</h4>
         <small className='text-light'>3 years</small>
         </div>
        </article>


        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"1rem !important"}} className="experience__details-icon"/>
         <div>
         <h4>Docker Containerization/Deployment</h4>
         <small className='text-light'>3 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill style={{fontSize:"1rem !important"}} className="experience__details-icon"/>
         <div>
         <h4>OWASP Security Practices</h4>
         <small className='text-light'>3 years</small>
         </div>
        </article>

       </div>





       

      </div>


      <div className="experience__backend">
       <h3>Cloud and Deployment Services</h3>
       <div className="experience__content">
        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>AWS EC2/S3</h4>
         <small className='text-light'>2 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>Terraform for AWS</h4>
         <small className='text-light'>4 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>AWS CloudFront and Route 53</h4>
         <small className='text-light'>4 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>AWS VPC and IAM</h4>
         <small className='text-light'>2 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>AWS RDS and DynamoDB</h4>
         <small className='text-light'>2 years</small>
         </div>
        </article>

        <article className="experience__details">
         <BsFillPatchCheckFill className="experience__details-icon"/>
         <div>
         <h4>AWS CodePipeline</h4>
         <small className='text-light'>2 years</small>
         </div>
        </article>

       </div>





       

      </div>


   </div>

    </section>
  )
}

export default Experience