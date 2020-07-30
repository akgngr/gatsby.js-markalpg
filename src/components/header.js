import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import {
  Navbar,
  Nav,
  Container,
} from "react-bootstrap"

import { Brand } from "react-bootstrap/Navbar"

const Header = ({ siteTitle }) => (
  <header>
    <Navbar expand="lg" fixed="top" className="shadow navbar navbar-expand-lg navbar-light bg-white">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Link to="/">{siteTitle}</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="ml-auto" as="ul">
            <Nav.Item as="li">
              <Nav.Link href="/">Anasayfa</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/page-2/">Hakkımızda</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/bayilikler/">Bayilikler</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/lpg-montaji/">Lpg Montajı</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/lpg-ariza-tespiti/">Lpg Arıza Tespiti</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/egzos-emisyonu-olcumu/">Egzos Emisyon</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link href="/iletisim/">İletişim</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
