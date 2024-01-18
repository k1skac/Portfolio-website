
import {EffectCoverflow, Navigation, Pagination, EffectCube}   from "swiper/modules";
import {useState, React} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import "swiper/css";
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"
import "swiper/css/effect-cube"
import hta from "../assets/hta_logo_v3.png";
import googleApi from '../assets/google-map.jpg';
import brewdog from "../assets/brewdog1.avif";
import weatherApp from "../assets/bg-resize.jpg";

const Carousel = (styles) => {
        const projects = [{
            title:"BrewdogAPI",
            date: "2023-10-13",
            type: "Restfull API data manipulation",
            description: "Processing and displaying data from the brewdog API with pagination, variable amount of display and a little UX, and the corresponding JAVA backend.",
           image: brewdog, 
           usedTools: "TypeScript, Angular, Java",
           active : false
          },
          {
            title:"GoogleAPI with Geolocation and styling",
           date: "2023-11-29",
            type: "Display Google API data on your own map, using some default styles.",
            description: "Display Google API data on your own map, using some default styles. There are 3 types of maps rendered, one basic, one with marker and own position display, and one with Google Directions to allow route planning.",
           image: googleApi,
           usedTools: "Pure Javascript",
           active : false
          },
          {
            title:"Health Tracking Application",
            date: "2023-7-19",
            type: "This is an application that records and monitors more complex health data in a database.", 
            description:"I made this with several of us as part of a project. This app receives the user's health data (weight, blood pressure, medication, exercise etc.) and stores it in a database and reports it back to the user. I tried to increase security by using JWT encryption in HTTP only token.", 
           image: hta,
           usedTools:"Java, JavaScript, React, JWT, Spring Boot, MySQL, Jira",
           active : false
          },
          {
            title:"Weather Application",
            date: "2023-2-11",
            type: "Small petproject", 
            description:"I made this with several of us as part of a project. This app receives the user's health data (weight, blood pressure, medication, exercise etc.) and stores it in a database and reports it back to the user. I tried to increase security by using JWT encryption in HTTP only token.", 
           image: weatherApp,
           usedTools:" JavaScript, React,",
           active : false
          }]
 const slides = [brewdog, googleApi, hta, weatherApp];         
 const [active, setActive] = useState(0);
 const coverSwiper = document.getElementById("coverSwiper");
 const cubeSwiper = document.getElementById("cubeSwiper");
 const dataSwiper=()=>{
  if(coverSwiper.style["display"] === "block"){
    cubeSwiper.style["display"] = "block";
    coverSwiper.style["display"] = "none";
   
  } else {
    cubeSwiper.style["display"] = "none";
    coverSwiper.style["display"] = "block";
  }
    };
    return(
        <section id="carousel" className="swiper">
             <h2 className="heading">My <span>projects</span>
             <span class="animate scroll" style={styles.style[0]} ></span>
             </h2>
          
      <Swiper id="coverSwiper" 
      modules={[EffectCoverflow, Navigation, Pagination]}
      navigation={{
          prevEl: ".button-prev",
          nextEl: ".button-next"
      }} 
      pagination={{clickable: true}}
      speed={1000}
      slidesPerView={"auto"}
      centeredSlides
      loop={true}
      effect={"coverflow"}
      coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
      }}> 
      
        {slides.map((slide, index) => (
            <SwiperSlide key={index} className="swiper-slide" onClick={() => setActive(index)}>
                    <img src={slide} alt="This is the swiper" onClick={dataSwiper} height={400}/>        
            </SwiperSlide>           
            ))} 
          <div className="button-prev">
          <IoIosArrowBack/>
          </div>
          <div className="button-next">
              <IoIosArrowForward/>
          </div>
        </Swiper> 

         <Swiper id="cubeSwiper" className="swiper" onClick={dataSwiper}
             modules={[EffectCube, Navigation, Pagination]}
             navigation={{
                 prevEl: ".button-prev",
                 nextEl: ".button-next"
             }} 
             pagination={{clickable: true}}
             speed={1000}
             slidesPerView={"auto"}
             centeredSlides
             loop={true}
             effect={"cube"}
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                 shadowOffset: 50,
                 shadowScale: 0.3               
             }}>  
                <SwiperSlide className="swiper-wrapper" onClick={dataSwiper} > 
                    <img src={projects[active].image} alt={projects[active].title} onClick={dataSwiper} height={400}/>
                     <h3 className="slide-data active" >{projects[active].title}</h3>  
                </SwiperSlide>   
                <SwiperSlide className="swiper-wrapper"onClick={dataSwiper}> 
                <h3 className="slide-data" onClick={dataSwiper}>Date: {projects[active].date} </h3>
                <h3 className="slide-data" onClick={dataSwiper}>Project Type: {projects[active].type}</h3>
                <img src={projects[active].image} alt={projects[active].title} onClick={dataSwiper} height={400}/>  
                </SwiperSlide>  
                <SwiperSlide className="swiper-wrapper" onClick={dataSwiper}> 
                <img src={projects[active].image} alt={projects[active].title} onClick={dataSwiper} height={400}/>
                  <h3 className="slide-data" onClick={dataSwiper}>Used Tools: {projects[active].usedTools}</h3>
                </SwiperSlide> 
                <SwiperSlide className="swiper-wrapper" onClick={dataSwiper}>  
                <img src={projects[active].image} alt={projects[active].title} onClick={dataSwiper} height={400}/>
                    <h3 className="slide-data" class="description" onClick={dataSwiper}>Project description: {projects[active].description}</h3>   
                </SwiperSlide>  
                <div className="button-prev">
                    <IoIosArrowBack/>
                </div>
                <div className="button-next">                   
                    <IoIosArrowForward/>
                </div>
           </Swiper>  
          </section>  )
        }
export default Carousel;
