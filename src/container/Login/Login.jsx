import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {images} from "../../constants";
import {ImFacebook, ImGithub, ImGoogle} from "react-icons/im";

const Login = () => {
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
                                <h3>Login</h3>
                            </div>
                            <Row>
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
                                        <button>Login</button>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col xl={12}>
                                    <div className="separator"/>
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
                                new to Medsky website ? <Link to="/register">Create Account</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Login;
