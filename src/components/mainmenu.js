import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap"

import { Brand } from "react-bootstrap/Navbar"

const Mainmenu = ({ siteTitle }) => (

    <Navbar expand="lg" sticky={"top"} className="shadow navbar navbar-expand-lg navbar-light bg-white">
      <Container fluid>
        <Navbar.Brand href="#ana">
          {siteTitle}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="#ana">Anasayfa</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#lpgMontaj">Lpg Montajı</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#arizaTespit">Lpg Arıza Tespiti</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#egzos">Egzos Emisyon</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="#iletisim">İletişim</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
)

Mainmenu.propTypes = {
  siteTitle: PropTypes.string,
}

Mainmenu.defaultProps = {
  siteTitle: ``,
}

export default Mainmenu
