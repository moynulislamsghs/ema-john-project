import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const {img, name, seller, price, stock} = props.product;
    return (
        <div className='products'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div className='product-details'>
                <h3 className='product-name'>{name}</h3>
                <br />
                <p><small>By: {seller}</small></p>
                <br />
                <p>${price}</p>
                <p><small>Only {stock} left in stock - order soon</small></p>
                <button onClick={()=>props.handleAddCart(props.product)} className='add-to-cart-btn'><FontAwesomeIcon icon={faCartShopping} /> add to cart</button>
            </div>
        </div>
    );
};

export default Product;