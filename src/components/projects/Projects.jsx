import React, { useState } from "react";
import "./Projects.css"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import campImage from "./images/campdata.png"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Link } from "react-router-dom";
import BlogImage from "./images/blog.jpg"
import chatImage from "./images/CHATS.jpg"
import bootstrapImg from "./images/svg/bootstrap-5.svg"
import css3 from    "./images/svg/css-3.svg"
import fastapi from "./images/svg/fastapi.svg"
import flask from "./images/svg/flask.svg"
import html from "./images/svg/html-1.svg"
import mysql from "./images/svg/mysql-3.svg"
import postgres from "./images/svg/postgresql.svg"
import react from  "./images/svg/react-2.svg"
import javascript from "./images/svg/javascript-1.svg"
import { useMediaQuery } from "react-responsive";

const Projects = () => {
    const isMobile = useMediaQuery({ query: `(max-width:760px)` })
 
        return (
            <div id="projects" className="projects scrollContainer">
                <h2 className="headingSecondary">projects</h2>
                <hr className="line"/>
                <p className="paragraph">           
                    <span>
                        Here you will find my personal projects 
                    </span>
                    <span>
                        and client projects
                    </span>
                </p>   
                <div className="projectsContainer">
                    <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={getSlidesCount(isMobile)}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    
                    
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    >
                    
                    <SwiperSlide>
                    <div className="card">
                            <div className="headingCard">
                                <h4 className="anime description">
                                    BlogPost
                                </h4>
                            </div>
                            <div className="image">
                                <img style={{height: "150px"}} className="image" src={BlogImage} alt="" />
                            </div>
                            <div className="details">
                                <div className="anime description detailsImg">
                                    <img src={flask} alt="" /><img src={javascript} alt="" /><img src={bootstrapImg} alt="" />
                                    <img src={postgres} alt=""/>                                
                                </div>
                            </div>
                            <div className="cardButton ">                            
                                <Link to="https://github.com/mbuthi/Mbuthi-blog"><i class="anime fa-solid fa-arrow-right-to-bracket"></i></Link>
                            </div>
                        </div>
                    </SwiperSlide>                            
                    <SwiperSlide>
                        <div className="card">
                            <div className="headingCard">
                                <h4 className="description anime">
                                    CAMPDATA 2022
                                </h4>
                            </div>
                            <div className="image">
                                <img className="image" src={campImage} alt="" />
                            </div>
                            <div className="details">
                                <div className="description anime detailsImg">
                                    <img src={javascript} alt="" /><img src={fastapi} alt="" /><img src={postgres} alt="" />                                
                                </div>
                            </div>
                            <div className="cardButton ">                            
                                <Link to="https://camp-data-20222.netlify.app/"><i class="anime fa-solid fa-arrow-right-to-bracket"></i></Link>
                            </div>
                        </div>
                    </SwiperSlide>   
                    <SwiperSlide>
                        <div className="card">
                            <div className="headingCard">
                                <h4 className="description anime">
                                    CHATROOM
                                </h4>
                            </div>
                            <div className="image">
                                <img className="image" src={chatImage} alt="" />
                            </div>
                            <div className="details">
                                <div className="description anime detailsImg">
                                    <img src={javascript} alt="" /><img src={flask} alt="" /><img src={postgres} alt="" />                                                                
                                </div>
                            </div>
                            <div className="cardButton ">                            
                                <Link to="https://github.com/mbuthi/chat-room-"><i class="anime fa-solid fa-arrow-right-to-bracket"></i></Link>
                            </div>
                        </div>
                    </SwiperSlide>                      
                    </Swiper>
                </div>                         
                
            </div>
        )
    
}


const getSlidesCount=(isMobile)=>{
    return isMobile?1:2
}
export default Projects