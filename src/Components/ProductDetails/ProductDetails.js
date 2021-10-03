import React from 'react';
import { useParams } from 'react-router';
import fakeData from './../../fakeData/index';
import Product from './../products/Product';

const ProductDetails = () => { 
    const {productsKey} = useParams();
    const ProductsID = fakeData.find(pd => pd.key === productsKey);
    console.log(ProductsID);
    return (
        <div>
         <Product buttonAddTocart={false} productsItems={ProductsID}></Product>
         <p>details</p>
        </div>
    );
};

export default ProductDetails;