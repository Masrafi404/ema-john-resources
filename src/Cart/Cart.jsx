import React from 'react';
import './Cart.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
const Cart = ({ cart, clearHandler, children }) => {
    let totalShipping = 0;
    let quantity = 0;
    let totalPrice = 0;
    //reduce way1
    // const reduce = (previous, current) => previous + current.price;
    // const totalPrice = cart.reduce(reduce, 0)
    //reduce way2
    for (const product of cart) {
        if (product.quantity === 0) {
            product.quantity = 1;
        }
        // product.quantity = product.quantity || 1;
        totalPrice = totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;

    }
    const tax = totalPrice * 7 / 100;
    const grandTotal = totalPrice + totalShipping + tax;
    return (
        <div className='cart-container'>
            <h4>Order Summery</h4>
            <p>Selected items: {quantity}

            </p>
            <p>Total Price: ${totalPrice}</p>
            <p>Total Shipping Charge: {totalShipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
            <button onClick={clearHandler} className='btn-clear'>Clear Cart <span><FontAwesomeIcon icon={faTrashAlt} /></span></button>
            <button className='btn-color'><Link to="/order-review" className='btn-color-link'>{children} <span><FontAwesomeIcon icon={faArrowRight} /></span></Link></button>

        </div>
    );
};

export default Cart;