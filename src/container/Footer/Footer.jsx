import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

const Footer = () => {
    return (
        <>
            <div className="footer-area text-center">
                <Container>
                    <Row>
                        <Col xl={12}>
                            <div className="copyright">
                                ©2022 MedSky, All Rights Reserved. With Love by
                                <a href="http://ashrafuloli.com/" target="_blank">Asraful Oli</a>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Footer;
