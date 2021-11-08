import React, { useState, useEffect } from "react";
import {
  getDatabaseCart,
  processOrder,
  removeFromDatabaseCart,
} from "../../utilities/databaseManager";
import fakeData from "./../../fakeData/index";
import ReviewItems from "./../reviewItems/ReviewItems";
import Cart from "./../cart/Cart";
import images from "../../images/giphy.gif";
import { useHistory } from "react-router";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [placeOrderbtn, SetPlaceORderBtn] = useState(false);

  const removedHandler = (productsKey) => {
    console.log("cliked", productsKey);
    const newCart = cart.filter((pd) => pd.key !== productsKey);
    setCart(newCart);
    removeFromDatabaseCart(productsKey);
  };
  const history = useHistory();
  const placeOrder = () => {
    history.push("/shipment");
  };
  useEffect(() => {
    const savedData = getDatabaseCart();
    const productsKey = Object.keys(savedData);
    const productHandler = productsKey.map((key) => {
      const product = fakeData.find((pd) => pd.key === key);
      product.quantity = savedData[key];
      return product;
    });
    setCart(productHandler);
  }, []);
  let thankYou;
  if (placeOrderbtn) {
    thankYou = <img src={images} alt="" />;
  }
  return (
    <div>
      <div className="products-container">
        <div className="ic-left-cart">
          {cart.map((pd) => (
            <ReviewItems
              removedHandler={removedHandler}
              product={pd}
            ></ReviewItems>
          ))}
          {thankYou}
        </div>
        <div className="cart-items">
          <Cart cart={cart}>
            <button onClick={placeOrder}>Place Order</button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Review;
