import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

import axios from "axios";

export const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("db.json").then((res) => setData(res.data));
  }, []);

  const byProduct = (product)=>{
    const productRepeat = cart.find((item) => item.id === product.id);

    if (productRepeat) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...product, quanty: productRepeat.quanty + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, product]);
    }
   
  }

  return (
    <BookContext.Provider value={{data, cart, setCart, byProduct}}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;

BookProvider.propTypes = {
  children: PropTypes.node,
};
