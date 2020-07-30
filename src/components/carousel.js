import React from "react"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Brc from "../components/Svg/Brc"
import Akl from "../components/Svg/Akl"
import Vikars from "../components/Svg/Vikars"
import Destro from "../components/Svg/Destro"
import Nlp from "../components/Svg/Nlp"
import Okcan from "../components/Svg/Okcan"
import Romano from "./Svg/Romano"
import Ultra from "./Svg/Ultra"
import {Container} from "react-bootstrap"
import SwiperCore, { A11y, Navigation } from "swiper"

// Import Swiper styles
import 'swiper/swiper.scss';

SwiperCore.use([Navigation, A11y]);

const params = {
  slidesPerView: 4,
  spaceBetween: 50,
  draggable: true,
  loop: true,
  autoplay: 50,
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    zoom:{
      maxRatio: 25,
    }
  }
};

const Slider = () => (
  <>
    <section className="lpg-montaj pt-4 pb-4">
      <Container>

        <div className="text-center pt-5 pb-5">
          <h3 className="display-3">LPG Montajı</h3>
          <p>Sıfır ve İkinci el araçlarınıza LPG montajı yapıyoruz.
            Araçlarınızın <b>FSI</b> veya <b>TSI</b> motorlarına LPG Montajını profosyenel ekibimizce hatasız bir şekilde yapıyoruz.
            LPG Sistemi Montajına proje ve diğer her şey dahildir. Montajını yaptığımız ve anlaşmalı bayisi olduğumuz <b>LPG Sistemleri</b>
          </p>
        </div>

        <Swiper {...params} navigation className="pt-2 pb-5">
          <SwiperSlide><Ultra className="toplogo"/><Romano/></SwiperSlide>
          <SwiperSlide><Vikars className="toplogo" /><Brc /></SwiperSlide>
          <SwiperSlide><Akl className="toplogo" /><Nlp/></SwiperSlide>
          <SwiperSlide><Destro className="toplogo" /><Okcan/></SwiperSlide>
        </Swiper>

      </Container>
    </section>
  </>
)



export default Slider;