import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import { addToDb, getShoppingCart } from '../utilities/fakedb';
import './Shop.css';

const Shop = () => {
    const [products, setProduct] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    const saveCart = [];
    useEffect(() => {
        const storCart = getShoppingCart();
        for (const id in storCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storCart[id];
                addedProduct.quantity = quantity

                saveCart.push(addedProduct)
            }
        }
        setCart(saveCart)
    }, [products])

    const clearHandler = () => {
        setCart([])
        deleteShoppingCart();
    }

    const handlerAddtoCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product={product} key={product.id} handlerAddtoCart={handlerAddtoCart}></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart
                    cart={cart}
                    clearHandler={clearHandler}
                >
                    <div>Check Order</div>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;