import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checkout";
import LoginPage from "./components/LoginPage";
// import { auth } from "./firebase";
import PaymentPage from "./components/PaymentPage.jsx";

//pull the user's log in information from the context
// import { useStateValue } from "../src/components/contextProvider";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route key={"login-route"} path="/login" element={<LoginPage />} />
        <Route
          key={"checkout-route"}
          path="/checkout"
          element={[<Header />, <Checkout />]}
        />
        <Route
          key={"homepage-route"}
          path="/"
          element={[<Header />, <Home />]}
        />
        <Route
          key={"paymentPage-route"}
          path="/paymentPage"
          element={[<Header />, <PaymentPage />]}
        />
      </Routes>
    </div>
  );
}

export default App;
