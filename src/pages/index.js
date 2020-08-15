import React from "react"

import loadable from '@loadable/component'

import Layout from "../components/layout"
const SEO = loadable(() => import("../components/seo"));
const Slider = loadable(() => import("../components/Slider"));
const LpgMontaj = loadable(() => import("../components/lpgmontaj"));
const Misyon = loadable(() => import("../components/Misyon"));
const Contact = loadable(() => import("../components/contact"));
const Arizatespit = loadable(() => import("../components/Arizatespit"));
const Egzos = loadable(() => import("../components/egzos"));
const Ldjson = loadable(() => import("../components/ldjson"));
const Maps = loadable(() => import("../components/maps"));

import Fbchat from "../components/fbchat"

function IndexPage()
{
    return(
        <>
            <Layout >
                <Ldjson />
                <SEO title  ="Gaziantep'in Özel Otogaz, LPG Yetkili Servisi" />
                <Slider />
                <LpgMontaj />
                <Misyon/>
                <Contact/>
                <Arizatespit/>
                <Egzos />
                <Maps/>
                <Fbchat/>
            </Layout>
        </>
    )
}

export default IndexPage
