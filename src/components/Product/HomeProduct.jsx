import React from 'react';
import useProduct from "../../hooks/useProduct";
import {Link} from "react-router-dom";
import {Col, Row} from "react-bootstrap";
import {MdShoppingCart} from "react-icons/md";

const HomeProduct = () => {
    const {products} = useProduct();

    return (
        <>
            <div className="product-wrapper">
                <Row>
                    {
                        products.slice(0, 8).map((product, key) => (
                            <Col xl={3} key={key}>
                                <div className="product-wrap">
                                    <div className="thumb">
                                        <img src={product.thumb} alt={product.name}/>
                                        <button className="add-to-cart">
                                            <MdShoppingCart/> Add to cart
                                        </button>
                                    </div>
                                    <div className="content">
                                        <h3 className="title">
                                            <Link to={`/product/${product.slug}`}>
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <p className="price">
                                            ${product.price}
                                        </p>
                                    </div>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </div>
        </>
    );
};

export default HomeProduct;
