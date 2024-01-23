import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const ItemsTotal = () => {
  const { cart } = useContext(BookContext);

  const itemsQuanty = cart.reduce((acc, element) => acc + element.quanty, 0);
  return <span className="card-items-total">{itemsQuanty}</span>;
};

export default ItemsTotal;
