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
import 'swiper/swiper-bundle.css';

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
      slidesPerView: 1,
      spaceBetween: 10
    },
    zoom:{
      maxRatio: 25,
    }
  }
};

const LpgMontaj = () => (
  <>
    <section id="lpgMontaj" className="lpg-montaj pt-4 pb-4">
      <Container>

        <div className="text-center pt-5 pb-5">
          <h1>Marka Otogaz Otogaz Montajı Otogaz Yetkili Servisi</h1>
          <p className="text-secondary">Sıfır ve İkinci el araçlarınıza Otogaz sistemleri montaj ve bakım hizmet vermekteyiz.
            Araçlarınızın <b>FSI</b> veya <b>TSI</b> motorlarına Otogaz sistemleri Montajını profosyenel ekibimizce hatasız bir şekilde yapıyoruz.
            Otogaz sistemleri Montajına proje ve diğer her şey dahildir. Otogaz sektöründeki geçmişimizle siz değerli müşterilerimize en iyi hizmeti vermekten keyif alıyoruz.
            Montajını yaptığımız ve anlaşmalı bayisi olduğumuz <b>LPG Sistemleri</b>
          </p>
        </div>

        <Swiper {...params} navigation className="pt-2 pb-5">
          <SwiperSlide><Brc className="toplogo brc"/><Vikars/></SwiperSlide>
          <SwiperSlide><Akl className="toplogo" /><Ultra /></SwiperSlide>
          <SwiperSlide><Romano className="toplogo" /><Nlp/></SwiperSlide>
          <SwiperSlide><Destro className="toplogo" /><Okcan/></SwiperSlide>
        </Swiper>

      </Container>
    </section>
  </>
)



export default LpgMontaj;