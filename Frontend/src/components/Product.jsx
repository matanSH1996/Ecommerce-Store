import React from "react";
import "../product.css";
import { doApiMethod } from "../services/api";
import Isloggedin from "../services/isloggedin";
import { useStateValue } from "./contextProvider";

//{title, price, image, rating}
// transfer each card info by props
const Product = ({ id, title, price, rating, image }) => {
  //useState reack's hook
  //"dispatch" is how we manipulate the data
  //we wrapped "index.js" with the Context (<"StateProvider">) so that made any of "index.js" children, accessible to the context, and the data inside of it. the state "{basket}" is accessible inside "Product.jsx" thanks to "reducer.jsx" function.
  const [, dispatch] = useStateValue();

  const addToBasket = async () => {
    const user = await doApiMethod("users/myinfo", "POST", {});
    console.log({
      cart: [...user?.cart, { id, title, price, rating, image }],
    });
    const updatedUser = await doApiMethod("users/" + user?._id, "PUT", {
      cart: [...user?.cart, { id, title, price, rating, image }],
    });

    const userToSet = await doApiMethod("users/myinfo", "POST", {});

    dispatch({
      type: "SET_USER",
      user: userToSet,
    });
  };

  return (
    <div className="product" key={"product-wrapper"}>
      <Isloggedin />
      <div className="product-info" key={"product-info"}>
        <p className="product-title" key={"product-title"}>
          {title}
        </p>
        <p className="product-price" key={"product-price"}>
          {/* the small tag makes the text become smaller */}
          <small>$</small>
          {/* the strong tag makes the text become bolder */}
          <strong>{price}</strong>
        </p>
        <div key={"product-rating"} className="product-rating">
          {Array(rating) //the number of elements inside of the Array, will be defined by the value inserted inside of the "rating" prop
            .fill(undefined) // 5 elements, each is undefined
            .map((e) => (
              <p>🌟</p>
            ))}
          {/* the new array will present each element in the the array as 🌟*/}
        </div>

        <img
          className="product-image"
          key={"product-image"}
          src={image}
          alt="air jordan 1 high tie dye"
        />
        <button
          key={"product-add-button"}
          className="add-to-basket-button"
          onClick={addToBasket}
        >
          Add To Basket
        </button>
      </div>
    </div>
  );
};

export default Product;
