import React,{useEffect,useState} from 'react'

//import ImageFadeIn from "react-image-fade-in";

import './portfolio.css'

import IMG1 from '../../assets/iphone2.gif'
import IMG2 from '../../assets/barbucks2.png'
import IMG3 from '../../assets/c3.png'
import IMG4 from '../../assets/chat-app2.png'
//import IMG5 from '../../assets/bway-cop-op.gif'
import IMG6 from '../../assets/flacs-carpark2.png'
import IMG7 from '../../assets/bridgewayview1.png'
import IMG8 from '../../assets/laravel-job-board2.png'
import IMG9 from '../../assets/oop-dalibor1.png'
//import IMG10 from '../../assets/calc-3.gif'
import IMG11 from '../../assets/chat-app2.png'


/*co-op slideshow */
import IMG12 from '../../assets/co1.png'
import IMG13 from '../../assets/co2.png'
import IMG14 from '../../assets/co3.png'

/*calc slideshow */
import IMG21 from '../../assets/c1.png'
import IMG22 from '../../assets/c2.png'
import IMG23 from '../../assets/c3.png'
import IMG24 from '../../assets/c4.png'
import IMG25 from '../../assets/c5.png'
import IMG26 from '../../assets/c6.png'
import IMG27 from '../../assets/c7.png'
import IMG28 from '../../assets/c8.png'
import IMG29 from '../../assets/c9.png'

/*bway slideshow */
/*import IMG31 from '../../assets/bw1.png'
import IMG32 from '../../assets/bw2.png'
import IMG33 from '../../assets/bw3.png'
import IMG34 from '../../assets/bw4.png'
import IMG35 from '../../assets/bw5.png'
import IMG36 from '../../assets/bw6.png'
import IMG37 from '../../assets/bw7.png'
import IMG38 from '../../assets/bw8.png'
import IMG39 from '../../assets/bw9.png'
import IMG40 from '../../assets/bw10.png'
import IMG41 from '../../assets/bw11.png'
import IMG42 from '../../assets/bw12.png'*/
import IMG43 from '../../assets/bw13.png'
/*import IMG44 from '../../assets/bw14.png'
import IMG45 from '../../assets/bw15.png'
import IMG46 from '../../assets/bw16.png'
import IMG47 from '../../assets/bw17.png'
import IMG48 from '../../assets/bw18.png'
import IMG49 from '../../assets/bw19.png'
import IMG50 from '../../assets/bw20.png'
import IMG51 from '../../assets/bw21.png'
import IMG52 from '../../assets/bw22.png'
import IMG53 from '../../assets/bw23.png'*/
import IMG54 from '../../assets/sleepconnad.png'
import IMG55 from '../../assets/sleepconnsales.png'
import IMG56 from '../../assets/poorcred.png'
import IMG57 from '../../assets/nightsocial.png'

import {Link} from "react-router-dom";

