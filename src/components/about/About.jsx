import React from 'react'
import './about.css'
import ME from '../../assets/aboutpic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To know</h5>
      <h2>About Me</h2>
      

      <div className="container about__container">
      
       <div className="about__me">

       <div className="about__me-image">
        <img src={ME} className="about__me-image-pic" alt="About Image"/>
       </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
          <FaAward className='about__icon'/>
           <h5>Experience</h5>
           <small>3+ Years Working Experience</small>
          </article>
         
          <article className='about__card'>
          <FiUsers className='about__icon'/>
           <h5>Clients</h5>
           <small>30+ Worldwide </small>
          </article>

          <article className='about__card'>
          <VscFolderLibrary className='about__icon'/>
           <h5>Projects</h5>
           <small>25+ Completed Projects</small>
          </article>
        </div>

        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
           Magni molestiae eum eveniet ex alias nemo culpa delectus 
           quasi iusto aspernatur, reiciendis minima eos modi quisquam 
           adipisci. Porro error nemo pariatur?
           
        </p>
      
       <div className='ctaButton'>
       <a href="#contact" className="btn btn-primary">Let's Talk</a>
       </div>
      
      </div>




      </div>

      
      </section>
  )
}

export default About