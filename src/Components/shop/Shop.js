import React, { useState } from 'react';
import './shop.css';
import loadData from '../../fakeData';
import Product from '../products/Product';
import Cart from '../cart/Cart';

const Shop = () => {
    const first20 = loadData.slice(0,20);
    const [products, setProducts] = useState(first20);
    const [cart, setCart] =useState([]);

    const productsClickHandler = (products)=> {
        const newCart = [...cart, products];
        setCart(newCart)
    }

    return (
        <div className="products-container">
            
            <div className="ic-left-cart">
                <ul>
                {
                    products.map(product => <Product clicAddkHandle={productsClickHandler} productsItems={product}></Product>)
                }
                </ul>
            </div>
            <div className="cart-items">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;