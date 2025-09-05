import React from 'react'
import {Link} from "react-router-dom";
import {BiCaretRight} from 'react-icons/bi';
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay} from 'swiper';


/*Description imports */
import './itemdesc.css'


/*carousel imports */
import './gallery.css'



  /*portfolio item imports */
  import './formerportfolio.css'
  import IMG1 from '../../assets/audiowave1.png'
  import IMG2 from '../../assets/audiowave2.png'
  import IMG3 from '../../assets/audiowave3.png'
  import IMG4 from '../../assets/audiowave4.png'
  import IMG5 from '../../assets/audiowave5.png'
  import IMG6 from '../../assets/audiowave6.png'
 

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item15 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
            
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      
      <h5>Music Processing Platform</h5>
      <h2>Gallery</h2>
     
   <Swiper className="gallery__container"
   //swiper js options
   modules={[ Pagination, Scrollbar, A11y,Autoplay]}
   
   autoplay={{
    delay: 3500,
    disableOnInteraction: true,
  }}
   scrollbar={{ draggable: true }}
   slidesPerView={1}
   spaceBetween={50}
   pagination={{clickable:true}}
   
   > 
   {/*1 */}
  
    
    <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG2} style={{maxHeight:"25rem"}}  alt="portfolio item 1" />
    </div>
    <h3>( I )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/audiowave" className="btn">Project Code(Github)</a>}
    <a href="https://audiowave-tau.vercel.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>
    


 {/*2 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG6} style={{height:"25rem",margin:"0 auto"}}  alt="portfolio item 1" />
    </div>
    <h3>( II )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/audiowave" className="btn">Project Code(Github)</a>}
    <a href="https://audiowave-tau.vercel.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>


    {/*3 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG4} style={{height:"25rem"}}  alt="portfolio item 1" />
    </div>
    <h3>( III )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/audiowave" className="btn">Project Code(Github)</a>}
    <a href="https://audiowave-tau.vercel.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>


    {/*4 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG5} style={{height:"25rem",margin:"0 auto"}} alt="portfolio item 1" />
    </div>
    <h3>( IV )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/audiowave" className="btn">Project Code(Github)</a>}
    <a href="https://audiowave-tau.vercel.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Music Processing Platform</h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Design Decisions Include :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
            This project is a music streaming and sharing platform, intended for artistes to meet producers within the industry.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Key Features Include an updates and events page to keep track of what top industry movers are doing, a chat system for contacting your network and music catalog manager for song files</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Emphasis will be placed on the Music Catalog manager because of the compression code and file management is the top feature of this app.(see technology section below)</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>There is also a global music player located within the app, for song and playlist sampling.</p>
          </li>

         {/* DAGOGO -AUG -29 -2025 - I DONT NEED THESE POINTS NOW, BUT LATER
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The student module is for purchasing courses and past exam material in accordance with the school syllabus.</p>
          </li>

          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The parent module is for receiving announcements from the school, paying fees and monitoring their children's results.</p>
          </li>


          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The school module is for sending out announcements to parents and the teachers module is for uploading quiz questions and answers.</p>
          </li>
          */}
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Music Processing Platform</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p> When Uploading a song, important metadata information is requested such as Writer/composer names, ISR codes,ownership splits,song lyrics and publishing rights.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>All assets (images, pdfs and audiofiles) are stored in AWS S3 buckets, and the app's load speed is assisted with the use of AWS cloudfront. AWS route 53 is also used here for domain name set up.
              AWS CodePipeline is also used here, to deploy changes right from github into production  </p>
            
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>music-metadata library later helps to extract the files</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>handle ffmpeg library assists in converting aiff to mp3 files, using a uint8 array file buffer..continue here later </p>
          </li>
         {/* <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The offline functionality is handled by indexedDB, a javascript library which expands the use of local storage, by placing an SQL structure database right on the browser.</p>
          </li>

          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Before each file is stored, it is compressed using the ffmpeg library and my chosen bitrate .</p>
          </li>

        */}
        </ul>
      </article>
     
    
  </div>     
    
     <div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
    </section>

     {/*END OF  DESCRITPION SECTION*/}
      
    <Footer/>
      
      </div>
    )
  }
  
  export default Item15