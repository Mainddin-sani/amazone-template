import React from 'react';
import './products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const {name, img, seller, price, stock , key } = props.productsItems;
    return (
        <div className="products">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="right-side">
                <h3> <Link to={"/product/"+key}>{name}</Link></h3>
                <p>by: {seller}</p>
                <p><b>${price}</b></p>
                <p><b>{stock}</b></p>
                {
                    props.buttonAddTocart && 
                    <button onClick={()=> props.clicAddkHandle(props.productsItems)}>
                        <FontAwesomeIcon icon={faShoppingCart} /> 
                        Add to Cart
                    </button>}
            </div>
            
        </div>
    );
};

export default Product;