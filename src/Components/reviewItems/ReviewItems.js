import React from 'react';

const ReviewItems = (props) => {
    console.log(props);
    const {name, quantity } = props.product;
    return (
        <div>
            <h4>{name}</h4>
            <h4>{quantity}</h4>
            <button>Remove</button>
        </div>
    );
};

export default ReviewItems;