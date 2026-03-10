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
  import IMG1 from '../../assets/test-driven-react-1.png'
  import IMG2 from '../../assets/test-driven-react-2.png'
  import IMG3 from '../../assets/test-driven-react-3.png'
  import IMG4 from '../../assets/test-driven-react-4.png'

  
/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item1 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
      
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      <h5>Item 10</h5>
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
      <img src={IMG1} alt="portfolio item 1" />
    </div>
    <h3>( I )</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com/Dagogo-Clinton-Uranta/test-driven-devt-in-react" className="btn">Project Code(Github)</a>
   {/* <a href="https://heuristic-jang-f21b6c.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>*/}
    </div>
   </article>
    </SwiperSlide>
    


     {/*2 */}
     <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG2} alt="portfolio item 2" />
    </div>
    <h3>(II)</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com/Dagogo-Clinton-Uranta/test-driven-devt-in-react" className="btn">Project Code(Github)</a>
    {/*<a href="https://heuristic-jang-f21b6c.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>*/}
    </div>
   </article>
    </SwiperSlide>


      {/*3 */}
      <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG3} alt="portfolio item 3" />
    </div>
    <h3>(III)</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com/Dagogo-Clinton-Uranta/test-driven-devt-in-react" className="btn">Project Code(Github)</a>
    {/*<a href="https://heuristic-jang-f21b6c.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>*/}
    </div>
   </article>
    </SwiperSlide>


     {/*3 */}
     <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG4} alt="portfolio item 4" />
    </div>
    <h3>(IV)</h3>
    <div className="formerportfolio__item-cta">
    <a href="https://github.com/Dagogo-Clinton-Uranta/test-driven-devt-in-react" className="btn">Project Code(Github)</a>
    {/*<a href="https://heuristic-jang-f21b6c.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>*/}
    </div>
   </article>
    </SwiperSlide>


 

  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}

 {/*
    <section id='services'>
    <h5>Test Driven Development - Shortlet Booking App</h5>
    <h2>Design Decisions</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Design Decisions Include:-</h3>
        </div>

        <ul className="service__list">
        <li>
            <BiCaretRight className='service__list-icon'/>
            <p>This is a fully functional calculator with a screen glare animation.</p>
          </li>
          
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
            CSS Box shadows to denote borders and give 3D effect.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>background image replicated in the body of the calculator to avoid hard changes in tone.</p>
          </li>
          
         
        </ul>
      </article>
     
    
  </div>     
    
    </section>
*/}

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Test Driven Development - Shortlet Booking App</h5>
    <h2>Technologies Used </h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>Rationale for technologies used include:-</h3>
        </div>

        <ul className="service__list">
         
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>I Employed Test Driven Development on this app, as an industry standard practice, for keeping track of code requirements as the codebase grew larger.</p> 
          </li>

 
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>React Testing Libray was used here to render components for UNIT TESTING, and to fetch test Ids. Jest library was also used here to mock functions .</p>
          </li>


          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>The Red, Green, Refactor methodology was used here as I wrote a test based on requirements, had the test fail, then refactored the code/components to meet requirements and pass the tests.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Test Suites, Grouped into describe blocks were sort tests being used into easily recognizable groups.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>An api call was made to load in the shortlet properties,but since the emphasis was on unit testing OUR CODE, and not the api, we used a Jest Mock implementaion of the API call.</p>
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
  
  export default Item1