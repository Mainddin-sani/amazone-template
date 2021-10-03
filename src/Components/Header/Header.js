import React from 'react';
import logo from '../../images/logo.png';
import './header.css'

const Header = () => {
    return (
        <div className="header-part">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <ul>
                <li>
                    <a href="/shop">Shop</a>
                </li>
                <li>
                    <a href="/review">Review</a>
                </li>
                <li>
                    <a href="/manage">Manage </a>
                </li>
                <li>
                    <a href="/inventory"> Inventory</a>
                </li>
            </ul>
        </div>
    );
};

export default Header;