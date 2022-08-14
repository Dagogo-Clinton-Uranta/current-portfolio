import React,{useRef,useEffect} from 'react'
import Iframe from 'react-iframe'

import './portfolio.css'
import IMG1 from '../../assets/cinnamon2.png'
import IMG2 from '../../assets/barbucks2.png'
import IMG3 from '../../assets/bridgeway-web2.png'
import IMG4 from '../../assets/chat-app2.png'
import IMG5 from '../../assets/bridgewayco-op2.png'
import IMG6 from '../../assets/flacs-carpark2.png'
import IMG7 from '../../assets/bridgewayview1.png'
import IMG8 from '../../assets/laravel-job-board2.png'
import IMG9 from '../../assets/oop-dalibor1.png'
import IMG10 from '../../assets/calc1.png'
import IMG11 from '../../assets/chat-app2.png'

import VID1 from '../../assets/bway-main-page.mp4'
import VID2 from '../../assets/co-op-vid.mp4'
import VID3 from '../../assets/calc3.mp4'




import {Link} from "react-router-dom";

const Portfolio = () => {

  const video3Ref = useRef('')
  const video2Ref = useRef('')
  const video1Ref = useRef('')
   
   useEffect(()=>{
     video3Ref.current.play()
     video2Ref.current.play()
     video1Ref.current.play()
   },[])


  return (
<section id='portfolio'>
 <h5>My Recent work</h5>
 <h2>Portfolio</h2>


<div className="portfolio__item__type">
 <h2>Front End/Design </h2>
 <div className="portfolio__divider"></div>
 </div>

<div className="container portfolio__container">

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG1} alt="portfolio item 1"  />
</div>
  <h3>Cinnamon Bank Front End</h3>
  <div className="portfolio__item-cta">
 <Link to={"/portfolio1"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer" >Live Demo</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG2} alt="portfolio item 1"/>
</div>
  <h3>"Barbucks" Landing Page</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio2"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  {/*<img src={IMG3} alt="portfolio item 1"  />*/}
  {/*<iframe class="embed-responsive-item"id="ytplayer" type="text/html"  src="https://www.youtube.com/embed/wr66wu42Gu0?&autoplay=1&loop=1&rel=0&showinfo=0&color=white&iv_load_policy=3&playlist=wr66wu42Gu0"
      frameborder="0" allowfullscreen></iframe>*/}
      <video height="180px"  muted autoplay loop  preload="true" ref={video1Ref}>
      <source src={VID1} type="video/mp4"/>
    </video>

</div>
  <h3> Bank Webpage</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio3"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  </div>
 
 </article>
 </div>

 
 <div className="portfolio__item__type">
 <h2>React, Node JS {"&"} Mongo DB</h2>
 <div className="portfolio__divider"></div>
 </div>

 <div className="container portfolio__container">
 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG4} alt="portfolio item 1"  />
</div>
  <h3>Chat Room App</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio4"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  {/*<img src={IMG5} alt="portfolio item 1"  />*/}
  <video height="270px" muted autoplay loop  preload="true" ref={video2Ref}>
      <source src={VID2} type="video/mp4"/>
    </video>
</div>
  <h3>Online Marketplace (co-operative)</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio5"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG6} alt="portfolio item 1"  />
  </div>
  <h3>Truck Park Ticket Printer</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio6"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG7} alt="portfolio item 1"  />
  </div>
  <h3> Bank Account Portal</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio7"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  </div>
 </article>

</div>

 
<div className="portfolio__item__type">
 <h2>PHP / Laravel / My SQL </h2>
 <div className="portfolio__divider"></div>
</div>

 <div className="container portfolio__container">
 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG8} alt="portfolio item 1"  />
  </div>
  <h3>Laravel Job Board</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio8"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  {/*<a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>*/}
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG9} alt="portfolio item 1"  className="portfolio__adjust-image"/>
  </div>
  <h3>Object-Oriented Content Management System</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio9"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  {/* <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>*/}
  </div>
 </article>
 </div>


 <div className="portfolio__item__type">
 <h2>Earlier Projects</h2>
 <div className="portfolio__divider"></div>
 </div>

 <div className="container portfolio__container">
 <article className="portfolio__item" >
  <div className="portfolio__item-image">
 {/* <img src={IMG10} alt="portfolio item 1"  />*/}
 <video height="270px" muted autoplay loop  preload="true" ref={video3Ref}>
      <source src={VID3} type="video/mp4"/>
    </video>
  </div>
 
  <h3>Neumorphic Calculator</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio10"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://dribble.com/Alien_pixels" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
  </div>
 </article>

 
</div>



</section>
  )
}

export default Portfolio