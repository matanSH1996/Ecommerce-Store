import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "./contextProvider";
import { auth } from "../firebase";
import { doApiMethod } from "../services/api";
import Isloggedin from "../services/isloggedin";

const Header = () => {
  const navigate = useNavigate();

  const [{ user }, dispatch] = useStateValue();

  //creating the signOut method
  const handleAuthentication = () => {
    if (user) {
      localStorage.removeItem("tok");
      dispatch({
        type: "SET_USER",
        user: null,
      });
      navigate("/");
    }
  };

  return (
    <div className="header">
      <Isloggedin />
      <div className="logo-div" key={"amazon-logo"}>
        <Link to="/">
          <img
            className="logo-pic"
            src="./images/amazon-logo.jpg"
            alt="amazon"
          />
        </Link>
      </div>

      <div className="header-search-div">
        <input className="header-search-input" type="text" />
        <SearchIcon className="header-search-icon" />
      </div>

      <div className="header-navbar-tools">
        {/* only user which has not signed in yet, will be able to click on the link */}
        <Link to={!user?._id && "/login"}>
          <div className="header-sign-in-div">
            <span className="first-line">
              {user?._id ? "hello " + user.email : "hello guess"}
            </span>

            {/* if user is signed-in, the title shown is "Sign-out" if there will be no user signed, the title shown is ""Sign-in*/}
            <span
              key={"auth-handling"}
              onClick={handleAuthentication}
              className="second-line"
            >
              {user?._id ? "Sign-out" : "Sign-in"}
            </span>
          </div>
        </Link>
        <div className="header-orders-div">
          <span className="first-line">return</span>
          <span className="second-line">&orders</span>
        </div>
        <div className="header-cart-div">
          <span className="first-line">your</span>
          <span className="second-line">prime</span>
        </div>
      </div>

      <div className="shoppingBasket-icon-div">
        <Link to="/checkout" key={"shopping- button"}>
          <ShoppingBasketIcon htmlColor="white" />
        </Link>
        <span className="second-line basket-counter">{user && user?.cart?.length}</span>
      </div>
    </div>
  );
};

export default Header;
