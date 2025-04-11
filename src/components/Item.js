import React, {useState} from "react";

function Item({ name, category }) {
  const [ inCart, addCart ] = useState(false);

  function handleCart(){
    addCart((inCart) => !inCart)
  }

  const addedToCart = inCart? "in-cart" : ""; 

  return (
    <li className={addedToCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCart} className="add">{ inCart? "Remove From Cart" : "Add to Cart" }</button>
    </li>
  );
}

export default Item;
