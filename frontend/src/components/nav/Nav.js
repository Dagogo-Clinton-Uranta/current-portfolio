import React from 'react'
import './nav.css'
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {RiServiceLine} from "react-icons/ri"
import {RiSuitcaseLine} from "react-icons/ri"
import {GiProgression} from "react-icons/gi"
import {BiPaperPlane} from "react-icons/bi"
import {BsStackOverflow} from "react-icons/bs"
import {AiOutlineHeart}from  "react-icons/ai"
import {MdOutlineDesignServices} from  "react-icons/md"

import {useState} from 'react'


const Nav = () => {
 
  const [activeNav,setActiveNav] = useState('#')

 
  return (

    <nav>
      
<a href="#" onClick={()=>{setActiveNav('#')}} className={activeNav === '#'? 'active':''}><AiOutlineHome/></a>
<a href="#about" onClick={()=>{setActiveNav('#about')}} className={activeNav === '#about'? 'active':''}><AiOutlineUser/></a>
<a href="#experience" onClick={()=>{setActiveNav('#experience')}} className={activeNav === '#experience'? 'active':''}><GiProgression/></a>
<a href="#portfolio" onClick={()=>{setActiveNav('#portfolio')}} className={activeNav === '#portfolio'? 'active':''}><RiSuitcaseLine/></a>
<a href="#services" onClick={()=>{setActiveNav('#services')}} className={activeNav === '#services'? 'active':''}><MdOutlineDesignServices/></a>
<a href="#contact" onClick={()=>{setActiveNav('#contact')}} className={activeNav === '#contact'? 'active':''}><BiPaperPlane/></a>



    </nav>
  )
}

export default Nav