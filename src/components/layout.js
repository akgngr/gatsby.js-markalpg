/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container, Row, Col } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/app.css"
import { Helmet } from "react-helmet"

import Mainmenu from "./mainmenu"
import Instagram from "./Svg/instagram";
import Facebook from "./Svg/facebook";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    <div id="ana"></div>
      <Mainmenu siteTitle={data.site.siteMetadata.title} />
      <main>
        {children}
      </main>
      <footer className="bg-dark text-white-50 pt-5 pb-5">
        <Container>
         <Row>
           <Col lg={10} sm={12}>
             © {new Date().getFullYear()}, Tüm hakları saklıdır.
             {` `}
             <a className="text-info" href="https://www.markaotogaz.com">Marka Otogaz</a>
           </Col>
           <Col lg={2} sm={12} className="pt-4 pt-lg-0">
             <ul className="social d-flex justify-content-lg-end justify-content-sm-start">
               <li><a target="_blank" href="https://www.instagram.com/marka.otogaz"><Instagram /></a></li>
               <li className="fb"><a target="_blank" href="https://www.facebook.com/Marka-Otogaz-105611457923834"><Facebook /></a></li>
             </ul>
           </Col>
         </Row>
          <hr />
          <Row>
            <Col>
              Design by
              <a className="text-info" target="_blank" href="https://akgngr.com"> akgngr</a>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
