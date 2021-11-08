import React, { useEffect, useState } from "react";
import "./shop.css";
import loadData from "../../fakeData";
import Product from "../products/Product";
import Cart from "../cart/Cart";
import {
  addToDatabaseCart,
  getDatabaseCart,
} from "../../utilities/databaseManager";
import { Link } from "react-router-dom";

const Shop = () => {
  const first20 = loadData.slice(0, 20);
  const [products, setProducts] = useState(first20);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getDatabaseCart();
    const productKey = Object.keys(savedCart);
    const previous = productKey.map((pdKey) => {
      const product = loadData.find((pd) => pd.key === pdKey);
      product.quantity = savedCart[pdKey];
      return product;
    });
    setCart(previous);
  }, []);

  const productsClickHandler = (products) => {
    const toBeproducts = products.key;
    const sameProducts = cart.find((pd) => pd.key === toBeproducts);
    let count = 1;
    let newCart;
    if (sameProducts) {
      count = sameProducts.quantity + 1;
      sameProducts.quantity = count;
      const other = cart.filter((pd) => pd.key !== toBeproducts);
      newCart = [...other, sameProducts];
    } else {
      products.quantity = 1;
      newCart = [...cart, products];
    }
    setCart(newCart);
    addToDatabaseCart(products.key, count);
  };

  return (
    <div className="products-container">
      <div className="ic-left-cart">
        <ul>
          {products.map((product) => (
            <Product
              key={product.key}
              buttonAddTocart={true}
              clicAddkHandle={productsClickHandler}
              productsItems={product}
            ></Product>
          ))}
        </ul>
      </div>
      <div className="cart-items">
        <Cart cart={cart}>
          <button>
            <Link to="/review">Review</Link>
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
