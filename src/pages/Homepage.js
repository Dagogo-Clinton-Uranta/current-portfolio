import React from 'react'
//jsx files are for emmet shortcux, not js
import Header from '../components/header/Header.js'
import Nav from '../components/nav/Nav.js'
import About from '../components/about/About.js'
import Experience from '../components/experience/Experience.js'
import Services from '../components/services/Services.js'
import Portfolio from '../components/portfolio/Portfolio.js'
import Contact from '../components/contact/Contact.js'
import Testimonials from '../components/testimonials/Testimonials.js'
import Footer from '../components/footer/Footer.js'



const Homepage = () => {
  return (
    <>
    <Header />
    <Nav/>
    <Experience />
    <Portfolio/>
    <About />
    <Services/>
   
    <Testimonials />
    <Contact />
    

    <Footer/>
    
    
    </>
  )
}

export default Homepage