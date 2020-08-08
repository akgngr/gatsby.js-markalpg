import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import EgzosEmisyonu from "./images/egzosemisyonu";
import { Link } from "gatsby"

const Egzos = () =>(
    <>
        <section id="egzos" className="egzos pt-2 pb-5">
            <Container>
                <Row className="text-center pb-5">
                    <Col lg={12}>
                        <h3>Yetkili Egzoz Gazı Emisyon Ölçümü</h3>
                    </Col>
                    <Col lg={12}>
                        <p className="text-secondary">Servisimizde yetkili egzos emisyonu ölçümü yapılmaktadır.</p>
                    </Col>
                </Row>
                <Row>
                    <Col lg={6} sm={12} md={6} xs={12} className="pb-5 pb-lg-0">
                        <h3 className="font-weight-light pb-3">Egzoz Gazı Emisyon Ölçümü;</h3>
                        <p className="font-weight-light ">Egzoz Gazı Emisyon Ölçümü trafikte seyreden motorlu kara taşıtlarından kaynaklanan Egzoz Gazı Emisyonları'nın kontrolüne dair hazırlanan yönetmelik gereğince yapılır. Servisimizde yetkili egzos emisyonu ölçümü yapılmaktadır.</p>
                        <p className="font-weight-bold">Gerekli Belgeler</p>
                        <ul>
                            <li>Egzoz Gazı Emisyon Ölçümü yapılacak aracın Tescil Belgesi.</li>
                            <li>T.C Kimlik no'sunu gösteren nüfus cüzdanı, ehliyet veya pasaportunuzu yanınızda getiriniz.</li>
                        </ul>
                        <Link to="#maps">Detaylı bilgi için iletişime geçin.</Link>
                    </Col>
                    <Col lg={6} sm={12} md={6} xs={12}>
                        <Container>
                            <EgzosEmisyonu />
                        </Container>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
)

export default Egzos;