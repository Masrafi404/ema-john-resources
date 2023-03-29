import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    //reduce way1
    const reduce = (previous, current) => previous + current.price;
    const totalPrice = cart.reduce(reduce, 0)
    //reduce way2
    let totalShipping = 0;
    for (const product of cart) {
        totalShipping = totalShipping + product.shipping;
    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart-container'>
            <h4>Order Summery</h4>
            <p>Selected items: {cart.length}
            </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shiping Charge: {totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;