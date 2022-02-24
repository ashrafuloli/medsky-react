import React from 'react';
import {Col, Row} from "react-bootstrap";
import ProductCard from "./ProductCard";
import useAppContext from "../../hooks/useAppContext";

const ProductsSection = () => {
    const {products, handleAddToCart, cart} = useAppContext().useProduct;
    return (
        <>
            <div className="product-wrapper">
                <Row>
                    {
                        products.map((product, key) => (
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

export default ProductsSection;
