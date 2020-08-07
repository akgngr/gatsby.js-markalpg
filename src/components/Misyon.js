import React from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, A11y } from 'swiper';

import {Container,Card, CardColumns} from "react-bootstrap"


// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

SwiperCore.use([Navigation, Pagination, A11y]);

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
    }
  }
};

const Misyon = () => (
  <>
    <section className="bg-light pt-3 pb-3 misyon-container">
      <Container fluid>
        <Swiper
          {...params}
          className="mt-lg-5 mb-lg-3"
          navigation
          pagination={{ clickable: true }}
        >
          <SwiperSlide>
            <Card className="d-flex justify-content-center align-items-center text-center shadow flex-row misyon misyonbir">
              <Card.Body>
                <Card.Text>
                  Aracınıza En Uygun LPG Sistemini Belirliyoruz
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="d-flex justify-content-center align-items-center text-center shadow flex-row misyon misyoniki">
              <Card.Body>
                <Card.Text>
                  En İyi Fiyat Garantisi
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="d-flex justify-content-center align-items-center text-center shadow flex-row misyon misyonuc">
              <Card.Body>
                <Card.Text>
                  Proje, Montaj Herşey Fiyata Dahil
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className="d-flex justify-content-center align-items-center text-center shadow flex-row misyon misyondort">
              <Card.Body>
                <Card.Text>
                  Montaj Sonrası 2 Yıl Garanti
                </Card.Text>
              </Card.Body>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    </section>
  </>
)


export default Misyon;