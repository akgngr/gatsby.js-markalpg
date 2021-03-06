import React from "react"

import { Container, Row, Col, Table } from "react-bootstrap"
import Whatsapp from "../components/Svg/Whatsapp"
import Sabittel from "../components/Svg/Sabittel"
import Smartphone from "../components/Svg/Smartphone"
import Harita from "../components/Svg/harita";
import Iframe from "react-iframe"
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const isSSR = typeof window === "undefined"

const Maps = () => (

    <>
        <section id="iletisim" className="maps pt-3 pb-5">
            <Container>
                <Row className="pb-5 text-center">
                    <Col lg={12}><h2>Marka Otogaz İletişim</h2></Col>
                    <Col lg={12}><p className="text-secondary">Randevu almak veya bilgi almak için bizimle iletişime geçin.</p></Col>
                </Row>
                <Row>
                    <Col className="googlemaps" lg={6} md={6} sm={12} xs={12}>
                    {!isSSR && (
                        <React.Suspense fallback={<div />}>
                            <Iframe
                                url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d421.54588141364354!2d37.43042661722275!3d37.07915187303673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x9d3c1f51541f0310!2sMarka%20Otogaz!5e0!3m2!1str!2str!4v1599336393238!5m2!1str!2str"
                                width="100%"
                                height="400px"
                                className="lazyload"
                                display="initial"
                                position="relative"
                                allowFullScreen
                            />
                        </React.Suspense>
                    )}
                    </Col>
                    <Col lg={6} md={6} sm={12} xs={12}>
                        <Table responsive borderless hover className="mapscontact">
                            <tr>
                                <th>Sabit Telefon:</th>
                            </tr>
                            <tr>
                                <td><Sabittel /><a className="text-info" href="tel:03422355858">+90 342 235 5858</a></td>
                            </tr>
                            <tr>
                                <th>Cep Telefonu:</th>
                            </tr>
                            <tr>
                                <td><Smartphone /><a className="text-info" href="tel:+905322551345">+90 532 255 1345</a></td>
                            </tr>
                            <tr>
                                <th>WhatsApp:</th>
                            </tr>
                            <tr>
                                <td><Whatsapp /><a className="text-info" href="https://api.whatsapp.com/send?phone=+905322551345">+90 532 255 1345</a></td>
                            </tr>
                            <tr>
                                <th>Adres:</th>
                            </tr>
                            <tr>
                                <td className="text-info"><Harita /><a className="text-info" target="_blank" href="https://goo.gl/maps/AhLwDNfDapPfkbRD7">Sanayi Mahallesi, 60029 Nolu Cad. Kuveyt Türk Küsget Şubesi arkası, Marka LPG, Küsget, Şehitkamil / Gaziantep</a></td>
                            </tr>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
)

export default Maps;