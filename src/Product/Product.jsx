import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, img, seller, price, category, id, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price: ${price}</p>
                <p>Seller: {seller}</p>
                <p className='raing'>Rating: {ratings} Star</p>
            </div>
            <button className='cart-btn'>Add to Cart</button>
        </div>
    );
};

export default Product;