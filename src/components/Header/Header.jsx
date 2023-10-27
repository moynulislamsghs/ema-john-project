import React from 'react';
import './Header.css';
import bannerLogo from '../../images/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <img src={bannerLogo} alt="" />
            <ul>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order-review">Order Review</a></li>
                <li><a href="manage-inventory">Manage Inventory Here</a></li>
            </ul>
        </div>
    );
};

export default Header;