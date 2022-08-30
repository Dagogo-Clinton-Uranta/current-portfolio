import React from 'react'
import './testimonials.css'

import AVTR5 from '../../assets/avatar5.jpg'
import AVTR6 from '../../assets/avatar6.jpg'
import AVTR7 from '../../assets/avatar7.jpg'
import AVTR8 from '../../assets/avatar8.jpeg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Scrollbar, A11y, Autoplay} from 'swiper';

//swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Reviews from clients</h5>
      <h2>Testimonials</h2>
     
   <Swiper className="container testimonials__container"
   //swiper js options
   modules={[ Pagination, Scrollbar, A11y,Autoplay]}
   
   autoplay={{
    delay: 3500,
    disableOnInteraction: false,
  }}
   scrollbar={{ draggable: true }}
   slidesPerView={1}
   spaceBetween={50}
   pagination={{clickable:true}}
   
   > 
   {/*1 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR8} alt="avatar one" />
     </div>

     
     <h5 className="client__name">Yula Wojcik</h5>
     <small className="client__review">
      Mr.Dagogo blew me away with the website he created for me.
       I explained how I wanted to come across to those viewing my portfolio, but was pleasantly surprised by the manner 
       he displayed my work pieces in an easily digestible manner!
      </small>

    </SwiperSlide>

     {/*2 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR5} alt="avatar one" />

     </div>

     <h5 className="client__name">Dapo Ojikutu</h5>
     <small className="client__review">
      Dagogo helped me with a client's law firm website. He really sped up 
      my work time, and what impressed me the most was his ability to communicate 
      the coding concepts I was struggling with. I learnt so easily from him and I 
      look forward to working with him again.
      </small>

    </SwiperSlide>

 {/*3 */}
    <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR6} alt="avatar one" />
     </div>
    
     <h5 className="client__name">Amber Roe</h5>
     <small className="client__review">
      I got my website done from Dagogo, and it was simple and so
       professional looking! I recommend him to every one. 
      </small>

    </SwiperSlide>

  {/*3 */}
  <SwiperSlide className="testimonial">
     <div className="client__avatar">
     <img src={AVTR7} alt="avatar one" />
     </div>
    
     <h5 className="client__name">Wale Atekoja</h5>
     <small className="client__review">
      Mr Dagogo Created a website my laundromat. I was completely 
      satisfied with what I got, as he got my requirements to a tee,
       including a reliable communcation system that goes straight to my phone. 
       I am really grateful for this !
      </small>

    </SwiperSlide>




  </Swiper> 


    </section>
  )
}

export default Testimonials