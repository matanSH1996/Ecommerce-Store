import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "../checkoutProduct.css";
import { doApiMethod } from "../services/api";
import Isloggedin from "../services/isloggedin";
import { useStateValue } from "./contextProvider";

const CheckoutProduct = ({ id, image, rating, title, price }) => {
  //in order to manipulate the basket's items, firstly, we need to import the value which hold's the basket's items and the variable which allows to change it, which is "dispatch".

  //after that we will dispatch an action into the dataLayer or "reducer"
  const [{ user }] = useStateValue();

  const [, dispatch] = useStateValue();


  //we will create a function with the action name - "REMOVE_FROM_BASKET", and we will add the prop "id" into it. (the id will allow us to idendify the relevant item that we want to remove from the list)
  const removeFromBasket = async () => {
    const user = await doApiMethod("users/myinfo", "POST", {});
    const updatedUser = await doApiMethod("users/" + user?._id, "PUT", {
      cart: user?.cart?.filter((item) => item?.id !== id),
    });

    const userToSet = await doApiMethod("users/myinfo", "POST", {});

    dispatch({
      type: "SET_USER",
      user: userToSet,
    });
  };

  return (
    <div className="checkoutProduct">
      <Isloggedin />
      <div className="checkoutProduct-info">
        <p className="checkoutProduct-title">{title}</p>
        <img className="checkoutProduct-image" src={image} alt={title} />
        <p className="checkoutProduct-price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct-rating">
          {Array(rating)
            .fill(undefined)
            .map((e) => (
              <p>🌟</p>
            ))}
        </div>

        <button
          className="checkoutProduct-remove-button"
          onClick={removeFromBasket}
        >
          Remove From Basket
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
