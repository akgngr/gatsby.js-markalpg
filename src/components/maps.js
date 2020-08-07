import React from "react"
import { Container, Row, Col, Table } from "react-bootstrap"
import {GoogleMap, withScriptjs, withGoogleMap, Marker} from "react-google-maps";
import Whatsapp from "../components/Svg/Whatsapp"
import Sabittel from "../components/Svg/Sabittel"
import Smartphone from "../components/Svg/Smartphone"
import Harita from "../components/Svg/harita";
import Iframe from "react-iframe"

const Maps = () => (

    <>
        <section id="maps" className="maps pt-3 pb-5">
            <Container>
                <Row className="pb-5 text-center">
                    <Col lg={12}><h2 >İletişim</h2></Col>
                    <Col lg={12}><p className="text-secondary">Randevu almak veya bilgi almak için bizimle iletişime geçin.</p></Col>
                </Row>
                <Row>
                    <Col className="googlemaps" lg={6} md={6} sm={12} xs={12}>
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12730.845594848419!2d37.435648!3d37.08818!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1531e509c43f63a3%3A0x477dd075623e471e!2sTrikocular%20Sitesi!5e0!3m2!1str!2str!4v1596816105692!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            display="initial"
                            position="relative"
                            allowFullScreen
                        />
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
                                <td className="text-info"><Harita />Gatem İş Bankası arkası, Marka LPG Şehitkamil / Gaziantep</td>
                            </tr>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
)

export default Maps;