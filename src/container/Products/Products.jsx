import React from 'react';
import Layout from "../Layout/Layout";
import ProductsSection from "../../components/Product/ProductsSection";
import {Col, Container, Row} from "react-bootstrap";

const Products = () => {
    return (
        <Layout>
            <div className="product-section section-padding">
                <Container>
                    <Row className="justify-content-center mb-5">
                        <Col xl={6}>
                            <div className="section-title text-center">
                                <p className="sub-title">
                                    Low Priced Medical Supplies
                                </p>
                                <h2 className="title">
                                    Our Latest Products
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col xl={12}>
                            <ProductsSection/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default Products;
