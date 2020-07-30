import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import Carousel from "../components/carousel"
import Misyon from "../components/Misyon"
import Contact from "../components/contact"
import Arizatespit from "../components/Arizatespit"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <Slider />

    <Carousel />

    <Misyon/>
    <Contact/>
    <Arizatespit/>
  </Layout>
)

export default IndexPage
