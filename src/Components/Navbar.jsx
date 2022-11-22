import { Link } from "react-router-dom";
import Logo from "../Wish.png";
import "./navbar.css";
import SearchBar from "./SearchBar";

const Navbar = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        borderBlockEnd: "1px solid lightgray",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          background: "white",
          color: "white",
        }}
      >
        <div style={{ width: "80px", margin: "10px" }}>
          <img style={{ width: "100%" }} src={Logo}></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Link to="/" className="link">
            <h3 style={{ margin: "5px" }}>Home</h3>
          </Link>
          <Link to="/products" className="link">
            <h3 style={{ margin: " 5px" }}>Products</h3>
          </Link>
        </div>
      </div>
      <SearchBar handleChange={handleChange} filter={filter} />
    </div>
  );
};

export default Navbar;
