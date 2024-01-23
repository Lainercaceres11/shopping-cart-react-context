import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const CartTotal = () => {
  const { cart } = useContext(BookContext);

  const cartTotalPrice = cart.reduce((acc, element) => acc + element.price * element.quanty, 0);
  return <p className="cartTotal">Total a pagar: {cartTotalPrice} $</p>;
};

export default CartTotal;