const Portfolio = () => {

const video1 = 'https://dagogobucket.s3.eu-west-2.amazonaws.com/bway-main-page.mp4'
const video2 = 'https://dagogobucket.s3.eu-west-2.amazonaws.com/co-op-vid.mp4'
const video3 =  'https://dagogobucket.s3.eu-west-2.amazonaws.com/calc3.mp4'



const [changeImage,setChangeImage] = useState(IMG22)
const [changeBw,setChangeBw] = useState(IMG43)
const [changeCo1,setChangeCo1] = useState(true)
const [changeCo2,setChangeCo2] = useState(false)
const [changeCo3,setChangeCo3] = useState(false)
 
  /*for co-op*/
  const urls= [IMG12, IMG13, IMG14];
  const divStyle = {
    height: "270px",
    width: "400px",
    backgroundColor: '#f2f2f2',
    borderRadius:"1rem"
  }
  const imageStyle = {
    height: '100%',
    width: 'auto',
    justifySelf: 'center'
  }

   
   useEffect(()=>{

    /*FOR CO-OPERATIVE*/ 
    setInterval(

      ()=>{
       
         
         setTimeout(function(){
          setChangeCo1(false)
          setChangeCo2(true)
          setChangeCo3(false)
         },2000)

         setTimeout(function(){
          setChangeCo1(false)
          setChangeCo2(false)
          setChangeCo3(true)
         },4000)

         setTimeout(function(){
          setChangeCo1(true)
          setChangeCo2(false)
          setChangeCo3(false)
         },6000)

        },8000)

   
  /*for bway main 
    setInterval(

      ()=>{
        setTimeout(function(){
          setChangeBw(IMG32)
         },100)

         setTimeout(function(){
          setChangeBw(IMG33)
         },200)

         setTimeout(function(){
          setChangeBw(IMG34)
         },300)

         setTimeout(function(){
          setChangeBw(IMG35)
         },400)

         setTimeout(function(){
          setChangeBw(IMG36)
         },500)

         setTimeout(function(){
          setChangeBw(IMG37)
         },600)

         setTimeout(function(){
          setChangeBw(IMG38)
         },700)

         setTimeout(function(){
          setChangeBw(IMG39)
         },800)

         setTimeout(function(){
          setChangeBw(IMG40)
         },900)

         setTimeout(function(){
          setChangeBw(IMG41)
         },1000)

         setTimeout(function(){
          setChangeBw(IMG42)
         },1100)

         setTimeout(function(){
          setChangeBw(IMG43)
         },1200)

         setTimeout(function(){
          setChangeBw(IMG44)
         },1300)

         setTimeout(function(){
          setChangeBw(IMG45)
         },1400)

         setTimeout(function(){
          setChangeBw(IMG46)
         },1800)

         setTimeout(function(){
          setChangeBw(IMG47)
         },1900)

         setTimeout(function(){
          setChangeBw(IMG48)
         },2000)

         setTimeout(function(){
          setChangeBw(IMG49)
         },2100)

         setTimeout(function(){
          setChangeBw(IMG50)
         },2200)

         setTimeout(function(){
          setChangeBw(IMG51)
         },2300)

         setTimeout(function(){
          setChangeBw(IMG52)
         },2400)

        setTimeout(function(){
          setChangeBw(IMG53)
         },2500)
     
         setTimeout(function(){
          setChangeBw(IMG53)
         },2600)

         setTimeout(function(){
          setChangeBw(IMG53)
         },2700)
        
      }
      
    ,3000)*/

/*for calc */
    setInterval(

      ()=>{
        setTimeout(function(){
          setChangeImage(IMG23)
         },100)

         setTimeout(function(){
          setChangeImage(IMG23)
         },200)

         setTimeout(function(){
          setChangeImage(IMG24)
         },300)

         setTimeout(function(){
          setChangeImage(IMG25)
         },300)

         setTimeout(function(){
          setChangeImage(IMG26)
         },400)

         setTimeout(function(){
          setChangeImage(IMG27)
         },500)

         setTimeout(function(){
          setChangeImage(IMG28)
         },600)

         setTimeout(function(){
          setChangeImage(IMG29)
         },700)

         
      }
      
    ,700)


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
  <h3>Iphone 3D Landing Page</h3>
  <div className="portfolio__item-cta">
 <Link to={"/portfolio1"}><div className='btn'>Project Summary</div></Link> 
  <a href="https://iphone-threejs-delta.vercel.app/" className="btn btn-primary" target="_blank" rel="noreferrer" >Live Webpage</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG2} alt="portfolio item 1"/>
</div>
  <h3>"Barbucks" Landing Page</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio2"}><a href="https://dagogo.xyz/portfolio2" className="btn">Project Summary</a></Link> 
  <a href="https://barbucks.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 </article>


 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG54} alt="portfolio item 1"  />

</div>
  <h3>"Sleep Connection" Advertorial Page</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio3"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://bridgewaymfb.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG43} alt="portfolio item 1"  />

</div>
  <h3> Bank Webpage</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio3"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://bridge-way.netlify.app" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 
 </article>




 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG55} alt="portfolio item 1"  />

</div>
  <h3>"Sleep Connection" Sales Page</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio12"}><a href="" className="btn">Project Summary</a></Link> 
  <a href="https://sales-page-iota.vercel.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 
 </article>



 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG57} alt="portfolio item 1"  />

</div>
  <h3>"Nigth Social" social media</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio3"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://bridgewaymfb.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 
 </article>



 <article className="portfolio__item" >
  <div className="portfolio__item-image">
   <img src={IMG56} alt="portfolio item 1"  />

