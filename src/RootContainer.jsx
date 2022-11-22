import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { CartContext } from "./Contexts/CartContextj";
import { useState } from "react";
const RootContainer = () => {
  const [cart, setCart] = useState([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Products" element={<Products />}></Route>
      </Routes>
    </CartContext.Provider>
  );
};

export default RootContainer;
