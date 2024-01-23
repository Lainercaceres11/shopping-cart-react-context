import {useContext } from "react"
import { BookContext } from "../../context/BookContext"

import "./Products.css"

const Products = () => {
  const {data, byProduct} = useContext(BookContext) 

  return (
    <div className="product-card-container">
        {data.map(book=> (
            <div className="card" key={book.id}>
                <img width={250} src={book.img} alt={book.name} />
                <h3>{book.name}</h3>
                <h4>{book.author}</h4>
                <p>{book.price}$</p>
                <button onClick={()=> byProduct(book)}>Buy</button>
            </div>
        ))}
    </div>
  )
}

export default Products