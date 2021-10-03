import React, { useState, useEffect } from 'react';
import { getDatabaseCart } from '../../utilities/databaseManager';
import fakeData from './../../fakeData/index';
import ReviewItems from './../reviewItems/ReviewItems';

const Review = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedData = getDatabaseCart();
        const productsKey = Object.keys(savedData);
        const productHandler = productsKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedData[key];
            return product;
        });
        setCart(productHandler);
    }, []);

    return (
        <div>
            <h1>This the page {cart.length}</h1>
            {
                cart.map(pd=> <ReviewItems product={pd}></ReviewItems>)
            }
            
        </div>
    );
};

export default Review;