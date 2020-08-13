import React from "react"

import loadable from '@loadable/component'


const Layout = loadable(() => import("../components/layout"));
const SEO = loadable(() => import("../components/seo"));
const Slider = loadable(() => import("../components/Slider"));
const LpgMontaj = loadable(() => import("../components/lpgmontaj"));
const Misyon = loadable(() => import("../components/Misyon"));
const Contact = loadable(() => import("../components/contact"));
const Arizatespit = loadable(() => import("../components/Arizatespit"));
const Maps = loadable(() => import("../components/maps"));
const Egzos = loadable(() => import("../components/egzos"));
const Ldjson = loadable(() => import("../components/ldjson"));

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
    <Maps/>
  </Layout>
)

export default IndexPage
