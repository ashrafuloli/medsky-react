import React from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import useAppContext from "../../hooks/useAppContext";

const HomeProduct = () => {
    const {products, handleAddToCart} = useAppContext().useProduct;


    return (
        <>
            <div className="product-wrapper">
                <Row>
                    {
                        products.slice(0, 8).map((product, key) => (
                            <Col xl={3} key={key}>
                                <ProductCard product={product} handleAddToCart={handleAddToCart}/>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    );
};

export default HomeProduct;
