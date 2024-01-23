import { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import CounterButton from "./CounterButton";

const CartElements = () => {
  const { cart, setCart } = useContext(BookContext);

  const deleteProduct = (id)=>{
    const foundId = cart.find((element) => element.id === id)

    const newCart = cart.filter((item) => {
      return item !== foundId
    })

    setCart(newCart)

  }
  return (
    <div>
      <h1 className="elements-title">Productos de su carrito</h1>
      {cart.length <= 0 && (
        <p style={{ textAlign: "center" }}>No hay elementos</p>
      )}
      {cart.map((product) => (
        <div className="cardContent" key={product.id}>
          <img width={250} src={product.img} alt={product.name} />
          <span className="name">{product.name}</span>
          <CounterButton product={product} />
          <span className="price">{product.price * product.quanty}</span>
          <button className="cart-delete-button" onClick={()=> deleteProduct(product.id)}>❌</button>
        </div>
      ))}
    </div>
  );
};

export default CartElements;
