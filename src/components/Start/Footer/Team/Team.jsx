import React from "react";
import ModalFooter from 'components/Modal/ModalFooter/ModalFooter';

import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { EffectCoverflow, Pagination, Navigation,FreeMode } from "swiper";

import CurrentTeam from "../CurrentTeam/CurrentTeam"
import {teams} from "./teamDB"

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Team.css";

const Team = ({ onCloseModal }) =>{
 
  return (
    <ModalFooter onCloseModal={onCloseModal}>
            <div className="footer-modal__container">
                  <h3 className="footer-modal__team">S&amp;M Coders</h3>
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
  </ModalFooter>  
     
  )
};

export default Team;