import PropTypes from "prop-types";
import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const CounterButton = ({ product }) => {
  const { byProduct, cart, setCart } = useContext(BookContext);

  const decrease = () => {
    const productRepeat = cart.find((item) => item.id === product.id);

    productRepeat.quanty !== 1 &&
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productRepeat.quanty - 1 }
            : item
        )
      );
  };
  return (
    <div>
      <button onClick={() => byProduct(product)} className="counter-button">
        ➕
      </button>
      <span>{product.quanty}</span>
      <button className="counter-button" onClick={decrease}>
        ➖
      </button>
    </div>
  );
};

export default CounterButton;

CounterButton.propTypes = {
  quanty: PropTypes.number,
  product: PropTypes.object,
};
