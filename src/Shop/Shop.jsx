import React, { useEffect, useState } from 'react';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className='product-container'>
                <h2>Product Coming Soon: {products.length}</h2></div>
            <div className='cart-container'>
                <h2>Total Product</h2></div>
        </div>
    );
};

export default Shop;