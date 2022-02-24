import React from 'react';

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

    return (
        <>
            <div className="card-wrap">
                <h4>Item Ordered: {totalQuantity}</h4>
                <h5>Total: {total.toFixed(2)}</h5>
            </div>
        </>
    );
};

export default Cart;
