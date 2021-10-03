import React from 'react';

const ReviewItems = (props) => {
    console.log(props);
    const {name, quantity, key, price } = props.product;
    return (
        <div>
            <h4>{name}</h4>
            <h4>{quantity}</h4>
            <h4>{price}</h4>
            <button onClick={()=>props.removedHandler(key)}>Remove</button>
        </div>
    );
};

export default ReviewItems;