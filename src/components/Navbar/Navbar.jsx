import { Link } from "react-router-dom";
import ItemsTotal from "../CartContent/ItemsTotal";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

import "./Navbar.css";

const Navbar = () => {
  const { cart } = useContext(BookContext);

  return (
    <div>
      <nav className="navbar">
        <Link className="navbar-logo" to="/">
          <h1 >Books Shop</h1>
        </Link>
        <Link className="navbar-icon" to={"/cart"}>
          <h2>🛒 {cart.length > 0 ? <ItemsTotal /> : null} </h2>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
