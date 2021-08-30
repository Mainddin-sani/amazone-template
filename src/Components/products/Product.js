import React from 'react';
import './products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = (props) => {
    const {name, img, seller, price, stock} = props.productsItems;
    console.log(props);
    return (
        <div className="products">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="right-side">
                <h3>{name}</h3>
                <p>by: {seller}</p>
                <p><b>${price}</b></p>
                <p><b>{stock}</b></p>
                <button onClick={()=> props.clicAddkHandle(props.productsItems)}><FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
            </div>
            
        </div>
    );
};

export default Product;