import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import OrderProduct from '../OrderProduct/OrderProduct';
import './Order-Review.css'
import { deleteShoppingCart, removeFromDb } from '../utilities/fakedb';


const OrderReview = () => {
    const data = useLoaderData();
    const [cart, setCart] = useState(data);
    const deleteData = (id) => {
        const remaining = cart.filter(pd => pd.id !== id)
        setCart(remaining)

        removeFromDb(id)
    }
    const clearHandler = () => {
        setCart([])
        deleteShoppingCart();
    }
    return (
        <div>
            <div className='order-container'>
                <div className='pd-container body'>
                    {
                        cart.map(product => <OrderProduct
                            product={product}
                            key={product.id}
                            handlerDelete={deleteData}
                        ></OrderProduct>)
                    }
                </div>
                <div className='cart-container'>
                    <Cart cart={cart}
                        clearHandler={clearHandler}
                    >
                        <div>Proceed Checkout</div>
                    </Cart>
                </div>
            </div>
        </div >
    );
};

export default OrderReview;