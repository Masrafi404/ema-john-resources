import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
                {
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className='cart-container'>
                <h2>Total Product</h2></div>
        </div>
    );
};

export default Shop;