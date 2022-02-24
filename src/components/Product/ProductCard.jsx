import React from 'react';
import {MdShoppingCart} from "react-icons/md";
import {Link} from "react-router-dom";

const ProductCard = (props) => {
    const {key, name, slug, thumb, price} = props.product;
    return (
        <>
            <div className="product-wrap">
                <div className="thumb">
                    <img src={thumb} alt={name}/>
                    <button className="add-to-cart" onClick={() => props.handleAddToCart(props.product)}>
                        <MdShoppingCart/> Add to cart
                    </button>
                </div>
                <div className="content">
                    <h3 className="title">
                        <Link to={`/product/${slug}`}>
                            {name}
                        </Link>
                    </h3>
                    <p className="price">
                        ${price}
                    </p>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
