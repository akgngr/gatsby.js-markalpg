import React from "react"

import {Container, Row, Col, Card} from "react-bootstrap"
import { Swiper, SwiperSlide } from 'swiper/react';

import Ultra from "./Svg/Ultra"
import Romano from "./Svg/Romano"
import Vikars from "./Svg/Vikars"
import Brc from "./Svg/Brc"
import Akl from "./Svg/Akl"
import Nlp from "./Svg/Nlp"
import Destro from "./Svg/Destro"
import Okcan from "./Svg/Okcan"
import SwiperCore, { A11y, Pagination } from "swiper"
import Eski from "./images/eski"
import Yeni from "./images/yeni"

SwiperCore.use([Pagination, A11y]);

const params = {
  slidesPerView: 8,
  spaceBetween: 50,
  draggable: true,
  loop: true,
  autoplay: 50,
  breakpoints: {
    1024: {
      slidesPerView: 8,
      spaceBetween: 40
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    320: {
      slidesPerView: 3,
      spaceBetween: 10
    },
    zoom:{
      maxRatio: 25,
    }
  }
};

const Arizatespit = () => (
  <>
    <section className="ariza-tespit">
      <Container className="text-center pt-lg-5 pb-lg-5">
        <Row>
          <Col>
            <h2>LPG ve Araç Arıza Tespiti</h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <h3>LPG Tamiri</h3>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <p>
              Her türlü Lpg ve Araç arıza tespiti yapıyoruz. LPG arızalarını hızlı ve güvenilir bir şekilde onarıyoruz.
              Bünyemizde piyasadaki bir çok Lpg Firmasının yedek parçası bulunmaktadır.
            </p>
          </Col>
        </Row>
        
        <Row className="ariza-tespit-cihazi">
          <Col lg={6} sm={12}>
			<Card>
				<Card.Body>
					<Card.Title>
						<h3>Yeni Nesil Araçların Arıza Tespiti</h3>
					</Card.Title>
					<hr />
					<Card.Text>
						<Yeni />
					</Card.Text>
				</Card.Body>
			</Card>
          </Col>
          <Col lg={6} sm={12}>
			<Card>
				<Card.Body>
					<Card.Title>
						<h3>Eski Nesil Araçların Arıza Tespiti</h3>
					</Card.Title>
					<hr />
					<Card.Text>
						<Eski />
					</Card.Text>
				</Card.Body>
			</Card>
          </Col>
        </Row>
		<Row className="pt-3 pb-3">
          <Swiper {...params} pagination={{ clickable: true }} className="pt-2 pb-5">
            <SwiperSlide><Ultra /></SwiperSlide>
            <SwiperSlide><Romano/></SwiperSlide>
            <SwiperSlide><Vikars /></SwiperSlide>
            <SwiperSlide><Brc /></SwiperSlide>
            <SwiperSlide><Akl /></SwiperSlide>
            <SwiperSlide><Nlp/></SwiperSlide>
            <SwiperSlide><Destro /></SwiperSlide>
            <SwiperSlide><Okcan/></SwiperSlide>
          </Swiper>
        </Row>
      </Container>
    </section>
  </>
)

export default Arizatespit;