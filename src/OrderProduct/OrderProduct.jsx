import React from 'react';
import './orderProduct.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt, } from '@fortawesome/free-solid-svg-icons'

const OrderProduct = ({ product, handlerDelete, children }) => {
    const { name, price, id, img, quantity } = product;
    return (
        <div className='main-container'>
            <div className='container'>

                <div className='cart-img'>
                    <img src={img} width={91} alt="" />
                </div>

                <div className='cart-info'>
                    <div>
                        <h4>{name}</h4>
                        <p>Price: {price}</p>
                        <p>Quantity: {quantity}</p>
                    </div>

                </div>

            </div>
            <div className='btn-info '>
                <button onClick={() => handlerDelete(id)} className='trash-container'> <FontAwesomeIcon className='trash' icon={faTrashAlt} /></button>
            </div>


        </div>
    );
};

export default OrderProduct;