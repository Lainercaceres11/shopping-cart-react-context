import { useContext } from "react";
import CartElements from "./CartElements";
import CartTotal from "./CartTotal";
import { BookContext } from "../../context/BookContext";

import Navbar from  "../Navbar/Navbar"

import "./CartContent.css"


const CartContent = () => {
  const { cart } = useContext(BookContext);
  return (
    <section>
      <Navbar />
      {cart.length <= 0 ? (
       <h1 className="no-products">No hay productos</h1>
      ) : (
        <>
          <CartElements />
          <CartTotal />
        </>
      )}
    </section>
  );
};

export default CartContent;
