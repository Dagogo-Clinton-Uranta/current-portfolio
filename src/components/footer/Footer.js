import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaMedium} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href="/#" className='footer__logo'>DAGOGO CLINTON URANTA </a>

      <ul className='permalinks'>
        <li><a href="/#Home">Home</a></li>
        <li><a href="/#about">About</a></li>
        <li><a href="/#experience">Experience</a></li>
        <li><a href="/#services">Services</a></li>
        <li><a href="/#portfolio">Portfolio</a></li>
        <li><a href="/#Testimonials">Testimonials</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://medium.com/@dagogouranta"><FaMedium/></a>
        <a href="https://www.linkedin.com/in/dagogo-clinton-uranta-745a9b207/"><BsLinkedin/></a>
        <a href="https://github.com/Dagogo-Clinton-Uranta"><FaGithub/></a>
      </div>


      <div className="footer__copyright">
       <small>
        &copy; CLINTON. All Rights reserved.
       </small>
      </div>


    </footer>
  )
}

export default Footer