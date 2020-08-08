import React from "react"

import {Container, Row, Col, Nav} from "react-bootstrap"
import Whatsapp from "../components/Svg/Whatsapp"
import Sabittel from "../components/Svg/Sabittel"
import Smartphone from "../components/Svg/Smartphone"

const Contact = () => (
  <>
    <section className="bg-info contact pb-4 pt-4">
      <Container fluid>
        <Row><Col className="text-white pt-4 pb-4 text-center "><h3>Aracınızda bir problem mi var! Çekinmeden arayın.</h3></Col></Row>
        <Row>
          <Col sm={12} lg={4} md={4}>
            <Nav.Link href="tel:03422355858" className="text-white ">
              <div className="d-flex flex-lg-column  flex-sm-colmn justify-content-center align-items-center bd-highlight mb-3 text-center text-white font-weight-light">
                <div className="pr-xs-2 pr-sm-2"><Sabittel/></div>
                <p className="pt-2">+90 (342) 235 5858</p>
              </div>
            </Nav.Link>
          </Col>
          <Col sm={12} lg={4} md={4}>
            <Nav.Link href="tel:+905322551345" className="text-white ">
              <div className="d-flex flex-lg-column  flex-sm-colmn justify-content-center align-items-center bd-highlight mb-3 text-center text-white font-weight-light">
                <div className="pr-xs-2 pr-sm-2"><Smartphone/></div>
                <p className="pt-2">+90 (532) 255 1345</p>
              </div>
            </Nav.Link>
          </Col>
          <Col sm={12} lg={4} md={4}>
            <Nav.Link href="https://api.whatsapp.com/send?phone=+905322551345" className="text-white btn ">
              <div className="d-flex flex-lg-column  flex-sm-colmn justify-content-center align-items-center bd-highlight mb-3 text-center text-white font-weight-light">
                <div className="pr-xs-2 pr-sm-2"><Whatsapp/></div>
                <p className="pt-2">+90 (532) 255 1345</p>
              </div>
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </section>
  </>
)

export default Contact