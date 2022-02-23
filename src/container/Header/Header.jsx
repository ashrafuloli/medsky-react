import React from 'react';
import {Link} from "react-router-dom";
import {images} from '../../constants'
import {Col, Container, Row} from "react-bootstrap";
import {MdSearch, MdShoppingBasket} from "react-icons/md";
import navMenu from "../../components/data/navMenu";

const Header = () => {
    return (
        <>
            <div className="header-area">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col xl={3}>
                            <div className="logo">
                                <Link to="/">
                                    <img src={images.logo} alt="logo"/>
                                </Link>
                            </div>
                        </Col>
                        <Col xl={6} className="text-center">
                            <div className="main-menu">
                                <ul>
                                    {
                                        navMenu.map((item, key) => (
                                            <li key={key}>
                                                <Link to={item.link}>{item.title}</Link>
                                            </li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </Col>
                        <Col xl={3} className="text-end">
                            <div className="attr-menu">
                                <button><MdShoppingBasket/></button>
                                <button><MdSearch/></button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default Header;
