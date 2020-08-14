import React from "react"

import loadable from '@loadable/component'
import LazyLoad from "react-lazyload"

import Layout from "../components/layout"
const SEO = loadable(() => import("../components/seo"));
const Slider = loadable(() => import("../components/Slider"));
const LpgMontaj = loadable(() => import("../components/lpgmontaj"));
const Misyon = loadable(() => import("../components/Misyon"));
const Contact = loadable(() => import("../components/contact"));
const Arizatespit = loadable(() => import("../components/Arizatespit"));
const Maps = loadable(() => import("../components/maps"));
const Egzos = loadable(() => import("../components/egzos"));
const Ldjson = loadable(() => import("../components/ldjson"));

const Loading =() => (
    <div className="lazyload">
        <h5>Loading</h5>
    </div>
)
const IndexPage = () => (
  <Layout >
    <Ldjson />
    <SEO title  ="Gaziantep'in LPG Otogaz Hastanesi" />
    <Slider />
    <LpgMontaj />
    <Misyon/>
    <Contact/>
    <Arizatespit/>
    <Egzos />
    <LazyLoad placeholder={<Loading />}>
        <Maps/>
    </LazyLoad>
  </Layout>
)

export default IndexPage
