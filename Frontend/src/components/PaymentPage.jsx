import React, { useEffect } from "react";
import "../paymentPage.css";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "./contextProvider";
import { Link } from "react-router-dom";
import { doApiMethod } from "../services/api";
import Isloggedin from "../services/isloggedin";
import PaymentForm from '../PaymentForm'
import MuiAddressForm from './MuiAddressForm'


const PaymentPage = () => {
  const [{ user }] = useStateValue();

  return (
    <div className="paymentPage">
      <Isloggedin />
      <div className="paymentPage-wrapper">
        <div className="paymentPage-headline">
          <h1>Checkout</h1>
          <Link to={"/checkout"} className="title-item-sum">
            (<h3>{user && user?.cart?.length} items</h3>)
          </Link>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Delivery Adress</h3>
          </div>
          <div className="payment-address">
            <p>{user?.email}</p>
            < MuiAddressForm />

          </div>
        </div>

        <div className="payment-section">
          <div className="payment-title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment-item">
            {user &&
              user?.cart?.map((e) => (
                <CheckoutProduct
                  id={e.id}
                  title={e.title}
                  image={e.image}
                  price={e.price}
                  rating={e.rating}
                />
              ))}
          </div>
        </div>

        {/* payment section - payment method */}
        <div className="payment-section">
          <div className="payment-title">
            <h3>payment method</h3>
          </div>

          <div className="payment-details">
            <PaymentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
