import React from 'react';
import { MdClose } from "react-icons/md";

const Cart = (props) => {
    const {cart} = props;

    let totalQuantity = 0;
    let total = 0;

    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    // open cart
    let cartClass = '';
    if (props.cartStatus){
        cartClass = 'active';
    }

    return (
        <>
            <div className={"card-wrap " + cartClass}>
                <button onClick={props.handlerCloseCart} className="cart-close"><MdClose /></button>
                <h4>Item Ordered: {totalQuantity}</h4>
                <h5>Total: {total.toFixed(2)}</h5>
            </div>
        </>
    );
};

export default Cart;
