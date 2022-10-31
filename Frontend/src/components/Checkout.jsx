import React, { useEffect, useState } from "react";
import "../checkout.css";
import { doApiMethod } from "../services/api";
import Isloggedin from "../services/isloggedin";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./contextProvider";
import Subtotal from "./Subtotal";

const Checkout = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="checkout">
      <Isloggedin />
      <img
        className="checkout-banner"
        src="./images/life-advice.jpg"
        alt="Life Advice Banner"
      />
      <div className="product-subtotal-div-wrapper">
        <div className="checkout-products-list">
          <h5>Hellow, {user ? user.email : "guess"}</h5>
          <h2 className="checkout-title">Your Shopping Basket</h2>

          {user &&
            user?.cart?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
        </div>

        <div className="checkout-subtotal-div">
          <h2 className="checkout-title">Shopping Summary</h2>
          <Subtotal />
        </div>
      </div>
    </div>
  );
};

export default Checkout;
