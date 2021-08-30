import React, { useState } from 'react';
import './shop.css';
import loadData from '../../fakeData';
import Product from '../products/Product';

const Shop = () => {
    const first20 = loadData.slice(0,20);
    const [products, setProducts] = useState(first20);
    const [cart, setCart] =useState([])

    const productsClickHandler = (products)=> {
        console.log(products);
        console.log(cart);
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
                <h3>Cart Items</h3>
                <p>cart Items {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;