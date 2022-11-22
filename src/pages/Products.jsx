import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Product from "../Components/Product";
import Category from "../Components/Category";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (loading) {
      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        });
      setLoading(false);
    }
  }, [loading]);

  const cat = products.map((element) => element.category);
  return (
    <div style={{ background: "#FCFBFC" }}>
      <Navbar filter={filter} setFilter={setFilter} />
      <Category
        categoryArray={[...new Set(cat)]}
        category={category}
        setCategory={setCategory}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
        }}
      >
        {loading
          ? "loading..."
          : products
              .filter((prod) => {
                if (category && filter)
                  return (
                    prod.category === category &&
                    prod.title.toUpperCase().includes(filter.toUpperCase())
                  );
                else if (filter)
                  return prod.title
                    .toUpperCase()
                    .includes(filter.toUpperCase());
                else if (category) return prod.category === category;
                else return prod;
              })
              .map((p, index) => <Product key={index} {...p} />)}
      </div>
    </div>
  );
};

export default Products;
