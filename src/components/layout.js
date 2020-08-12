/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Container } from "react-bootstrap"
import "bootstrap/dist/css/bootstrap.min.css"
import "../components/app.css"

import Mainmenu from "./mainmenu"

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
      <Mainmenu siteTitle={data.site.siteMetadata.title} />
      <main>
        {children}
      </main>
      <footer className="bg-dark text-white-50 pt-5 pb-5">
        <Container>
          © {new Date().getFullYear()}, Tüm hakları saklıdır.
          {` `}
          <a className="text-info" href="https://www.markaotogaz.com">Marka Otogaz</a>
        </Container>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
