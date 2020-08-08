import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {Carousel} from "react-bootstrap"
import Sliderbir from "../components/images/slide-1"
import Slideriki from "../components/images/slide-2"
import Slideruc from "../components/images/slide-3"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/swiper.scss';

const params = {

};

const Slider = () => (
    <>
        <section id="ana" className="carousel-container">
            <Swiper>
                <SwiperSlide>
                    <Sliderbir/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slideriki/>
                </SwiperSlide>
                <SwiperSlide>
                    <Slideruc/>
                </SwiperSlide>
            </Swiper>
        </section>
    </>

);


export default Slider