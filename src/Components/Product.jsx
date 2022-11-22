import { useContext } from "react";
import { CartContext } from "../Contexts/CartContextj";
import "./product.css";

const Product = ({ image, price, title }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className="product">
      <span style={{ fontWeight: "bold", fontsize: "12px" }}> {title}</span>
      <span> {price} $</span>
      <div style={{ width: "150px", height: "180px" }}>
        <img
          style={{ width: "100%", height: "100%" }}
          src={image}
          alt="item img"
        />
      </div>
      <button className="btnAdd">Add to cart</button>
    </div>
  );
};

export default Product;
