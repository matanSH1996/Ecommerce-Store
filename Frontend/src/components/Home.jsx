import React, { useEffect, useState } from "react";
import "../HomePage.css";
import Product from "./Product";
import { doApiGet } from "../services/api";
import Isloggedin from "../services/isloggedin";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    const products = await doApiGet("product");

    setProducts(products?.data ? products?.data : []);
  };

  return (
    <div className="home-component">
      <Isloggedin />
      <div className="homePage-container">
        <img
          className="homePage-wallpaper"
          src="./images/sales-wallpaper.jpg"
          alt="home wallpaper"
        />

        <div className="products-row">
          {products &&
            products?.map((product, i) => {
              return (
                <Product
                  key={product?._id}
                  id={product?._id}
                  title={product?.productName}
                  price={product?.price}
                  rating={5}
                  image={product?.productPicture}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;
