import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    
    /*
    we can calculate total price in two ways--

    <-- first way starts here -->
    
        let totalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            const prd = cart[i];
            totalPrice += prd.price;
        }

    <-- first way ends here -->
    
    <-- second way starts here -->

        const totalPrice = cart.reduce( (total, prd) => total + prd.price , 0);

    <-- second way ends here -->

    */

    
    const totalPrice = cart.reduce( (total, prd) => total + prd.price , 0);
    let shippingCost = 0;
    if(totalPrice > 35){
        shippingCost = 0;
    }
    else if(totalPrice > 15){
        shippingCost = 6.99;
    }
    else if(totalPrice > 0){
        shippingCost = 9.99;
    }

    const totalBeforeTax = totalPrice + shippingCost;
    const tax = totalBeforeTax/10;
    const orderTotal = totalBeforeTax + tax;

    const formatAmount = (num) =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div className='cart-details'>
            <h3>Order Summary</h3>
            <h5>Items Ordered: {cart.length}</h5>
            <p>Items: ${formatAmount(totalPrice)}</p>
            <p>Shipping & Handling: ${shippingCost}</p>
            <p>Total before tax: ${formatAmount(totalBeforeTax)}</p>
            <p>Estimated Tax: ${formatAmount(tax)}</p>
            <p>Order Total: ${formatAmount(orderTotal)}</p>
        </div>
    );
};

export default Cart;