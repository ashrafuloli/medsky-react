import React from 'react';
import {Link, useParams} from "react-router-dom";
import Layout from "../Layout/Layout";
import useProduct from "../../hooks/useProduct";
import useProductDetails from "../../hooks/useProductDetails";
import {Col, Container, Row} from "react-bootstrap";
import {MdKeyboardReturn} from "react-icons/md";


const getProductDetails = (products, slug) => {
    const productData = products.find(product => product.slug === slug);
    if (productData) {
        return productData;
    }
    return null;
}

const ProductDetails = () => {
    const {slug} = useParams();
    const {products} = useProductDetails();

    // match product form product json
    const details = getProductDetails(products, slug);

    return (
        <Layout>
            <div className="product-details-section section-padding">
                <Container>
                    <Row>
                        <Col>
                            {
                                details ?
                                    <div className="product-details">
                                        <Row className="mb-5">
                                            <Col xl={6}>
                                                <div className="thumb">
                                                    <img src={details.thumbLarge} alt={details.name}/>
                                                </div>
                                            </Col>
                                            <Col xl={6}>
                                                <div className="content">
                                                    <h2 className="title">{details.name}</h2>
                                                    <h4 className="price">${details.price}</h4>
                                                    <p>
                                                        {details.shortDescription}
                                                    </p>
                                                    <div className="info">
                                                        <b>category:</b>
                                                        <p>
                                                            {
                                                                details?.category &&
                                                                details?.category.map((item, key) => (
                                                                    <span key={key}>
                                                                        {key != 0 && ', '}
                                                                        <em>{item}</em>
                                                                    </span>
                                                                ))
                                                            }
                                                        </p>
                                                    </div>
                                                    <div className="info">
                                                        <b>stock:</b>
                                                        <p><em>{details.stock}</em></p>
                                                    </div>
                                                    <div className="info">
                                                        <b>sku:</b>
                                                        <p><em>{details.SKU}</em></p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col xl={12}>
                                                <div dangerouslySetInnerHTML={{__html: details.description}}/>
                                            </Col>
                                        </Row>
                                    </div>
                                    :
                                    <div className="error-content">
                                        <p>The webpage you are looking for is not here!</p>
                                        <Link to="/products" className="error-btn">
                                            Back To Shop
                                            <span className="icon"><MdKeyboardReturn/></span>
                                        </Link>
                                    </div>
                            }
                        </Col>
                    </Row>
                </Container>
            </div>
        </Layout>
    );
};

export default ProductDetails;
