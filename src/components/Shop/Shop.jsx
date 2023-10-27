import React, { useState } from 'react';
import '../../fakeData';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
    const firstTenData = fakeData.slice(0, 10);
    const [products, setProducts] = useState(firstTenData);
    const [cart, setCart] = useState([]);

    const handleAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        console.log(newCart);
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {products.map(product => <Product key={product.key} product={product} handleAddCart={handleAddCart}></Product>)}
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};



export default Shop;