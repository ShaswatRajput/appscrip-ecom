import React, { useEffect, useState } from "react";
import ShopBanner from "./ShopBanner";
import "./Homepage.css";
import Card from "./Card";
import Footer from "./Footer";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("");
  const getProducts = () => {
    if (!category) {
      fetch("https://fakestoreapi.com/products?limit=18")
        .then((res) => res.json())
        .then((d) => {
          setProducts(d);
          console.log(d);
        });
    } else {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((d) => {
          setProducts(d);
          console.log(d);
        });
    }
  };
  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };
  useEffect(() => {
    getProducts();
  }, [category]);
  return (
    <>
      <ShopBanner />
      <div className="main-container">
        <div className="filter-container">
          <h3>Category</h3>
          <select onChange={handleCategoryChange} value={category}>
            <option value="">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
          <h3>Filter 2</h3>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
          <h3>Filter 3</h3>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
          <h3>Filter 4</h3>
          <select>
            <option>Option 1</option>
            <option>Option 2</option>
            <option>Option 3</option>
            <option>Option 4</option>
            <option>Option 5</option>
          </select>
        </div>

        <div className="product-container">
          {products ? (
            products.map((data) => <Card key={data.id} product={data} />)
          ) : (
            <h1>No Products Found</h1>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
