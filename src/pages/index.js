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
const Maps = React.lazy(() => import("../components/maps"));

function IndexPage()
{
    const isSSR = typeof window === "undefined"

    return(
        <>
            <Layout >
                <Ldjson />
                <SEO title  ="Gaziantep'in LPG Otogaz Hastanesi" />
                <Slider />
                <LpgMontaj />
                <Misyon/>
                <Contact/>
                <Arizatespit/>
                <Egzos />
                {!isSSR && (
                    <React.Suspense fallback={<div />}>
                        <Maps/>
                    </React.Suspense>
                )}
            </Layout>
        </>
    )
}

export default IndexPage
