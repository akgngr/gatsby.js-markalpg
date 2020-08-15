import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

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
              <Link to="#ana" activeClassName="active" partiallyActive={true} className="nav-link">Anasayfa</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="#lpgMontaj" activeClassName="active" partiallyActive={true} className="nav-link">Lpg Montajı</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="#arizaTespit" activeClassName="active" partiallyActive={true} className="nav-link">Lpg Arıza Tespiti</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="#egzos" activeClassName="active" partiallyActive={true} className="nav-link">Egzos Emisyon</Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link to="#iletisim" activeClassName="active" partiallyActive={true} className="nav-link">İletişim</Link>
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
