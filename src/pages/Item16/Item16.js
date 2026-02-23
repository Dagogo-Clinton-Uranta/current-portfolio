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
 
  import IMG1 from '../../assets/IMG-NEST-1.png'
  import IMG2 from '../../assets/IMG-NEST-2.png'
  import IMG3 from '../../assets/IMG-NEST-3.png'
  import IMG4 from '../../assets/IMG-NEST-4.png'
 
 

/*footer imports */
import Footer from '../../components/footer/Footer.js'

const Item16 = () => {
    return (
      <div onLoad={()=>{window.scrollTo(0, 130)}}>

<section id='testimonials'>
            
<div style={{display:"flex",justifyContent:"center",margin:"4rem"}}>
       <Link to={"/#portfolio"}><a href="#" className="btn btn-primary">Home</a></Link> 
     </div>
      
      
      <h5>Scalable Reservations and Booking Microservices(Nest Js)</h5>
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
    {<a href="https://github.com/Dagogo-Clinton-Uranta/sleepr-booking-microservices" className="btn">Project Code(Github)</a>}
   
    </div>
   </article>
    </SwiperSlide>
    


 {/*2 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG2} style={{height:"25rem",margin:"0 auto"}}  alt="portfolio item 1" />
    </div>
    <h3>( II )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/sleepr-booking-microservices" className="btn">Project Code(Github)</a>}
   
    </div>
   </article>
    </SwiperSlide>


    {/*3 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG3} style={{height:"25rem"}}  alt="portfolio item 1" />
    </div>
    <h3>( III )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/sleepr-booking-microservices" className="btn">Project Code(Github)</a>}
   
    </div>
   </article>
    </SwiperSlide>


    {/*4 */}
 <SwiperSlide className="gallery-testimonial">
    <article className="formerportfolio__item" >
     <div className="formerportfolio__item-image">
      <img src={IMG4} style={{height:"25rem",margin:"0 auto"}} alt="portfolio item 1" />
    </div>
    <h3>( IV )</h3>
    <div className="formerportfolio__item-cta">
    {<a href="https://github.com/Dagogo-Clinton-Uranta/sleepr-booking-microservices" className="btn">Project Code(Github)</a>}
    
    </div>
   </article>
    </SwiperSlide>


  </Swiper> 

    </section>

{/*END OF PROJECT DISPLAY SECTION */}


    <section id='services'>
    <h5>Scalable Reservations and Booking Microservices(Nest Js)</h5>
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
            Microservice separation for scalability — The system is split into focused services so each domain can scale and evolve independently. This improves resilience and reduces the impact of failures.

</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Abstract repository for reusable data access — A shared repository layer centralizes CRUD logic and error handling. This prevents repetition and keeps data access consistent across services..</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Flexible persistence design — Business logic is decoupled from the database layer. This allows storage technologies to change without rewriting core functionality..</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Event-driven service communication — Services communicate through events to remain loosely coupled. This enables asynchronous workflows and easier system expansion.</p>
          </li>
   

          






      
        </ul>
      </article>
     
    
  </div>     
    
    </section>

     {/*END OF  DESCRITPION SECTION*/}

    

    <section id='services'>
    <h5>Scalable Reservations and Booking Microservices(Nest Js)</h5>
    <h2>Technology Involved</h2>

    <div className="container decisions__container ">
      <article className="service">
        <div className="service__head">
          <h3>The rationale for technologies used :-</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>  Separating reservations, payments (Stripe), and notifications. RabbitMQ queues buffer and retry requests to maintain stability under heavy load..</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Containerized with Docker and deployed on Kubernetes (GKE) for scalable, production-grade orchestration. This enables smooth scaling and controlled rollouts. </p>
            
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>
Used MongoDB with Mongoose for structured data modeling and JWT-based authentication for secure access control. A shared database module keeps model registration consistent.</p>
          </li>
          <li>
            <BiCaretRight className='service__list-icon'/>
            <p>Implemented event-driven workflows so successful payments trigger downstream notifications asynchronously. Added structured logging and validation for production-level reliability. </p>
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
  
  export default Item16