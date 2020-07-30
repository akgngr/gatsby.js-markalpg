import React from "react"

import {Container, Row, Col, Nav} from "react-bootstrap"
import Whatsapp from "../components/Svg/Whatsapp"
import Sabittel from "../components/Svg/Sabittel"
import Smartphone from "../components/Svg/Smartphone"

const Contact = () => (
  <>
    <Container fluid className="bg-info contact pb-4 pt-4">
      <Row><Col className="text-white pt-4 pb-4 text-center "><h3>Aracınızda bir problem mi var! Çekinmeden arayın.</h3></Col></Row>
      <Row>
        <Col>
          <div className="d-flex flex-column bd-highlight mb-3 text-center text-white font-weight-light">
            <Nav.Link href="tel:03422355858" className="text-white ">
              <p>Sabit Telefon</p>
              <div><Sabittel/></div>
            </Nav.Link>
          </div>
        </Col>
        <Col>
          <Nav.Link href="tel:+905322551345" className="text-white ">
            <div className="d-flex flex-column bd-highlight mb-3 text-center text-white font-weight-light">
              <p>Cep Telefon</p>
              <div><Smartphone/></div>
            </div>
          </Nav.Link>
        </Col>
        <Col>
          <div className="d-flex flex-column bd-highlight mb-3 text-center text-white font-weight-light">
            <Nav.Link href="https://api.whatsapp.com/send?phone=+905322551345" className="text-white btn ">
              <p>WhatsApp</p>
              <div><Whatsapp/></div>
            </Nav.Link>
          </div>
        </Col>
      </Row>
    </Container>
  </>
)

export default Contact