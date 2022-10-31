import React, { useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import "../subtotal.css";
import { useStateValue } from "./contextProvider";
import { useNavigate } from "react-router-dom";
// import { doApiMethod } from "../services/api";
import Isloggedin from "../services/isloggedin";
import { useState } from "react";

const Subtotal = () => {
  const navigate = useNavigate();

  const goToPayment = (e) => {
    e.preventDefault();
    navigate("/paymentPage");
  };
  const [{ user }] = useStateValue();

  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(() => {
    setFinalPrice(0);
    getFinalPrice();
  }, [user]);

  const getFinalPrice = () => {
    user?.cart?.map((item) => setFinalPrice((prev) => prev + item.price));
  };

  return (
    <div className="subtotal">
      <Isloggedin />
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({user && user?.cart?.length ? user?.cart?.length : 0}{" "}
              items):
              <strong>{value}</strong>
              {/* <small>$</small><strong>0</strong> */}
            </p>
          </div>
        )}
        decimalScale={2}
        value={finalPrice}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />

      <button className="checkout-btn" onClick={goToPayment}>
        Proceed To Checkout
      </button>
    </div>
  );
};

export default Subtotal;
