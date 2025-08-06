import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
    <h5>What I Offer</h5>
    <h2>Services</h2>

    <div className="container services__container ">
      <article className="service">
        <div className="service__head">
          <h3>UI/UX Design</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Brand Identification and Representation</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>User Focused Testing</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Figma Website Prototyping</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>General website theming and consistency </p>
          </li>
         
        </ul>
      </article>
      {/*END OF UI/UX*/}

      <article className="service">
        <div className="service__head">
          <h3>Frontend Web Development</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Responsive, Mobile First Design</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>React Class Based and Functional Based Components</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>State Management with Redux and Context API</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Material UI and Bootstrap theming</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>CSS and SVG animations</p>
          </li>
        </ul>
      </article>
      {/*END OF UI/UX*/}


      <article className="service">
        <div className="service__head">
          <h3>Backend and Data Storage</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Relational and Non-Relational Database Planning(MySQl and MongoDB)</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>User Login and Information Management on your platform</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Model View Controller Architecture.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Private Cloud Set up and monitoring(Amazon Web Services)</p>
          </li>
          
        </ul>
      </article>
      {/*END OF web development*/}


      <article className="service">
        <div className="service__head">
          <h3>Website Hosting and Management</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Cpanel.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Firebase</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Heroku Hosting.</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Continuous Deployment and Version Control with Git</p>
          </li>
          <li>
            <BiCheck className='service__list-icon'/>
            <p>Netlify </p>
          </li>
        </ul>
      </article>
      {/*END OFWEBSITE HOSTING AND MGMT*/}
    
  </div>     
    
    </section>
  )
}

export default Services