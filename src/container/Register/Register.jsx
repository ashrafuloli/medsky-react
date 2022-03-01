import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {images} from "../../constants";
import {Link} from "react-router-dom";
import {ImGoogle, ImFacebook, ImGithub} from "react-icons/im";

const Register = () => {
    return (
        <div className="login-wrapper">
            <Container>
                <Row className="justify-content-center">
                    <Col lg={6} md={8}>
                        <div className="login-wrap">
                            <div className="login-logo">
                                <a href="#">
                                    <img src={images.logo} alt="logo"/>
                                </a>
                            </div>
                            <div className="title">
                                <h3>Register</h3>
                            </div>
                            <Row>
                                <Col xl={12}>
                                    <div className="input-wrap">
                                        <input type="text" placeholder="Your Name"/>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="input-wrap">
                                        <input type="email" placeholder="Your Email"/>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="input-wrap">
                                        <input type="text" placeholder="Your Password"/>
                                    </div>
                                </Col>
                                <Col xl={12}>
                                    <div className="input-btn">
                                        <button>Register</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12}>
                                    <div className="separator" />
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={4}>
                                    <div className="input-btn google-btn">
                                        <button><ImGoogle/> Goggle</button>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="input-btn facebook-btn">
                                        <button><ImFacebook/> Facebook</button>
                                    </div>
                                </Col>
                                <Col xl={4}>
                                    <div className="input-btn github-btn">
                                        <button><ImGithub/> Github</button>
                                    </div>
                                </Col>
                            </Row>
                            <p className="text-center">
                                Already have an account? <Link to="/login">Login</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Register;
