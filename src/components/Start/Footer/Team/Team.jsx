import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination, Navigation,FreeMode } from "swiper";

import CurrentTeam from "../CurrentTeam/CurrentTeam"
import {teams} from "./teamDB"
import sprite from '../../../../images/sprite.svg';

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Team.css";

const Team = ({active, setActive}) =>{
  return (
    <div className={active?"modal active":"modal"} onClick={()=> setActive(false)}>
      <div className={active?"modal__content active":"modal__content"} onClick={e=>e.stopPropagation()}>
          
          <div className="footer-modal">
            <div className="footer-modal__container">
                  <h3 className="footer-modal__team">S&amp;M Coders</h3>
                  <button className="footer-modal__button-close modal-close" type="button" onClick={()=>setActive(false)}>
                  <svg className="footer-modal__icon" width={15} height={15}>
                    <use href={sprite+'#icon-close'}></use>
                  </svg>
                  </button>

                <Swiper effect={"coverflow"}       
                        breakpoints={{
                          375: {slidesPerView: 1,},
                          768: {slidesPerView: 3,},
                          1440: {slidesPerView: 4,},
                        }}
                        pagination={{ clickable: true }}
                        loop={true}
                        navigation={true}
                        centeredSlides={false}
                        spaceBetween= {20}
                        coverflowEffect={{
                          rotate: 0,
                          depth: 0,
                          slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation,FreeMode]}
                        className="mySwiper"
                  >
                    
                  {teams.map( ({name,surName,position,git,linkedin,description,avatar}, index) =>
                    <SwiperSlide key={index} >
                      <CurrentTeam  name={name} surName={surName} position={position} git={git}
                                    linkedin={linkedin} description={description} avatar={avatar}
                      />
                    </SwiperSlide>)
                  }
                </Swiper>
            </div>
          </div>
          
      </div>
    </div>
  )
};

export default Team;