</div>
  <h3> "poor credit" Conversions Page</h3>
  
  <div className="portfolio__item-cta">
  <Link to={"/portfolio3"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://bridgewaymfb.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
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
  <Link to={"/portfolio4/"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://goofy-einstein-ec2b2b.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  {/*<img src={IMG5} alt="portfolio item 5"  />*/}
  {/*<video height="270px" muted autoplay playsinline loop  preload="true" ref={video2Ref}>
      <source src={video2} type="video/mp4"/>
    </video>*/}

{/*<Carousel divStyle={divStyle} delay={1000} mode={"fade"} >
        {urls.map((url, index) => (
          <div key={index} style={imageStyle}>
            <img
              src={changeCo}
              style={{ width: "100%", height: "auto" }}
              alt="asdada"
              
            />
          </div>
        ))}
      </Carousel>*/}

  {/*changeCo1 && <img height={300} src={IMG12} /> */}
{<img  height={300} src={IMG12} /> }
{/*changeCo3 &&<img height={300} src={IMG14} />*/}
  

 {/*<iframe style={{borderRadius:"2.5rem"}} src="https://player.vimeo.com/video/739982715?h=30455e7e64&amp;title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0&amp;muted=0" width="100%" height="270px" controls="0"  allow="autoplay;"  title="co-op-vid.mp4"></iframe>*/}
 {/*<div className="portfolio__item-image-display-block"><div id="faux-gif"  className={transClass? 'faux-gif-translate':'hi'}></div></div>*/}
</div>
  <h3>Online Marketplace (co-operative)</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio5"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://bridgewayco-op.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG6} alt="portfolio item 1"  />
  </div>
  <h3>Truck Park Ticket Printer</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio6"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://flacscarpark.herokuapp.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG7} alt="portfolio item 1"  />
  </div>
  <h3> Bank Account Portal</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio7"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
  <a href="https://bridgewayview.com" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 </article>

</div>

 
{/*<div className="portfolio__item__type">
 <h2>PHP / Laravel / My SQL </h2>
 <div className="portfolio__divider"></div>
</div>*/}

 {/*<div className="container portfolio__container">
 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG8} alt="portfolio item 1"  />
  </div>
  <h3>Laravel Job Board</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio8"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
 <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 </article>

 <article className="portfolio__item" >
  <div className="portfolio__item-image">
  <img src={IMG9} alt="portfolio item 1"  className="portfolio__adjust-image"/>
  </div>
  <h3>Object-Oriented Content Management System</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio9"}><a href="https://github.com" className="btn">Project Summary</a></Link> 
   <a href="#" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 </article>
 </div> */}


 <div className="portfolio__item__type">
 <h2>Animation Projects</h2>
 <div className="portfolio__divider"></div>
 </div>

 <div className="container portfolio__container">
 <article className="portfolio__item" >
  <div className="portfolio__item-image" >
  <img src={changeImage} alt="portfolio item 10"  />
 {/*<video height="270px" muted autoplay loop playsinline preload="true" ref={video3Ref}>
      <source src={video3} type="video/mp4"/>
    </video>*/}
  {/*<VideoPlayer video ={VID3} className={"coop-vid"}/>*/}
  {/*<ReactPlayer url={video3}
       playing={true}
        loop={true}
        muted={true}
        controls={false}
        playsinline={true}
  height ={"50%"} width={"100%"} className="portfolio__adjust-image" /> */}
   {/*<div className="portfolio__item-image-display-block"><div id="faux-gif" className={transClass? 'faux-gif-translate':'hi'}></div></div>*/}
  </div>
  
  {/*<iframe style={{borderRadius:"2.5rem"}} src="https://player.vimeo.com/video/740093923?h=fe6a194ccd&amp;title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;loop=1&amp;speed=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=0&amp;muted=0" width="100%" height="270px" controls="0"  allow="autoplay;"  title="co-op-vid.mp4"></iframe>*/}

  <h3>Neumorphic Calculator</h3>
  <div className="portfolio__item-cta">
  <Link to={"/portfolio10"}><a href="https://github.com/Dagogo-Clinton-Uranta/Dagogo-Bincom" className="btn">Project Summary</a></Link> 
  <a href="https://heuristic-jang-f21b6c.netlify.app/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Webpage</a>
  </div>
 </article>

 
</div>



</section>
  )
}

export default Portfolio