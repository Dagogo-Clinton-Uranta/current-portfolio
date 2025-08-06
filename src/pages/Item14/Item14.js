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
  import IMG1 from '../../assets/bonecole-pic1.png'
  import IMG2 from '../../assets/bonecole-pic2.png'
  import IMG3 from '../../assets/bonecole-pic3.png'
  import IMG4 from '../../assets/bonecole-pic4.png'
  import IMG5 from '../../assets/bonecole-pic5.png'
 

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item14 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
            
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      
      <h5>Online School</h5>
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
      <img src={IMG1} style={{maxHeight:"25rem"}}  alt="portfolio item 1" />
    </div>
    <h3>( I )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/online-learning-marketplace" className="btn">Project Code(Github)</a>}
    <a href="https://bonecole.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>
    


     {/*2 */}
     <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG2} style={{maxHeight:"28rem",maxWidth:"18rem",margin:"0 auto"}}  alt="portfolio item 1" />
    </div>
    <h3>( II )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/online-learning-marketplace" className="btn">Project Code(Github)</a>}
    <a href="https://prep.bonecole.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>

 {/*3 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG3} style={{maxHeight:"28rem",maxWidth:"18rem",margin:"0 auto"}}  alt="portfolio item 1" />
    </div>
    <h3>( III )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/online-learning-marketplace" className="btn">Project Code(Github)</a>}
    <a href="https://prep.bonecole.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>


    {/*4 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG4} style={{maxHeight:"25rem"}}  alt="portfolio item 1" />
    </div>
    <h3>( IV )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/online-learning-marketplace" className="btn">Project Code(Github)</a>}
    <a href="https://schools.bonecole.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>


    {/*5 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG5} style={{maxHeight:"28rem",maxWidth:"18rem",margin:"0 auto"}} alt="portfolio item 1" />
    </div>
    <h3>( V )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/online-learning-marketplace" className="btn">Project Code(Github)</a>}
    <a href="https://bonecole-admin-erp.netlify.app/dashboard/schools" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Online School/Course MarketPlace</h5>
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
            This project is a full online school complete with modules for student learning, paying of school fees by parents and updating of courses for exams.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The app was made for students in Guinee (Africa), where kids have limited acces to the internet, so a key feature of the app was it's offline functionality for saving courses.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The app is accessible via google and facebook (sign ups)</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The app consists of four modules, a parent module, a student module, a teacher's module and a schools module .</p>
          </li>


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
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Online School/Course MarketPlace</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p> The app/modules are made using, react,node JS, firebaseand mongoDB .</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>All assets (images, pdfs and audiofiles) are stored in AWS S3 buckets, and the app's load speed is assisted with the use of AWS cloudfront. AWS route 53 is also used here for domain name set up.
              AWS CodePipeline is also used here, to deploy changes right from github into production  </p>
            
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Firebase is used here to track authentication and connect with google for login.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Payment Channels used here are OrangePay, paycard and MTN mobile money payments (african payment vendors available in Guinee) </p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The offline functionality is handled by indexedDB, a javascript library which expands the use of local storage, by placing an SQL structure database right on the browser.</p>
          </li>

          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Before each file is stored, it is compressed using the ffmpeg library and my chosen bitrate .</p>
          </li>
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
  
  export default Item14