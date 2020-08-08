import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import LpgMontaj from "../components/lpgmontaj"
import Misyon from "../components/Misyon"
import Contact from "../components/contact"
import Arizatespit from "../components/Arizatespit"
import Maps from "../components/maps"
import Egzos from "../components/egzos";

const IndexPage = () => (
  <Layout>
    <SEO title="Gaziantep'in LPG Otogaz Hastanesi" />
    <Slider />
    <LpgMontaj />
    <Misyon/>
    <Contact/>
    <Arizatespit/>
    <Egzos />
    <Maps/>
  </Layout>
)

export default IndexPage
